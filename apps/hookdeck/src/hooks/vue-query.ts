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

export function getAttemptsKey() {
  return ['attempts'] as const
}

export function getBookmarksKey() {
  return ['bookmarks'] as const
}

export function getBulkKey() {
  return ['bulk'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDestinationsKey() {
  return ['destinations'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getIssueTriggersKey() {
  return ['issue-triggers'] as const
}

export function getIssuesKey() {
  return ['issues'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getRequestsKey() {
  return ['requests'] as const
}

export function getSourcesKey() {
  return ['sources'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTransformationsKey() {
  return ['transformations'] as const
}

export function getIssueTriggersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers']['$get']>>,
) {
  return ['issue-triggers', '/issue-triggers', toValue(args)] as const
}

export function getIssueTriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-triggers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTriggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
            >
          >,
          ReturnType<typeof getIssueTriggersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-triggers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIssueTriggersMutationKey() {
  return ['issue-triggers', '/issue-triggers', 'PUT'] as const
}

export function getPutIssueTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTriggersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['issue-triggers']['$put']>) {
      return parseResponse(client['issue-triggers'].$put(args, options))
    },
  })
}

export function usePutIssueTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers']['$put']>,
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
  const mutationDefaults = getPutIssueTriggersMutationOptions<TError, TOnMutateResult>(
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

export function getPostIssueTriggersMutationKey() {
  return ['issue-triggers', '/issue-triggers', 'POST'] as const
}

export function getPostIssueTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueTriggersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['issue-triggers']['$post']>) {
      return parseResponse(client['issue-triggers'].$post(args, options))
    },
  })
}

export function usePostIssueTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers']['$post']>,
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
  const mutationDefaults = getPostIssueTriggersMutationOptions<TError, TOnMutateResult>(
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

export function getIssueTriggersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>>,
) {
  return ['issue-triggers', '/issue-triggers/:id', toValue(args)] as const
}

export function getIssueTriggersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTriggersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-triggers'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTriggersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIssueTriggersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTriggersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTriggersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-triggers'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIssueTriggersIdMutationKey() {
  return ['issue-triggers', '/issue-triggers/:id', 'PUT'] as const
}

export function getPutIssueTriggersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTriggersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['issue-triggers'][':id']['$put']>) {
      return parseResponse(client['issue-triggers'][':id'].$put(args, options))
    },
  })
}

export function usePutIssueTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers'][':id']['$put']>,
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
  const mutationDefaults = getPutIssueTriggersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIssueTriggersIdMutationKey() {
  return ['issue-triggers', '/issue-triggers/:id', 'DELETE'] as const
}

export function getDeleteIssueTriggersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueTriggersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']>) {
      return parseResponse(client['issue-triggers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteIssueTriggersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteIssueTriggersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutIssueTriggersIdDisableMutationKey() {
  return ['issue-triggers', '/issue-triggers/:id/disable', 'PUT'] as const
}

export function getPutIssueTriggersIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTriggersIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']>,
    ) {
      return parseResponse(client['issue-triggers'][':id'].disable.$put(args, options))
    },
  })
}

export function usePutIssueTriggersIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['disable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']>,
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
  const mutationDefaults = getPutIssueTriggersIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPutIssueTriggersIdEnableMutationKey() {
  return ['issue-triggers', '/issue-triggers/:id/enable', 'PUT'] as const
}

export function getPutIssueTriggersIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTriggersIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']>,
    ) {
      return parseResponse(client['issue-triggers'][':id'].enable.$put(args, options))
    },
  })
}

export function usePutIssueTriggersIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['enable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']>,
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
  const mutationDefaults = getPutIssueTriggersIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getAttemptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attempts.$get>>,
) {
  return ['attempts', '/attempts', toValue(args)] as const
}

export function getAttemptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attempts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attempts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAttempts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attempts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>
          >,
          ReturnType<typeof getAttemptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttemptsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attempts)[':id']['$get']>>,
) {
  return ['attempts', '/attempts/:id', toValue(args)] as const
}

export function getAttemptsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attempts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttemptsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attempts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttemptsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attempts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAttemptsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAttemptsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttemptsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attempts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
) {
  return ['bookmarks', '/bookmarks', toValue(args)] as const
}

export function getBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
          >,
          ReturnType<typeof getBookmarksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookmarksMutationKey() {
  return ['bookmarks', '/bookmarks', 'POST'] as const
}

export function getPostBookmarksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>>,
    TError,
    InferRequestType<typeof client.bookmarks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bookmarks.$post>) {
      return parseResponse(client.bookmarks.$post(args, options))
    },
  })
}

export function usePostBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bookmarks.$post>,
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
  const mutationDefaults = getPostBookmarksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookmarksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['$get']>>,
) {
  return ['bookmarks', '/bookmarks/:id', toValue(args)] as const
}

export function getBookmarksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBookmarksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBookmarksIdMutationKey() {
  return ['bookmarks', '/bookmarks/:id', 'PUT'] as const
}

export function getPutBookmarksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBookmarksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmarks)[':id']['$put']>) {
      return parseResponse(client.bookmarks[':id'].$put(args, options))
    },
  })
}

export function usePutBookmarksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':id']['$put']>,
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
  const mutationDefaults = getPutBookmarksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBookmarksIdMutationKey() {
  return ['bookmarks', '/bookmarks/:id', 'DELETE'] as const
}

export function getDeleteBookmarksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookmarksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmarks)[':id']['$delete']>) {
      return parseResponse(client.bookmarks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBookmarksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteBookmarksIdMutationOptions<TError, TOnMutateResult>(
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

export function getBookmarksIdRawBodyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>,
) {
  return ['bookmarks', '/bookmarks/:id/raw_body', toValue(args)] as const
}

export function getBookmarksIdRawBodyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksIdRawBodyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':id'].raw_body.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksIdRawBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksIdRawBodyQueryKey>
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
          Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksIdRawBodyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksIdRawBodyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':id'].raw_body.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookmarksIdTriggerMutationKey() {
  return ['bookmarks', '/bookmarks/:id/trigger', 'POST'] as const
}

export function getPostBookmarksIdTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':id']['trigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksIdTriggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']>) {
      return parseResponse(client.bookmarks[':id'].trigger.$post(args, options))
    },
  })
}

export function usePostBookmarksIdTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':id']['trigger']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']>,
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
  const mutationDefaults = getPostBookmarksIdTriggerMutationOptions<TError, TOnMutateResult>(
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

export function getDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
) {
  return ['destinations', '/destinations', toValue(args)] as const
}

export function getDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          ReturnType<typeof getDestinationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDestinationsMutationKey() {
  return ['destinations', '/destinations', 'PUT'] as const
}

export function getPutDestinationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$put>>>>>,
    TError,
    InferRequestType<typeof client.destinations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.destinations.$put>) {
      return parseResponse(client.destinations.$put(args, options))
    },
  })
}

export function usePutDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$put>,
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
  const mutationDefaults = getPutDestinationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDestinationsMutationKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function getPostDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.destinations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.destinations.$post>) {
      return parseResponse(client.destinations.$post(args, options))
    },
  })
}

export function usePostDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$post>,
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
  const mutationDefaults = getPostDestinationsMutationOptions<TError, TOnMutateResult>(
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

export function getDestinationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':id']['$get']>>,
) {
  return ['destinations', '/destinations/:id', toValue(args)] as const
}

export function getDestinationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestinationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDestinationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestinationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDestinationsIdMutationKey() {
  return ['destinations', '/destinations/:id', 'PUT'] as const
}

export function getPutDestinationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.destinations)[':id']['$put']>) {
      return parseResponse(client.destinations[':id'].$put(args, options))
    },
  })
}

export function usePutDestinationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['$put']>,
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
  const mutationDefaults = getPutDestinationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDestinationsIdMutationKey() {
  return ['destinations', '/destinations/:id', 'DELETE'] as const
}

export function getDeleteDestinationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDestinationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.destinations)[':id']['$delete']>) {
      return parseResponse(client.destinations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDestinationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteDestinationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutDestinationsIdDisableMutationKey() {
  return ['destinations', '/destinations/:id/disable', 'PUT'] as const
}

export function getPutDestinationsIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.destinations)[':id']['disable']['$put']>,
    ) {
      return parseResponse(client.destinations[':id'].disable.$put(args, options))
    },
  })
}

export function usePutDestinationsIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':id']['disable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['disable']['$put']>,
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
  const mutationDefaults = getPutDestinationsIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPutDestinationsIdArchiveMutationKey() {
  return ['destinations', '/destinations/:id/archive', 'PUT'] as const
}

export function getPutDestinationsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['archive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.destinations)[':id']['archive']['$put']>,
    ) {
      return parseResponse(client.destinations[':id'].archive.$put(args, options))
    },
  })
}

export function usePutDestinationsIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':id']['archive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['archive']['$put']>,
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
  const mutationDefaults = getPutDestinationsIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutDestinationsIdEnableMutationKey() {
  return ['destinations', '/destinations/:id/enable', 'PUT'] as const
}

export function getPutDestinationsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.destinations)[':id']['enable']['$put']>,
    ) {
      return parseResponse(client.destinations[':id'].enable.$put(args, options))
    },
  })
}

export function usePutDestinationsIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':id']['enable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['enable']['$put']>,
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
  const mutationDefaults = getPutDestinationsIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPutDestinationsIdUnarchiveMutationKey() {
  return ['destinations', '/destinations/:id/unarchive', 'PUT'] as const
}

export function getPutDestinationsIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDestinationsIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']>,
    ) {
      return parseResponse(client.destinations[':id'].unarchive.$put(args, options))
    },
  })
}

export function usePutDestinationsIdUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':id']['unarchive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']>,
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
  const mutationDefaults = getPutDestinationsIdUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getBulkEventsRetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.$get>>,
) {
  return ['bulk', '/bulk/events/retry', toValue(args)] as const
}

export function getBulkEventsRetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkEventsRetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.events.retry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkEventsRetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>
            >
          >,
          ReturnType<typeof getBulkEventsRetryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkEventsRetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkEventsRetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.events.retry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkEventsRetryMutationKey() {
  return ['bulk', '/bulk/events/retry', 'POST'] as const
}

export function getPostBulkEventsRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bulk.events.retry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkEventsRetryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk.events.retry.$post>) {
      return parseResponse(client.bulk.events.retry.$post(args, options))
    },
  })
}

export function usePostBulkEventsRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bulk.events.retry.$post>,
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
  const mutationDefaults = getPostBulkEventsRetryMutationOptions<TError, TOnMutateResult>(
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

export function getBulkEventsRetryPlanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.plan.$get>>,
) {
  return ['bulk', '/bulk/events/retry/plan', toValue(args)] as const
}

export function getBulkEventsRetryPlanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.plan.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkEventsRetryPlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.events.retry.plan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkEventsRetryPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.events.retry.plan.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
            >
          >,
          ReturnType<typeof getBulkEventsRetryPlanQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkEventsRetryPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkEventsRetryPlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.events.retry.plan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkEventsRetryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>>,
) {
  return ['bulk', '/bulk/events/retry/:id', toValue(args)] as const
}

export function getBulkEventsRetryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkEventsRetryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.events.retry[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkEventsRetryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkEventsRetryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkEventsRetryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkEventsRetryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.events.retry[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkEventsRetryIdCancelMutationKey() {
  return ['bulk', '/bulk/events/retry/:id/cancel', 'POST'] as const
}

export function getPostBulkEventsRetryIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkEventsRetryIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.bulk.events.retry[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostBulkEventsRetryIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostBulkEventsRetryIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
) {
  return ['events', '/events/:id', toValue(args)] as const
}

export function getEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsIdRawBodyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>>,
) {
  return ['events', '/events/:id/raw_body', toValue(args)] as const
}

export function getEventsIdRawBodyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdRawBodyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':id'].raw_body.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsIdRawBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsIdRawBodyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdRawBodyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdRawBodyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':id'].raw_body.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsIdRetryMutationKey() {
  return ['events', '/events/:id/retry', 'POST'] as const
}

export function getPostEventsIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['retry']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsIdRetryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':id']['retry']['$post']>) {
      return parseResponse(client.events[':id'].retry.$post(args, options))
    },
  })
}

export function usePostEventsIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':id']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':id']['retry']['$post']>,
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
  const mutationDefaults = getPostEventsIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function getPutEventsIdMuteMutationKey() {
  return ['events', '/events/:id/mute', 'PUT'] as const
}

export function getPutEventsIdMuteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['mute']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':id']['mute']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsIdMuteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':id']['mute']['$put']>) {
      return parseResponse(client.events[':id'].mute.$put(args, options))
    },
  })
}

export function usePutEventsIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':id']['mute']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':id']['mute']['$put']>,
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
  const mutationDefaults = getPutEventsIdMuteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBulkIgnoredEventsRetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>>,
) {
  return ['bulk', '/bulk/ignored-events/retry', toValue(args)] as const
}

export function getBulkIgnoredEventsRetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkIgnoredEventsRetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk['ignored-events'].retry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkIgnoredEventsRetry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkIgnoredEventsRetryQueryKey>
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
          Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkIgnoredEventsRetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkIgnoredEventsRetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk['ignored-events'].retry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkIgnoredEventsRetryMutationKey() {
  return ['bulk', '/bulk/ignored-events/retry', 'POST'] as const
}

export function getPostBulkIgnoredEventsRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkIgnoredEventsRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']>,
    ) {
      return parseResponse(client.bulk['ignored-events'].retry.$post(args, options))
    },
  })
}

export function usePostBulkIgnoredEventsRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']>,
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
  const mutationDefaults = getPostBulkIgnoredEventsRetryMutationOptions<TError, TOnMutateResult>(
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

export function getBulkIgnoredEventsRetryPlanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>
  >,
) {
  return ['bulk', '/bulk/ignored-events/retry/plan', toValue(args)] as const
}

export function getBulkIgnoredEventsRetryPlanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkIgnoredEventsRetryPlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk['ignored-events'].retry.plan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkIgnoredEventsRetryPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkIgnoredEventsRetryPlanQueryKey>
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
          Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkIgnoredEventsRetryPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkIgnoredEventsRetryPlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk['ignored-events'].retry.plan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkIgnoredEventsRetryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>
  >,
) {
  return ['bulk', '/bulk/ignored-events/retry/:id', toValue(args)] as const
}

export function getBulkIgnoredEventsRetryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkIgnoredEventsRetryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk['ignored-events'].retry[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkIgnoredEventsRetryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkIgnoredEventsRetryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkIgnoredEventsRetryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkIgnoredEventsRetryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk['ignored-events'].retry[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkIgnoredEventsRetryIdCancelMutationKey() {
  return ['bulk', '/bulk/ignored-events/retry/:id/cancel', 'POST'] as const
}

export function getPostBulkIgnoredEventsRetryIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkIgnoredEventsRetryIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.bulk['ignored-events'].retry[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostBulkIgnoredEventsRetryIdCancel<
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
                    (typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']
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
  const mutationDefaults = getPostBulkIgnoredEventsRetryIdCancelMutationOptions<
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

export function getIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
) {
  return ['integrations', '/integrations', toValue(args)] as const
}

export function getIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
          >,
          ReturnType<typeof getIntegrationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIntegrationsMutationKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function getPostIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.$post>) {
      return parseResponse(client.integrations.$post(args, options))
    },
  })
}

export function usePostIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.integrations.$post>,
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
  const mutationDefaults = getPostIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
) {
  return ['integrations', '/integrations/:id', toValue(args)] as const
}

export function getIntegrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIntegrationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIntegrationsIdMutationKey() {
  return ['integrations', '/integrations/:id', 'PUT'] as const
}

export function getPutIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntegrationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.integrations)[':id']['$put']>) {
      return parseResponse(client.integrations[':id'].$put(args, options))
    },
  })
}

export function usePutIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.integrations)[':id']['$put']>,
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
  const mutationDefaults = getPutIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIntegrationsIdMutationKey() {
  return ['integrations', '/integrations/:id', 'DELETE'] as const
}

export function getDeleteIntegrationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.integrations)[':id']['$delete']>) {
      return parseResponse(client.integrations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIntegrationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.integrations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteIntegrationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutIntegrationsIdAttachSourceIdMutationKey() {
  return ['integrations', '/integrations/:id/attach/:source_id', 'PUT'] as const
}

export function getPutIntegrationsIdAttachSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntegrationsIdAttachSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>,
    ) {
      return parseResponse(client.integrations[':id'].attach[':source_id'].$put(args, options))
    },
  })
}

export function usePutIntegrationsIdAttachSourceId<
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
                  ReturnType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>,
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
  const mutationDefaults = getPutIntegrationsIdAttachSourceIdMutationOptions<
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

export function getPutIntegrationsIdDetachSourceIdMutationKey() {
  return ['integrations', '/integrations/:id/detach/:source_id', 'PUT'] as const
}

export function getPutIntegrationsIdDetachSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntegrationsIdDetachSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>,
    ) {
      return parseResponse(client.integrations[':id'].detach[':source_id'].$put(args, options))
    },
  })
}

export function usePutIntegrationsIdDetachSourceId<
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
                  ReturnType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>,
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
  const mutationDefaults = getPutIntegrationsIdDetachSourceIdMutationOptions<
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

export function getIssuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.$get>>,
) {
  return ['issues', '/issues', toValue(args)] as const
}

export function getIssuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issues.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
          ReturnType<typeof getIssuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssuesCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.count.$get>>,
) {
  return ['issues', '/issues/count', toValue(args)] as const
}

export function getIssuesCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssuesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issues.count.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssuesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issues.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
          >,
          ReturnType<typeof getIssuesCountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssuesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssuesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issues.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssuesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issues)[':id']['$get']>>,
) {
  return ['issues', '/issues/:id', toValue(args)] as const
}

export function getIssuesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issues)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssuesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issues[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssuesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issues)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIssuesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIssuesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssuesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issues[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIssuesIdMutationKey() {
  return ['issues', '/issues/:id', 'PUT'] as const
}

export function getPutIssuesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.issues)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.issues)[':id']['$put']>) {
      return parseResponse(client.issues[':id'].$put(args, options))
    },
  })
}

export function usePutIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.issues)[':id']['$put']>,
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
  const mutationDefaults = getPutIssuesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIssuesIdMutationKey() {
  return ['issues', '/issues/:id', 'DELETE'] as const
}

export function getDeleteIssuesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.issues)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.issues)[':id']['$delete']>) {
      return parseResponse(client.issues[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIssuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.issues)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteIssuesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.requests.$get>>,
) {
  return ['requests', '/requests', toValue(args)] as const
}

export function getRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.requests.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>
          >,
          ReturnType<typeof getRequestsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['$get']>>,
) {
  return ['requests', '/requests/:id', toValue(args)] as const
}

export function getRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRequestsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestsIdRawBodyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>>,
) {
  return ['requests', '/requests/:id/raw_body', toValue(args)] as const
}

export function getRequestsIdRawBodyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestsIdRawBodyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.requests[':id'].raw_body.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestsIdRawBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRequestsIdRawBodyQueryKey>
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
          Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestsIdRawBodyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestsIdRawBodyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.requests[':id'].raw_body.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRequestsIdRetryMutationKey() {
  return ['requests', '/requests/:id/retry', 'POST'] as const
}

export function getPostRequestsIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['retry']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.requests)[':id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestsIdRetryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.requests)[':id']['retry']['$post']>) {
      return parseResponse(client.requests[':id'].retry.$post(args, options))
    },
  })
}

export function usePostRequestsIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.requests)[':id']['retry']['$post']>,
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
  const mutationDefaults = getPostRequestsIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function getRequestsIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['events']['$get']>>,
) {
  return ['requests', '/requests/:id/events', toValue(args)] as const
}

export function getRequestsIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.requests[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.requests)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRequestsIdEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.requests[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestsIdIgnoredEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>
  >,
) {
  return ['requests', '/requests/:id/ignored_events', toValue(args)] as const
}

export function getRequestsIdIgnoredEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestsIdIgnoredEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.requests[':id'].ignored_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestsIdIgnoredEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRequestsIdIgnoredEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestsIdIgnoredEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestsIdIgnoredEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.requests[':id'].ignored_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkRequestsRetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.$get>>,
) {
  return ['bulk', '/bulk/requests/retry', toValue(args)] as const
}

export function getBulkRequestsRetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkRequestsRetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.requests.retry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkRequestsRetry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
            >
          >,
          ReturnType<typeof getBulkRequestsRetryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkRequestsRetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkRequestsRetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.requests.retry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkRequestsRetryMutationKey() {
  return ['bulk', '/bulk/requests/retry', 'POST'] as const
}

export function getPostBulkRequestsRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bulk.requests.retry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkRequestsRetryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk.requests.retry.$post>) {
      return parseResponse(client.bulk.requests.retry.$post(args, options))
    },
  })
}

export function usePostBulkRequestsRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bulk.requests.retry.$post>,
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
  const mutationDefaults = getPostBulkRequestsRetryMutationOptions<TError, TOnMutateResult>(
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

export function getBulkRequestsRetryPlanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.plan.$get>>,
) {
  return ['bulk', '/bulk/requests/retry/plan', toValue(args)] as const
}

export function getBulkRequestsRetryPlanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.plan.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkRequestsRetryPlanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.requests.retry.plan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkRequestsRetryPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulk.requests.retry.plan.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
            >
          >,
          ReturnType<typeof getBulkRequestsRetryPlanQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkRequestsRetryPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkRequestsRetryPlanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.requests.retry.plan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkRequestsRetryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>>,
) {
  return ['bulk', '/bulk/requests/retry/:id', toValue(args)] as const
}

export function getBulkRequestsRetryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkRequestsRetryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulk.requests.retry[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkRequestsRetryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBulkRequestsRetryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkRequestsRetryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkRequestsRetryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulk.requests.retry[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBulkRequestsRetryIdCancelMutationKey() {
  return ['bulk', '/bulk/requests/retry/:id/cancel', 'POST'] as const
}

export function getPostBulkRequestsRetryIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkRequestsRetryIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.bulk.requests.retry[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostBulkRequestsRetryIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostBulkRequestsRetryIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
) {
  return ['sources', '/sources', toValue(args)] as const
}

export function getSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
          >,
          ReturnType<typeof getSourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSourcesMutationKey() {
  return ['sources', '/sources', 'PUT'] as const
}

export function getPutSourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$put>>>>>,
    TError,
    InferRequestType<typeof client.sources.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sources.$put>) {
      return parseResponse(client.sources.$put(args, options))
    },
  })
}

export function usePutSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.sources.$put>,
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
  const mutationDefaults = getPutSourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSourcesMutationKey() {
  return ['sources', '/sources', 'POST'] as const
}

export function getPostSourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>>,
    TError,
    InferRequestType<typeof client.sources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sources.$post>) {
      return parseResponse(client.sources.$post(args, options))
    },
  })
}

export function usePostSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sources.$post>,
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
  const mutationDefaults = getPostSourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
) {
  return ['sources', '/sources/:id', toValue(args)] as const
}

export function getSourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSourcesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSourcesIdMutationKey() {
  return ['sources', '/sources/:id', 'PUT'] as const
}

export function getPutSourcesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['$put']>) {
      return parseResponse(client.sources[':id'].$put(args, options))
    },
  })
}

export function usePutSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['$put']>,
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
  const mutationDefaults = getPutSourcesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSourcesIdMutationKey() {
  return ['sources', '/sources/:id', 'DELETE'] as const
}

export function getDeleteSourcesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['$delete']>) {
      return parseResponse(client.sources[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSourcesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSourcesIdDisableMutationKey() {
  return ['sources', '/sources/:id/disable', 'PUT'] as const
}

export function getPutSourcesIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['disable']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesIdDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['disable']['$put']>) {
      return parseResponse(client.sources[':id'].disable.$put(args, options))
    },
  })
}

export function usePutSourcesIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['disable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['disable']['$put']>,
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
  const mutationDefaults = getPutSourcesIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPutSourcesIdArchiveMutationKey() {
  return ['sources', '/sources/:id/archive', 'PUT'] as const
}

export function getPutSourcesIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['archive']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['archive']['$put']>) {
      return parseResponse(client.sources[':id'].archive.$put(args, options))
    },
  })
}

export function usePutSourcesIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['archive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['archive']['$put']>,
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
  const mutationDefaults = getPutSourcesIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutSourcesIdEnableMutationKey() {
  return ['sources', '/sources/:id/enable', 'PUT'] as const
}

export function getPutSourcesIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['enable']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['enable']['$put']>) {
      return parseResponse(client.sources[':id'].enable.$put(args, options))
    },
  })
}

export function usePutSourcesIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['enable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['enable']['$put']>,
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
  const mutationDefaults = getPutSourcesIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPutSourcesIdUnarchiveMutationKey() {
  return ['sources', '/sources/:id/unarchive', 'PUT'] as const
}

export function getPutSourcesIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sources)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourcesIdUnarchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']>) {
      return parseResponse(client.sources[':id'].unarchive.$put(args, options))
    },
  })
}

export function usePutSourcesIdUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':id']['unarchive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']>,
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
  const mutationDefaults = getPutSourcesIdUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutNotificationsWebhooksMutationKey() {
  return ['notifications', '/notifications/webhooks', 'PUT'] as const
}

export function getPutNotificationsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.webhooks.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.webhooks.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.webhooks.$put>) {
      return parseResponse(client.notifications.webhooks.$put(args, options))
    },
  })
}

export function usePutNotificationsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.webhooks.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.webhooks.$put>,
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
  const mutationDefaults = getPutNotificationsWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsCurrentCustomDomainsQueryKey() {
  return ['teams', '/teams/current/custom_domains'] as const
}

export function getTeamsCurrentCustomDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamsCurrentCustomDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.current.custom_domains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsCurrentCustomDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>
              >
            >
          >,
          ReturnType<typeof getTeamsCurrentCustomDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsCurrentCustomDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamsCurrentCustomDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.current.custom_domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsCurrentCustomDomainsMutationKey() {
  return ['teams', '/teams/current/custom_domains', 'POST'] as const
}

export function getPostTeamsCurrentCustomDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.teams.current.custom_domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsCurrentCustomDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.current.custom_domains.$post>) {
      return parseResponse(client.teams.current.custom_domains.$post(args, options))
    },
  })
}

export function usePostTeamsCurrentCustomDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.teams.current.custom_domains.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.teams.current.custom_domains.$post>,
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
  const mutationDefaults = getPostTeamsCurrentCustomDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTeamsCurrentCustomDomainsDomainIdMutationKey() {
  return ['teams', '/teams/current/custom_domains/:domain_id', 'DELETE'] as const
}

export function getDeleteTeamsCurrentCustomDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsCurrentCustomDomainsDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>,
    ) {
      return parseResponse(client.teams.current.custom_domains[':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteTeamsCurrentCustomDomainsDomainId<
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
                  ReturnType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>,
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
  const mutationDefaults = getDeleteTeamsCurrentCustomDomainsDomainIdMutationOptions<
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

export function getTransformationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transformations.$get>>,
) {
  return ['transformations', '/transformations', toValue(args)] as const
}

export function getTransformationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transformations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transformations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transformations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>
            >
          >,
          ReturnType<typeof getTransformationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTransformationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transformations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTransformationsMutationKey() {
  return ['transformations', '/transformations', 'PUT'] as const
}

export function getPutTransformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.transformations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTransformationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transformations.$put>) {
      return parseResponse(client.transformations.$put(args, options))
    },
  })
}

export function usePutTransformations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transformations.$put>,
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
  const mutationDefaults = getPutTransformationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransformationsMutationKey() {
  return ['transformations', '/transformations', 'POST'] as const
}

export function getPostTransformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transformations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransformationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transformations.$post>) {
      return parseResponse(client.transformations.$post(args, options))
    },
  })
}

export function usePostTransformations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transformations.$post>,
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
  const mutationDefaults = getPostTransformationsMutationOptions<TError, TOnMutateResult>(
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

export function getTransformationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transformations)[':id']['$get']>>,
) {
  return ['transformations', '/transformations/:id', toValue(args)] as const
}

export function getTransformationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transformations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transformations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transformations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransformationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transformations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTransformationsIdMutationKey() {
  return ['transformations', '/transformations/:id', 'PUT'] as const
}

export function getPutTransformationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.transformations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTransformationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transformations)[':id']['$put']>) {
      return parseResponse(client.transformations[':id'].$put(args, options))
    },
  })
}

export function usePutTransformationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transformations)[':id']['$put']>,
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
  const mutationDefaults = getPutTransformationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTransformationsIdMutationKey() {
  return ['transformations', '/transformations/:id', 'DELETE'] as const
}

export function getDeleteTransformationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.transformations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransformationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transformations)[':id']['$delete']>) {
      return parseResponse(client.transformations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTransformationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transformations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTransformationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutTransformationsRunMutationKey() {
  return ['transformations', '/transformations/run', 'PUT'] as const
}

export function getPutTransformationsRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.run.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.transformations.run.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTransformationsRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transformations.run.$put>) {
      return parseResponse(client.transformations.run.$put(args, options))
    },
  })
}

export function usePutTransformationsRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transformations.run.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transformations.run.$put>,
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
  const mutationDefaults = getPutTransformationsRunMutationOptions<TError, TOnMutateResult>(
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

export function getTransformationsIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>
  >,
) {
  return ['transformations', '/transformations/:id/executions', toValue(args)] as const
}

export function getTransformationsIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformationsIdExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transformations[':id'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformationsIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransformationsIdExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformationsIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformationsIdExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transformations[':id'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransformationsIdExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions'][':execution_id']['$get']>
  >,
) {
  return [
    'transformations',
    '/transformations/:id/executions/:execution_id',
    toValue(args),
  ] as const
}

export function getTransformationsIdExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions'][':execution_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformationsIdExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transformations[':id'].executions[':execution_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformationsIdExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.transformations)[':id']['executions'][':execution_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transformations)[':id']['executions'][':execution_id']['$get']>
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
                    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
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
                    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTransformationsIdExecutionsExecutionIdQueryKey>
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
              (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformationsIdExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformationsIdExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transformations[':id'].executions[':execution_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  return ['connections', '/connections', toValue(args)] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectionsMutationKey() {
  return ['connections', '/connections', 'PUT'] as const
}

export function getPutConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$put>>>>>,
    TError,
    InferRequestType<typeof client.connections.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$put>) {
      return parseResponse(client.connections.$put(args, options))
    },
  })
}

export function usePutConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.connections.$put>,
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
  const mutationDefaults = getPutConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function usePostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connections.$post>,
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
  const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.count.$get>>,
) {
  return ['connections', '/connections/count', toValue(args)] as const
}

export function getConnectionsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>
            >
          >,
          ReturnType<typeof getConnectionsCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
) {
  return ['connections', '/connections/:id', toValue(args)] as const
}

export function getConnectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getConnectionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConnectionsIdMutationKey() {
  return ['connections', '/connections/:id', 'PUT'] as const
}

export function getPutConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['$put']>) {
      return parseResponse(client.connections[':id'].$put(args, options))
    },
  })
}

export function usePutConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConnectionsIdMutationKey() {
  return ['connections', '/connections/:id', 'DELETE'] as const
}

export function getDeleteConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['$delete']>) {
      return parseResponse(client.connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdDisableMutationKey() {
  return ['connections', '/connections/:id/disable', 'PUT'] as const
}

export function getPutConnectionsIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':id']['disable']['$put']>,
    ) {
      return parseResponse(client.connections[':id'].disable.$put(args, options))
    },
  })
}

export function usePutConnectionsIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['disable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['disable']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdArchiveMutationKey() {
  return ['connections', '/connections/:id/archive', 'PUT'] as const
}

export function getPutConnectionsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['archive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':id']['archive']['$put']>,
    ) {
      return parseResponse(client.connections[':id'].archive.$put(args, options))
    },
  })
}

export function usePutConnectionsIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['archive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['archive']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdEnableMutationKey() {
  return ['connections', '/connections/:id/enable', 'PUT'] as const
}

export function getPutConnectionsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['enable']['$put']>) {
      return parseResponse(client.connections[':id'].enable.$put(args, options))
    },
  })
}

export function usePutConnectionsIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['enable']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['enable']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdUnarchiveMutationKey() {
  return ['connections', '/connections/:id/unarchive', 'PUT'] as const
}

export function getPutConnectionsIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']>,
    ) {
      return parseResponse(client.connections[':id'].unarchive.$put(args, options))
    },
  })
}

export function usePutConnectionsIdUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['unarchive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdPauseMutationKey() {
  return ['connections', '/connections/:id/pause', 'PUT'] as const
}

export function getPutConnectionsIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['pause']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['pause']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdPauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connections)[':id']['pause']['$put']>) {
      return parseResponse(client.connections[':id'].pause.$put(args, options))
    },
  })
}

export function usePutConnectionsIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['pause']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['pause']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPutConnectionsIdUnpauseMutationKey() {
  return ['connections', '/connections/:id/unpause', 'PUT'] as const
}

export function getPutConnectionsIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['unpause']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':id']['unpause']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':id']['unpause']['$put']>,
    ) {
      return parseResponse(client.connections[':id'].unpause.$put(args, options))
    },
  })
}

export function usePutConnectionsIdUnpause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':id']['unpause']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':id']['unpause']['$put']>,
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
  const mutationDefaults = getPutConnectionsIdUnpauseMutationOptions<TError, TOnMutateResult>(
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
