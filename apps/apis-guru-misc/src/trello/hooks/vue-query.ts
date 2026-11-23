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

export function getActionsKey() {
  return ['actions'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBoardsKey() {
  return ['boards'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getChecklistsKey() {
  return ['checklists'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getTypesKey() {
  return ['types'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getActionsIdActionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['$get']>>,
) {
  return ['actions', '/actions/:idAction', toValue(args)] as const
}

export function getActionsIdActionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutActionsIdActionMutationKey() {
  return ['actions', '/actions/:idAction', 'PUT'] as const
}

export function getPutActionsIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':idAction']['$put']>) {
      return parseResponse(client.actions[':idAction'].$put(args, options))
    },
  })
}

export function usePutActionsIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':idAction']['$put']>,
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
  const mutationDefaults = getPutActionsIdActionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteActionsIdActionMutationKey() {
  return ['actions', '/actions/:idAction', 'DELETE'] as const
}

export function getDeleteActionsIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsIdActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':idAction']['$delete']>) {
      return parseResponse(client.actions[':idAction'].$delete(args, options))
    },
  })
}

export function useDeleteActionsIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':idAction']['$delete']>,
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
  const mutationDefaults = getDeleteActionsIdActionMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>>,
) {
  return ['actions', '/actions/:idAction/board', toValue(args)] as const
}

export function getActionsIdActionBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionBoardQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/board/:field', toValue(args)] as const
}

export function getActionsIdActionBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>>,
) {
  return ['actions', '/actions/:idAction/card', toValue(args)] as const
}

export function getActionsIdActionCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionCardQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionCardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/card/:field', toValue(args)] as const
}

export function getActionsIdActionCardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionCardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].card[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionCardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionCardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionCardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionCardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].card[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionDisplayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>>,
) {
  return ['actions', '/actions/:idAction/display', toValue(args)] as const
}

export function getActionsIdActionDisplayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionDisplayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].display.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionDisplayQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionDisplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionDisplayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].display.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionEntitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/entities', toValue(args)] as const
}

export function getActionsIdActionEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionEntitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>>,
) {
  return ['actions', '/actions/:idAction/list', toValue(args)] as const
}

export function getActionsIdActionListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionListQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionListFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/list/:field', toValue(args)] as const
}

export function getActionsIdActionListFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionListFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].list[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionListFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionListFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionListFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].list[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>>,
) {
  return ['actions', '/actions/:idAction/member', toValue(args)] as const
}

export function getActionsIdActionMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionMemberQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionMemberFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/member/:field', toValue(args)] as const
}

export function getActionsIdActionMemberFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionMemberFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].member[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>
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
                  ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionsIdActionMemberFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionMemberFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionMemberFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].member[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionMemberCreatorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/memberCreator', toValue(args)] as const
}

export function getActionsIdActionMemberCreatorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionMemberCreatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].memberCreator.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionMemberCreatorQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionMemberCreatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionMemberCreatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].memberCreator.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionMemberCreatorFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/memberCreator/:field', toValue(args)] as const
}

export function getActionsIdActionMemberCreatorFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionMemberCreatorFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].memberCreator[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionMemberCreatorField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
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
                    (typeof client.actions)[':idAction']['memberCreator'][':field']['$get']
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
                    (typeof client.actions)[':idAction']['memberCreator'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionsIdActionMemberCreatorFieldQueryKey>
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
            ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionMemberCreatorFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionMemberCreatorFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].memberCreator[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/organization', toValue(args)] as const
}

export function getActionsIdActionOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdActionOrganizationFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/organization/:field', toValue(args)] as const
}

export function getActionsIdActionOrganizationFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionOrganizationFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].organization[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionOrganizationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
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
                  ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionsIdActionOrganizationFieldQueryKey>
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
            ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionOrganizationFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionOrganizationFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].organization[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutActionsIdActionTextMutationKey() {
  return ['actions', '/actions/:idAction/text', 'PUT'] as const
}

export function getPutActionsIdActionTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['text']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['text']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdActionTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':idAction']['text']['$put']>) {
      return parseResponse(client.actions[':idAction'].text.$put(args, options))
    },
  })
}

export function usePutActionsIdActionText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['text']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':idAction']['text']['$put']>,
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
  const mutationDefaults = getPutActionsIdActionTextMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>>,
) {
  return ['actions', '/actions/:idAction/:field', toValue(args)] as const
}

export function getActionsIdActionFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batch.$get>>,
) {
  return ['batch', '/batch', toValue(args)] as const
}

export function getBatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.batch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
          ReturnType<typeof getBatchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsMutationKey() {
  return ['boards', '/boards', 'POST'] as const
}

export function getPostBoardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
    TError,
    InferRequestType<typeof client.boards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.boards.$post>) {
      return parseResponse(client.boards.$post(args, options))
    },
  })
}

export function usePostBoards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.boards.$post>,
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
  const mutationDefaults = getPostBoardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['$get']>>,
) {
  return ['boards', '/boards/:idBoard', toValue(args)] as const
}

export function getBoardsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
            >
          >,
          ReturnType<typeof getBoardsIdBoardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardMutationKey() {
  return ['boards', '/boards/:idBoard', 'PUT'] as const
}

export function getPutBoardsIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':idBoard']['$put']>) {
      return parseResponse(client.boards[':idBoard'].$put(args, options))
    },
  })
}

export function usePutBoardsIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/actions', toValue(args)] as const
}

export function getBoardsIdBoardActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardBoardStarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/boardStars', toValue(args)] as const
}

export function getBoardsIdBoardBoardStarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardBoardStarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].boardStars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardBoardStarsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardBoardStarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardBoardStarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].boardStars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardCalendarKeyGenerateMutationKey() {
  return ['boards', '/boards/:idBoard/calendarKey/generate', 'POST'] as const
}

export function getPostBoardsIdBoardCalendarKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardCalendarKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].calendarKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardCalendarKeyGenerate<
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
                  ReturnType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardCalendarKeyGenerateMutationOptions<
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

export function getBoardsIdBoardCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/cards', toValue(args)] as const
}

export function getBoardsIdBoardCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardCardsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardCardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/cards/:filter', toValue(args)] as const
}

export function getBoardsIdBoardCardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardCardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].cards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardCardsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardCardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardCardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].cards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardCardsIdCardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/cards/:idCard', toValue(args)] as const
}

export function getBoardsIdBoardCardsIdCardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardCardsIdCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].cards[':idCard'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardCardsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardCardsIdCardQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardCardsIdCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardCardsIdCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].cards[':idCard'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardChecklistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/checklists', toValue(args)] as const
}

export function getBoardsIdBoardChecklistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardChecklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].checklists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardChecklistsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardChecklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardChecklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].checklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardChecklistsMutationKey() {
  return ['boards', '/boards/:idBoard/checklists', 'POST'] as const
}

export function getPostBoardsIdBoardChecklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardChecklistsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']>,
    ) {
      return parseResponse(client.boards[':idBoard'].checklists.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardChecklistsMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdBoardClosedMutationKey() {
  return ['boards', '/boards/:idBoard/closed', 'PUT'] as const
}

export function getPutBoardsIdBoardClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['closed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardClosedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']>) {
      return parseResponse(client.boards[':idBoard'].closed.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['closed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardClosedMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardDeltasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/deltas', toValue(args)] as const
}

export function getBoardsIdBoardDeltasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardDeltasQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardDescMutationKey() {
  return ['boards', '/boards/:idBoard/desc', 'PUT'] as const
}

export function getPutBoardsIdBoardDescMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['desc']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardDescMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']>) {
      return parseResponse(client.boards[':idBoard'].desc.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['desc']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardDescMutationOptions<TError, TOnMutateResult>(
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

export function getPostBoardsIdBoardEmailKeyGenerateMutationKey() {
  return ['boards', '/boards/:idBoard/emailKey/generate', 'POST'] as const
}

export function getPostBoardsIdBoardEmailKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardEmailKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>,
    ) {
      return parseResponse(client.boards[':idBoard'].emailKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardEmailKeyGenerate<
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
                  ReturnType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardEmailKeyGenerateMutationOptions<
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

export function getPutBoardsIdBoardIdOrganizationMutationKey() {
  return ['boards', '/boards/:idBoard/idOrganization', 'PUT'] as const
}

export function getPutBoardsIdBoardIdOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardIdOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].idOrganization.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardIdOrganization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardIdOrganizationMutationOptions<
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

export function getPutBoardsIdBoardLabelNamesBlueMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/blue', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesBlueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesBlueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.blue.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesBlue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesBlueMutationOptions<
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

export function getPutBoardsIdBoardLabelNamesGreenMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/green', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesGreenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesGreenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.green.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesGreen<
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
                  ReturnType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesGreenMutationOptions<
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

export function getPutBoardsIdBoardLabelNamesOrangeMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/orange', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesOrangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesOrangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.orange.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesOrange<
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
                  ReturnType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesOrangeMutationOptions<
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

export function getPutBoardsIdBoardLabelNamesPurpleMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/purple', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesPurpleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesPurpleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.purple.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesPurple<
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
                  ReturnType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesPurpleMutationOptions<
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

export function getPutBoardsIdBoardLabelNamesRedMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/red', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesRedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesRedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.red.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesRed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesRedMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdBoardLabelNamesYellowMutationKey() {
  return ['boards', '/boards/:idBoard/labelNames/yellow', 'PUT'] as const
}

export function getPutBoardsIdBoardLabelNamesYellowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardLabelNamesYellowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labelNames.yellow.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardLabelNamesYellow<
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
                  ReturnType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardLabelNamesYellowMutationOptions<
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

export function getBoardsIdBoardLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/labels', toValue(args)] as const
}

export function getBoardsIdBoardLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardLabelsMutationKey() {
  return ['boards', '/boards/:idBoard/labels', 'POST'] as const
}

export function getPostBoardsIdBoardLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']>,
    ) {
      return parseResponse(client.boards[':idBoard'].labels.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardLabelsIdLabelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/labels/:idLabel', toValue(args)] as const
}

export function getBoardsIdBoardLabelsIdLabelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardLabelsIdLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].labels[':idLabel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardLabelsIdLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>
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
                  ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardLabelsIdLabelQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardLabelsIdLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardLabelsIdLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].labels[':idLabel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/lists', toValue(args)] as const
}

export function getBoardsIdBoardListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardListsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardListsMutationKey() {
  return ['boards', '/boards/:idBoard/lists', 'POST'] as const
}

export function getPostBoardsIdBoardListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']>) {
      return parseResponse(client.boards[':idBoard'].lists.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardListsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardListsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/lists/:filter', toValue(args)] as const
}

export function getBoardsIdBoardListsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardListsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].lists[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardListsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardListsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardListsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardListsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].lists[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardMarkAsViewedMutationKey() {
  return ['boards', '/boards/:idBoard/markAsViewed', 'POST'] as const
}

export function getPostBoardsIdBoardMarkAsViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardMarkAsViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>,
    ) {
      return parseResponse(client.boards[':idBoard'].markAsViewed.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardMarkAsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardMarkAsViewedMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/members', toValue(args)] as const
}

export function getBoardsIdBoardMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardMembersMutationKey() {
  return ['boards', '/boards/:idBoard/members', 'PUT'] as const
}

export function getPutBoardsIdBoardMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].members.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMembersMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardMembersFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/members/:filter', toValue(args)] as const
}

export function getBoardsIdBoardMembersFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembersFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].members[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembersFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>
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
                  ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembersFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembersFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembersFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].members[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardMembersIdMemberMutationKey() {
  return ['boards', '/boards/:idBoard/members/:idMember', 'PUT'] as const
}

export function getPutBoardsIdBoardMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMembersIdMember<
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
                  ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMembersIdMemberMutationOptions<
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

export function getDeleteBoardsIdBoardMembersIdMemberMutationKey() {
  return ['boards', '/boards/:idBoard/members/:idMember', 'DELETE'] as const
}

export function getDeleteBoardsIdBoardMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdBoardMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.boards[':idBoard'].members[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdBoardMembersIdMember<
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
                  ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>,
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
  const mutationDefaults = getDeleteBoardsIdBoardMembersIdMemberMutationOptions<
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

export function getBoardsIdBoardMembersIdMemberCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/members/:idMember/cards', toValue(args)] as const
}

export function getBoardsIdBoardMembersIdMemberCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembersIdMemberCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].members[':idMember'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembersIdMemberCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']>
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
                    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
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
                    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembersIdMemberCardsQueryKey>
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
            ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembersIdMemberCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembersIdMemberCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].members[':idMember'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardMembersInvitedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/membersInvited', toValue(args)] as const
}

export function getBoardsIdBoardMembersInvitedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembersInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].membersInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembersInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembersInvitedQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembersInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembersInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].membersInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardMembersInvitedFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/membersInvited/:field', toValue(args)] as const
}

export function getBoardsIdBoardMembersInvitedFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembersInvitedFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].membersInvited[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembersInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
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
                  ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembersInvitedFieldQueryKey>
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
            ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembersInvitedFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembersInvitedFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].membersInvited[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/memberships', toValue(args)] as const
}

export function getBoardsIdBoardMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardMembershipsIdMembershipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/memberships/:idMembership', toValue(args)] as const
}

export function getBoardsIdBoardMembershipsIdMembershipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMembershipsIdMembershipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].memberships[':idMembership'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMembershipsIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
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
                    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
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
                    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMembershipsIdMembershipQueryKey>
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
            ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMembershipsIdMembershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMembershipsIdMembershipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].memberships[':idMembership'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardMembershipsIdMembershipMutationKey() {
  return ['boards', '/boards/:idBoard/memberships/:idMembership', 'PUT'] as const
}

export function getPutBoardsIdBoardMembershipsIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMembershipsIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']
      >,
    ) {
      return parseResponse(
        client.boards[':idBoard'].memberships[':idMembership'].$put(args, options),
      )
    },
  })
}

export function usePutBoardsIdBoardMembershipsIdMembership<
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
                    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']
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
  const mutationDefaults = getPutBoardsIdBoardMembershipsIdMembershipMutationOptions<
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

export function getBoardsIdBoardMyPrefsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/myPrefs', toValue(args)] as const
}

export function getBoardsIdBoardMyPrefsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardMyPrefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].myPrefs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardMyPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardMyPrefsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardMyPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardMyPrefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].myPrefs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdBoardMyPrefsEmailPositionMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/emailPosition', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsEmailPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsEmailPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].myPrefs.emailPosition.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMyPrefsEmailPosition<
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
                  ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsEmailPositionMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsIdEmailListMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/idEmailList', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsIdEmailListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsIdEmailListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].myPrefs.idEmailList.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMyPrefsIdEmailList<
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
                  ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsIdEmailListMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsShowListGuideMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showListGuide', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsShowListGuideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsShowListGuideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].myPrefs.showListGuide.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMyPrefsShowListGuide<
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
                  ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsShowListGuideMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsShowSidebarMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebar', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsShowSidebarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsShowSidebarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].myPrefs.showSidebar.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMyPrefsShowSidebar<
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
                  ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsShowSidebarActivityMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarActivity', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsShowSidebarActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsShowSidebarActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']
      >,
    ) {
      return parseResponse(
        client.boards[':idBoard'].myPrefs.showSidebarActivity.$put(args, options),
      )
    },
  })
}

export function usePutBoardsIdBoardMyPrefsShowSidebarActivity<
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
                    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarActivityMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarBoardActions', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
      >,
    ) {
      return parseResponse(
        client.boards[':idBoard'].myPrefs.showSidebarBoardActions.$put(args, options),
      )
    },
  })
}

export function usePutBoardsIdBoardMyPrefsShowSidebarBoardActions<
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
                    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsMutationOptions<
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

export function getPutBoardsIdBoardMyPrefsShowSidebarMembersMutationKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarMembers', 'PUT'] as const
}

export function getPutBoardsIdBoardMyPrefsShowSidebarMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardMyPrefsShowSidebarMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].myPrefs.showSidebarMembers.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardMyPrefsShowSidebarMembers<
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
                    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']
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
  const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarMembersMutationOptions<
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

export function getPutBoardsIdBoardNameMutationKey() {
  return ['boards', '/boards/:idBoard/name', 'PUT'] as const
}

export function getPutBoardsIdBoardNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']>) {
      return parseResponse(client.boards[':idBoard'].name.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardNameMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/organization', toValue(args)] as const
}

export function getBoardsIdBoardOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdBoardOrganizationFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
  >,
) {
  return ['boards', '/boards/:idBoard/organization/:field', toValue(args)] as const
}

export function getBoardsIdBoardOrganizationFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardOrganizationFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'].organization[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardOrganizationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
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
                  ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardOrganizationFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardOrganizationFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardOrganizationFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'].organization[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardPowerUpsMutationKey() {
  return ['boards', '/boards/:idBoard/powerUps', 'POST'] as const
}

export function getPostBoardsIdBoardPowerUpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['powerUps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardPowerUpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']>,
    ) {
      return parseResponse(client.boards[':idBoard'].powerUps.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardPowerUps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['powerUps']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']>,
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
  const mutationDefaults = getPostBoardsIdBoardPowerUpsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBoardsIdBoardPowerUpsPowerUpMutationKey() {
  return ['boards', '/boards/:idBoard/powerUps/:powerUp', 'DELETE'] as const
}

export function getDeleteBoardsIdBoardPowerUpsPowerUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdBoardPowerUpsPowerUpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>,
    ) {
      return parseResponse(client.boards[':idBoard'].powerUps[':powerUp'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdBoardPowerUpsPowerUp<
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
                  ReturnType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>,
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
  const mutationDefaults = getDeleteBoardsIdBoardPowerUpsPowerUpMutationOptions<
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

export function getPutBoardsIdBoardPrefsBackgroundMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/background', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.background.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsBackground<
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
                  ReturnType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsBackgroundMutationOptions<
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

export function getPutBoardsIdBoardPrefsCalendarFeedEnabledMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/calendarFeedEnabled', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsCalendarFeedEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsCalendarFeedEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.calendarFeedEnabled.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsCalendarFeedEnabled<
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
                    (typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']
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
  const mutationDefaults = getPutBoardsIdBoardPrefsCalendarFeedEnabledMutationOptions<
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

export function getPutBoardsIdBoardPrefsCardAgingMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/cardAging', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsCardAgingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsCardAgingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.cardAging.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsCardAging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsCardAgingMutationOptions<
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

export function getPutBoardsIdBoardPrefsCardCoversMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/cardCovers', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsCardCoversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsCardCoversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.cardCovers.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsCardCovers<
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
                  ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsCardCoversMutationOptions<
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

export function getPutBoardsIdBoardPrefsCommentsMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/comments', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.comments.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdBoardPrefsInvitationsMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/invitations', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.invitations.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsInvitations<
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
                  ReturnType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsInvitationsMutationOptions<
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

export function getPutBoardsIdBoardPrefsPermissionLevelMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/permissionLevel', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsPermissionLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsPermissionLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']
      >,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.permissionLevel.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsPermissionLevel<
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
                  ReturnType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsPermissionLevelMutationOptions<
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

export function getPutBoardsIdBoardPrefsSelfJoinMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/selfJoin', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsSelfJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsSelfJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.selfJoin.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsSelfJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsSelfJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdBoardPrefsVotingMutationKey() {
  return ['boards', '/boards/:idBoard/prefs/voting', 'PUT'] as const
}

export function getPutBoardsIdBoardPrefsVotingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardPrefsVotingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].prefs.voting.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardPrefsVoting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardPrefsVotingMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdBoardSubscribedMutationKey() {
  return ['boards', '/boards/:idBoard/subscribed', 'PUT'] as const
}

export function getPutBoardsIdBoardSubscribedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdBoardSubscribedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']>,
    ) {
      return parseResponse(client.boards[':idBoard'].subscribed.$put(args, options))
    },
  })
}

export function usePutBoardsIdBoardSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard']['subscribed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']>,
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
  const mutationDefaults = getPutBoardsIdBoardSubscribedMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>>,
) {
  return ['boards', '/boards/:idBoard/:field', toValue(args)] as const
}

export function getBoardsIdBoardFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':idBoard'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':idBoard'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsMutationKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function getPostCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cards.$post>) {
      return parseResponse(client.cards.$post(args, options))
    },
  })
}

export function usePostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
          TError,
          InferRequestType<typeof client.cards.$post>,
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
  const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsIdCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['$get']>>,
) {
  return ['cards', '/cards/:idCard', toValue(args)] as const
}

export function getCardsIdCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsIdCardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdCardMutationKey() {
  return ['cards', '/cards/:idCard', 'PUT'] as const
}

export function getPutCardsIdCardMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['$put']>) {
      return parseResponse(client.cards[':idCard'].$put(args, options))
    },
  })
}

export function usePutCardsIdCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCardsIdCardMutationKey() {
  return ['cards', '/cards/:idCard', 'DELETE'] as const
}

export function getDeleteCardsIdCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['$delete']>) {
      return parseResponse(client.cards[':idCard'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['$delete']>,
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
  const mutationDefaults = getDeleteCardsIdCardMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>>,
) {
  return ['cards', '/cards/:idCard/actions', toValue(args)] as const
}

export function getCardsIdCardActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardActionsCommentsMutationKey() {
  return ['cards', '/cards/:idCard/actions/comments', 'POST'] as const
}

export function getPostCardsIdCardActionsCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardActionsCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].actions.comments.$post(args, options))
    },
  })
}

export function usePostCardsIdCardActionsComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardActionsCommentsMutationOptions<
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

export function getPutCardsIdCardActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:idCard/actions/:idAction/comments', 'PUT'] as const
}

export function getPutCardsIdCardActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].actions[':idAction'].comments.$put(args, options),
      )
    },
  })
}

export function usePutCardsIdCardActionsIdActionComments<
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
                    (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']
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
  const mutationDefaults = getPutCardsIdCardActionsIdActionCommentsMutationOptions<
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

export function getDeleteCardsIdCardActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:idCard/actions/:idAction/comments', 'DELETE'] as const
}

export function getDeleteCardsIdCardActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].actions[':idAction'].comments.$delete(args, options),
      )
    },
  })
}

export function useDeleteCardsIdCardActionsIdActionComments<
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
                    (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
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
  const mutationDefaults = getDeleteCardsIdCardActionsIdActionCommentsMutationOptions<
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

export function getCardsIdCardAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>>,
) {
  return ['cards', '/cards/:idCard/attachments', toValue(args)] as const
}

export function getCardsIdCardAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardAttachmentsMutationKey() {
  return ['cards', '/cards/:idCard/attachments', 'POST'] as const
}

export function getPostCardsIdCardAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].attachments.$post(args, options))
    },
  })
}

export function usePostCardsIdCardAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardAttachmentsIdAttachmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/attachments/:idAttachment', toValue(args)] as const
}

export function getCardsIdCardAttachmentsIdAttachmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardAttachmentsIdAttachmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].attachments[':idAttachment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardAttachmentsIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
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
                    (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']
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
                    (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCardsIdCardAttachmentsIdAttachmentQueryKey>
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
            ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardAttachmentsIdAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardAttachmentsIdAttachmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].attachments[':idAttachment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCardsIdCardAttachmentsIdAttachmentMutationKey() {
  return ['cards', '/cards/:idCard/attachments/:idAttachment', 'DELETE'] as const
}

export function getDeleteCardsIdCardAttachmentsIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardAttachmentsIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].attachments[':idAttachment'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCardsIdCardAttachmentsIdAttachment<
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
                    (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']
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
  const mutationDefaults = getDeleteCardsIdCardAttachmentsIdAttachmentMutationOptions<
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

export function getCardsIdCardBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>>,
) {
  return ['cards', '/cards/:idCard/board', toValue(args)] as const
}

export function getCardsIdCardBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardBoardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdCardBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/board/:field', toValue(args)] as const
}

export function getCardsIdCardBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdCardCheckItemStatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/checkItemStates', toValue(args)] as const
}

export function getCardsIdCardCheckItemStatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardCheckItemStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].checkItemStates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardCheckItemStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardCheckItemStatesQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardCheckItemStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardCheckItemStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].checkItemStates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklistCurrent/checkItem/:idCheckItem',
    'PUT',
  ] as const
}

export function getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklistCurrent'].checkItem[':idCheckItem'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItem<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
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
  const mutationDefaults =
    getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemMutationOptions<
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

export function getPostCardsIdCardChecklistIdChecklistCheckItemMutationKey() {
  return ['cards', '/cards/:idCard/checklist/:idChecklist/checkItem', 'POST'] as const
}

export function getPostCardsIdCardChecklistIdChecklistCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardChecklistIdChecklistCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem.$post(args, options),
      )
    },
  })
}

export function usePostCardsIdCardChecklistIdChecklistCheckItem<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
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
  const mutationDefaults = getPostCardsIdCardChecklistIdChecklistCheckItemMutationOptions<
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

export function getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem',
    'DELETE',
  ] as const
}

export function getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
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
  const mutationDefaults =
    getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
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

export function getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/convertToCard',
    'POST',
  ] as const
}

export function getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[
          ':idCheckItem'
        ].convertToCard.$post(args, options),
      )
    },
  })
}

export function usePostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCard<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
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
  const mutationDefaults =
    getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardMutationOptions<
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

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/name',
    'PUT',
  ] as const
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].name.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemName<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
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
  const mutationDefaults =
    getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameMutationOptions<
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

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/pos',
    'PUT',
  ] as const
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].pos.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPos<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
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
  const mutationDefaults =
    getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosMutationOptions<
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

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateMutationKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/state',
    'PUT',
  ] as const
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].state.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemState<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
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
  const mutationDefaults =
    getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateMutationOptions<
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

export function getCardsIdCardChecklistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>>,
) {
  return ['cards', '/cards/:idCard/checklists', toValue(args)] as const
}

export function getCardsIdCardChecklistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardChecklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].checklists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardChecklistsQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardChecklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardChecklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].checklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardChecklistsMutationKey() {
  return ['cards', '/cards/:idCard/checklists', 'POST'] as const
}

export function getPostCardsIdCardChecklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardChecklistsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].checklists.$post(args, options))
    },
  })
}

export function usePostCardsIdCardChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardChecklistsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdCardChecklistsIdChecklistMutationKey() {
  return ['cards', '/cards/:idCard/checklists/:idChecklist', 'DELETE'] as const
}

export function getDeleteCardsIdCardChecklistsIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardChecklistsIdChecklistMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklists[':idChecklist'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCardsIdCardChecklistsIdChecklist<
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
                    (typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']
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
  const mutationDefaults = getDeleteCardsIdCardChecklistsIdChecklistMutationOptions<
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

export function getPutCardsIdCardClosedMutationKey() {
  return ['cards', '/cards/:idCard/closed', 'PUT'] as const
}

export function getPutCardsIdCardClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['closed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardClosedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']>) {
      return parseResponse(client.cards[':idCard'].closed.$put(args, options))
    },
  })
}

export function usePutCardsIdCardClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['closed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardClosedMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsIdCardDescMutationKey() {
  return ['cards', '/cards/:idCard/desc', 'PUT'] as const
}

export function getPutCardsIdCardDescMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['desc']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardDescMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']>) {
      return parseResponse(client.cards[':idCard'].desc.$put(args, options))
    },
  })
}

export function usePutCardsIdCardDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['desc']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardDescMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsIdCardDueMutationKey() {
  return ['cards', '/cards/:idCard/due', 'PUT'] as const
}

export function getPutCardsIdCardDueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['due']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['due']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardDueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['due']['$put']>) {
      return parseResponse(client.cards[':idCard'].due.$put(args, options))
    },
  })
}

export function usePutCardsIdCardDue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['due']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['due']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardDueMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsIdCardIdAttachmentCoverMutationKey() {
  return ['cards', '/cards/:idCard/idAttachmentCover', 'PUT'] as const
}

export function getPutCardsIdCardIdAttachmentCoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardIdAttachmentCoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].idAttachmentCover.$put(args, options))
    },
  })
}

export function usePutCardsIdCardIdAttachmentCover<
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
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardIdAttachmentCoverMutationOptions<
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

export function getPutCardsIdCardIdBoardMutationKey() {
  return ['cards', '/cards/:idCard/idBoard', 'PUT'] as const
}

export function getPutCardsIdCardIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idBoard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardIdBoardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']>) {
      return parseResponse(client.cards[':idCard'].idBoard.$put(args, options))
    },
  })
}

export function usePutCardsIdCardIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idBoard']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardIdBoardMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdCardIdLabelsMutationKey() {
  return ['cards', '/cards/:idCard/idLabels', 'POST'] as const
}

export function getPostCardsIdCardIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idLabels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].idLabels.$post(args, options))
    },
  })
}

export function usePostCardsIdCardIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idLabels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdCardIdLabelsIdLabelMutationKey() {
  return ['cards', '/cards/:idCard/idLabels/:idLabel', 'DELETE'] as const
}

export function getDeleteCardsIdCardIdLabelsIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardIdLabelsIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>,
    ) {
      return parseResponse(client.cards[':idCard'].idLabels[':idLabel'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCardIdLabelsIdLabel<
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
                  ReturnType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>,
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
  const mutationDefaults = getDeleteCardsIdCardIdLabelsIdLabelMutationOptions<
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

export function getPutCardsIdCardIdListMutationKey() {
  return ['cards', '/cards/:idCard/idList', 'PUT'] as const
}

export function getPutCardsIdCardIdListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idList']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardIdListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']>) {
      return parseResponse(client.cards[':idCard'].idList.$put(args, options))
    },
  })
}

export function usePutCardsIdCardIdList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idList']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardIdListMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsIdCardIdMembersMutationKey() {
  return ['cards', '/cards/:idCard/idMembers', 'PUT'] as const
}

export function getPutCardsIdCardIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].idMembers.$put(args, options))
    },
  })
}

export function usePutCardsIdCardIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdCardIdMembersMutationKey() {
  return ['cards', '/cards/:idCard/idMembers', 'POST'] as const
}

export function getPostCardsIdCardIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].idMembers.$post(args, options))
    },
  })
}

export function usePostCardsIdCardIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdCardIdMembersIdMemberMutationKey() {
  return ['cards', '/cards/:idCard/idMembers/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdCardIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.cards[':idCard'].idMembers[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCardIdMembersIdMember<
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
                  ReturnType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>,
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
  const mutationDefaults = getDeleteCardsIdCardIdMembersIdMemberMutationOptions<
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

export function getPutCardsIdCardLabelsMutationKey() {
  return ['cards', '/cards/:idCard/labels', 'PUT'] as const
}

export function getPutCardsIdCardLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']>) {
      return parseResponse(client.cards[':idCard'].labels.$put(args, options))
    },
  })
}

export function usePutCardsIdCardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdCardLabelsMutationKey() {
  return ['cards', '/cards/:idCard/labels', 'POST'] as const
}

export function getPostCardsIdCardLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']>) {
      return parseResponse(client.cards[':idCard'].labels.$post(args, options))
    },
  })
}

export function usePostCardsIdCardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdCardLabelsColorMutationKey() {
  return ['cards', '/cards/:idCard/labels/:color', 'DELETE'] as const
}

export function getDeleteCardsIdCardLabelsColorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardLabelsColorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>,
    ) {
      return parseResponse(client.cards[':idCard'].labels[':color'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCardLabelsColor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>,
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
  const mutationDefaults = getDeleteCardsIdCardLabelsColorMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>>,
) {
  return ['cards', '/cards/:idCard/list', toValue(args)] as const
}

export function getCardsIdCardListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdCardListFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/list/:field', toValue(args)] as const
}

export function getCardsIdCardListFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardListFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].list[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardListFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardListFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardListFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].list[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardMarkAssociatedNotificationsReadMutationKey() {
  return ['cards', '/cards/:idCard/markAssociatedNotificationsRead', 'POST'] as const
}

export function getPostCardsIdCardMarkAssociatedNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardMarkAssociatedNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].markAssociatedNotificationsRead.$post(args, options),
      )
    },
  })
}

export function usePostCardsIdCardMarkAssociatedNotificationsRead<
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
                    (typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']
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
  const mutationDefaults = getPostCardsIdCardMarkAssociatedNotificationsReadMutationOptions<
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

export function getCardsIdCardMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>>,
) {
  return ['cards', '/cards/:idCard/members', toValue(args)] as const
}

export function getCardsIdCardMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdCardMembersVotedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/membersVoted', toValue(args)] as const
}

export function getCardsIdCardMembersVotedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardMembersVotedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].membersVoted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardMembersVoted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardMembersVotedQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardMembersVotedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardMembersVotedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].membersVoted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardMembersVotedMutationKey() {
  return ['cards', '/cards/:idCard/membersVoted', 'POST'] as const
}

export function getPostCardsIdCardMembersVotedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardMembersVotedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].membersVoted.$post(args, options))
    },
  })
}

export function usePostCardsIdCardMembersVoted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardMembersVotedMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdCardMembersVotedIdMemberMutationKey() {
  return ['cards', '/cards/:idCard/membersVoted/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdCardMembersVotedIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardMembersVotedIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']
      >,
    ) {
      return parseResponse(client.cards[':idCard'].membersVoted[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCardMembersVotedIdMember<
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
                    (typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']
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
  const mutationDefaults = getDeleteCardsIdCardMembersVotedIdMemberMutationOptions<
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

export function getPutCardsIdCardNameMutationKey() {
  return ['cards', '/cards/:idCard/name', 'PUT'] as const
}

export function getPutCardsIdCardNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['name']['$put']>) {
      return parseResponse(client.cards[':idCard'].name.$put(args, options))
    },
  })
}

export function usePutCardsIdCardName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['name']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsIdCardPosMutationKey() {
  return ['cards', '/cards/:idCard/pos', 'PUT'] as const
}

export function getPutCardsIdCardPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['pos']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardPosMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']>) {
      return parseResponse(client.cards[':idCard'].pos.$put(args, options))
    },
  })
}

export function usePutCardsIdCardPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['pos']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardPosMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardStickersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>>,
) {
  return ['cards', '/cards/:idCard/stickers', toValue(args)] as const
}

export function getCardsIdCardStickersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardStickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].stickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardStickersQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardStickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardStickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].stickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdCardStickersMutationKey() {
  return ['cards', '/cards/:idCard/stickers', 'POST'] as const
}

export function getPostCardsIdCardStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdCardStickersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']>,
    ) {
      return parseResponse(client.cards[':idCard'].stickers.$post(args, options))
    },
  })
}

export function usePostCardsIdCardStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']>,
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
  const mutationDefaults = getPostCardsIdCardStickersMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardStickersIdStickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>
  >,
) {
  return ['cards', '/cards/:idCard/stickers/:idSticker', toValue(args)] as const
}

export function getCardsIdCardStickersIdStickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardStickersIdStickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'].stickers[':idSticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>
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
                  ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCardsIdCardStickersIdStickerQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardStickersIdStickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardStickersIdStickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'].stickers[':idSticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdCardStickersIdStickerMutationKey() {
  return ['cards', '/cards/:idCard/stickers/:idSticker', 'PUT'] as const
}

export function getPutCardsIdCardStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].stickers[':idSticker'].$put(args, options))
    },
  })
}

export function usePutCardsIdCardStickersIdSticker<
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
                  ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardStickersIdStickerMutationOptions<
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

export function getDeleteCardsIdCardStickersIdStickerMutationKey() {
  return ['cards', '/cards/:idCard/stickers/:idSticker', 'DELETE'] as const
}

export function getDeleteCardsIdCardStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCardStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>,
    ) {
      return parseResponse(client.cards[':idCard'].stickers[':idSticker'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCardStickersIdSticker<
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
                  ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>,
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
  const mutationDefaults = getDeleteCardsIdCardStickersIdStickerMutationOptions<
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

export function getPutCardsIdCardSubscribedMutationKey() {
  return ['cards', '/cards/:idCard/subscribed', 'PUT'] as const
}

export function getPutCardsIdCardSubscribedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardSubscribedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].subscribed.$put(args, options))
    },
  })
}

export function usePutCardsIdCardSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['subscribed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']>,
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
  const mutationDefaults = getPutCardsIdCardSubscribedMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCardFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>>,
) {
  return ['cards', '/cards/:idCard/:field', toValue(args)] as const
}

export function getCardsIdCardFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':idCard'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':idCard'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChecklistsMutationKey() {
  return ['checklists', '/checklists', 'POST'] as const
}

export function getPostChecklistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>>,
    TError,
    InferRequestType<typeof client.checklists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChecklistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checklists.$post>) {
      return parseResponse(client.checklists.$post(args, options))
    },
  })
}

export function usePostChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.checklists.$post>,
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
  const mutationDefaults = getPostChecklistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChecklistsIdChecklistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>>,
) {
  return ['checklists', '/checklists/:idChecklist', toValue(args)] as const
}

export function getChecklistsIdChecklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChecklistsIdChecklistMutationKey() {
  return ['checklists', '/checklists/:idChecklist', 'PUT'] as const
}

export function getPutChecklistsIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdChecklistMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':idChecklist']['$put']>) {
      return parseResponse(client.checklists[':idChecklist'].$put(args, options))
    },
  })
}

export function usePutChecklistsIdChecklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['$put']>,
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
  const mutationDefaults = getPutChecklistsIdChecklistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChecklistsIdChecklistMutationKey() {
  return ['checklists', '/checklists/:idChecklist', 'DELETE'] as const
}

export function getDeleteChecklistsIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdChecklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']>,
    ) {
      return parseResponse(client.checklists[':idChecklist'].$delete(args, options))
    },
  })
}

export function useDeleteChecklistsIdChecklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']>,
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
  const mutationDefaults = getDeleteChecklistsIdChecklistMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdChecklistBoardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/board', toValue(args)] as const
}

export function getChecklistsIdChecklistBoardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistBoardQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdChecklistBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/board/:field', toValue(args)] as const
}

export function getChecklistsIdChecklistBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
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
                  ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdChecklistCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/cards', toValue(args)] as const
}

export function getChecklistsIdChecklistCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistCardsQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdChecklistCardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/cards/:filter', toValue(args)] as const
}

export function getChecklistsIdChecklistCardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistCardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].cards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
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
                  ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistCardsFilterQueryKey>
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
            ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistCardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistCardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].cards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdChecklistCheckItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems', toValue(args)] as const
}

export function getChecklistsIdChecklistCheckItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistCheckItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].checkItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistCheckItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>
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
                  ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistCheckItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistCheckItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistCheckItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].checkItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChecklistsIdChecklistCheckItemsMutationKey() {
  return ['checklists', '/checklists/:idChecklist/checkItems', 'POST'] as const
}

export function getPostChecklistsIdChecklistCheckItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChecklistsIdChecklistCheckItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>,
    ) {
      return parseResponse(client.checklists[':idChecklist'].checkItems.$post(args, options))
    },
  })
}

export function usePostChecklistsIdChecklistCheckItems<
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
                  ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>,
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
  const mutationDefaults = getPostChecklistsIdChecklistCheckItemsMutationOptions<
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

export function getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
    >
  >,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems/:idCheckItem', toValue(args)] as const
}

export function getChecklistsIdChecklistCheckItemsIdCheckItemQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistCheckItemsIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
                    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
                    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey>
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
              (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChecklistsIdChecklistCheckItemsIdCheckItemMutationKey() {
  return ['checklists', '/checklists/:idChecklist/checkItems/:idCheckItem', 'DELETE'] as const
}

export function getDeleteChecklistsIdChecklistCheckItemsIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdChecklistCheckItemsIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
      >,
    ) {
      return parseResponse(
        client.checklists[':idChecklist'].checkItems[':idCheckItem'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChecklistsIdChecklistCheckItemsIdCheckItem<
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
                    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
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
  const mutationDefaults = getDeleteChecklistsIdChecklistCheckItemsIdCheckItemMutationOptions<
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

export function getPutChecklistsIdChecklistIdCardMutationKey() {
  return ['checklists', '/checklists/:idChecklist/idCard', 'PUT'] as const
}

export function getPutChecklistsIdChecklistIdCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdChecklistIdCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>,
    ) {
      return parseResponse(client.checklists[':idChecklist'].idCard.$put(args, options))
    },
  })
}

export function usePutChecklistsIdChecklistIdCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>,
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
  const mutationDefaults = getPutChecklistsIdChecklistIdCardMutationOptions<
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

export function getPutChecklistsIdChecklistNameMutationKey() {
  return ['checklists', '/checklists/:idChecklist/name', 'PUT'] as const
}

export function getPutChecklistsIdChecklistNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdChecklistNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']>,
    ) {
      return parseResponse(client.checklists[':idChecklist'].name.$put(args, options))
    },
  })
}

export function usePutChecklistsIdChecklistName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']>,
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
  const mutationDefaults = getPutChecklistsIdChecklistNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutChecklistsIdChecklistPosMutationKey() {
  return ['checklists', '/checklists/:idChecklist/pos', 'PUT'] as const
}

export function getPutChecklistsIdChecklistPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['pos']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdChecklistPosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']>,
    ) {
      return parseResponse(client.checklists[':idChecklist'].pos.$put(args, options))
    },
  })
}

export function usePutChecklistsIdChecklistPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['pos']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']>,
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
  const mutationDefaults = getPutChecklistsIdChecklistPosMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdChecklistFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>
  >,
) {
  return ['checklists', '/checklists/:idChecklist/:field', toValue(args)] as const
}

export function getChecklistsIdChecklistFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdChecklistFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':idChecklist'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdChecklistField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdChecklistFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdChecklistFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdChecklistFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':idChecklist'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLabelsMutationKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function getPostLabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    InferRequestType<typeof client.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labels.$post>) {
      return parseResponse(client.labels.$post(args, options))
    },
  })
}

export function usePostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.labels.$post>,
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
  const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelsIdLabelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['$get']>>,
) {
  return ['labels', '/labels/:idLabel', toValue(args)] as const
}

export function getLabelsIdLabelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIdLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':idLabel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsIdLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
            >
          >,
          ReturnType<typeof getLabelsIdLabelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIdLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':idLabel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLabelsIdLabelMutationKey() {
  return ['labels', '/labels/:idLabel', 'PUT'] as const
}

export function getPutLabelsIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':idLabel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdLabelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':idLabel']['$put']>) {
      return parseResponse(client.labels[':idLabel'].$put(args, options))
    },
  })
}

export function usePutLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':idLabel']['$put']>,
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
  const mutationDefaults = getPutLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLabelsIdLabelMutationKey() {
  return ['labels', '/labels/:idLabel', 'DELETE'] as const
}

export function getDeleteLabelsIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':idLabel']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsIdLabelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':idLabel']['$delete']>) {
      return parseResponse(client.labels[':idLabel'].$delete(args, options))
    },
  })
}

export function useDeleteLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':idLabel']['$delete']>,
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
  const mutationDefaults = getDeleteLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getLabelsIdLabelBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>>,
) {
  return ['labels', '/labels/:idLabel/board', toValue(args)] as const
}

export function getLabelsIdLabelBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIdLabelBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':idLabel'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsIdLabelBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelsIdLabelBoardQueryKey>
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
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdLabelBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIdLabelBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':idLabel'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsIdLabelBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>
  >,
) {
  return ['labels', '/labels/:idLabel/board/:field', toValue(args)] as const
}

export function getLabelsIdLabelBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIdLabelBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':idLabel'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsIdLabelBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelsIdLabelBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdLabelBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIdLabelBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':idLabel'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLabelsIdLabelColorMutationKey() {
  return ['labels', '/labels/:idLabel/color', 'PUT'] as const
}

export function getPutLabelsIdLabelColorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['color']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdLabelColorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']>) {
      return parseResponse(client.labels[':idLabel'].color.$put(args, options))
    },
  })
}

export function usePutLabelsIdLabelColor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['color']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']>,
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
  const mutationDefaults = getPutLabelsIdLabelColorMutationOptions<TError, TOnMutateResult>(
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

export function getPutLabelsIdLabelNameMutationKey() {
  return ['labels', '/labels/:idLabel/name', 'PUT'] as const
}

export function getPutLabelsIdLabelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdLabelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']>) {
      return parseResponse(client.labels[':idLabel'].name.$put(args, options))
    },
  })
}

export function usePutLabelsIdLabelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':idLabel']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']>,
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
  const mutationDefaults = getPutLabelsIdLabelNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostListsMutationKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function getPostListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    InferRequestType<typeof client.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lists.$post>) {
      return parseResponse(client.lists.$post(args, options))
    },
  })
}

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
          TError,
          InferRequestType<typeof client.lists.$post>,
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
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsIdListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['$get']>>,
) {
  return ['lists', '/lists/:idList', toValue(args)] as const
}

export function getListsIdListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
            >
          >,
          ReturnType<typeof getListsIdListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutListsIdListMutationKey() {
  return ['lists', '/lists/:idList', 'PUT'] as const
}

export function getPutListsIdListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['$put']>) {
      return parseResponse(client.lists[':idList'].$put(args, options))
    },
  })
}

export function usePutListsIdList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['$put']>,
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
  const mutationDefaults = getPutListsIdListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsIdListActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>>,
) {
  return ['lists', '/lists/:idList/actions', toValue(args)] as const
}

export function getListsIdListActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListsIdListArchiveAllCardsMutationKey() {
  return ['lists', '/lists/:idList/archiveAllCards', 'POST'] as const
}

export function getPostListsIdListArchiveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdListArchiveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':idList'].archiveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdListArchiveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>,
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
  const mutationDefaults = getPostListsIdListArchiveAllCardsMutationOptions<
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

export function getListsIdListBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['board']['$get']>>,
) {
  return ['lists', '/lists/:idList/board', toValue(args)] as const
}

export function getListsIdListBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListBoardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdListBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>
  >,
) {
  return ['lists', '/lists/:idList/board/:field', toValue(args)] as const
}

export function getListsIdListBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListBoardFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdListCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>>,
) {
  return ['lists', '/lists/:idList/cards', toValue(args)] as const
}

export function getListsIdListCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListCardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListsIdListCardsMutationKey() {
  return ['lists', '/lists/:idList/cards', 'POST'] as const
}

export function getPostListsIdListCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdListCardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['cards']['$post']>) {
      return parseResponse(client.lists[':idList'].cards.$post(args, options))
    },
  })
}

export function usePostListsIdListCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['cards']['$post']>,
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
  const mutationDefaults = getPostListsIdListCardsMutationOptions<TError, TOnMutateResult>(
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

export function getListsIdListCardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>
  >,
) {
  return ['lists', '/lists/:idList/cards/:filter', toValue(args)] as const
}

export function getListsIdListCardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListCardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'].cards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListCardsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListCardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListCardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'].cards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutListsIdListClosedMutationKey() {
  return ['lists', '/lists/:idList/closed', 'PUT'] as const
}

export function getPutListsIdListClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['closed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['closed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListClosedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['closed']['$put']>) {
      return parseResponse(client.lists[':idList'].closed.$put(args, options))
    },
  })
}

export function usePutListsIdListClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['closed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['closed']['$put']>,
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
  const mutationDefaults = getPutListsIdListClosedMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdListIdBoardMutationKey() {
  return ['lists', '/lists/:idList/idBoard', 'PUT'] as const
}

export function getPutListsIdListIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['idBoard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListIdBoardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']>) {
      return parseResponse(client.lists[':idList'].idBoard.$put(args, options))
    },
  })
}

export function usePutListsIdListIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['idBoard']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']>,
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
  const mutationDefaults = getPutListsIdListIdBoardMutationOptions<TError, TOnMutateResult>(
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

export function getPostListsIdListMoveAllCardsMutationKey() {
  return ['lists', '/lists/:idList/moveAllCards', 'POST'] as const
}

export function getPostListsIdListMoveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['moveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdListMoveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':idList'].moveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdListMoveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['moveAllCards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']>,
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
  const mutationDefaults = getPostListsIdListMoveAllCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdListNameMutationKey() {
  return ['lists', '/lists/:idList/name', 'PUT'] as const
}

export function getPutListsIdListNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['name']['$put']>) {
      return parseResponse(client.lists[':idList'].name.$put(args, options))
    },
  })
}

export function usePutListsIdListName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['name']['$put']>,
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
  const mutationDefaults = getPutListsIdListNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdListPosMutationKey() {
  return ['lists', '/lists/:idList/pos', 'PUT'] as const
}

export function getPutListsIdListPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['pos']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['pos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListPosMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':idList']['pos']['$put']>) {
      return parseResponse(client.lists[':idList'].pos.$put(args, options))
    },
  })
}

export function usePutListsIdListPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['pos']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['pos']['$put']>,
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
  const mutationDefaults = getPutListsIdListPosMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdListSubscribedMutationKey() {
  return ['lists', '/lists/:idList/subscribed', 'PUT'] as const
}

export function getPutListsIdListSubscribedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdListSubscribedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']>,
    ) {
      return parseResponse(client.lists[':idList'].subscribed.$put(args, options))
    },
  })
}

export function usePutListsIdListSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList']['subscribed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']>,
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
  const mutationDefaults = getPutListsIdListSubscribedMutationOptions<TError, TOnMutateResult>(
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

export function getListsIdListFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>>,
) {
  return ['lists', '/lists/:idList/:field', toValue(args)] as const
}

export function getListsIdListFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdListFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':idList'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdListFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdListFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':idList'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['$get']>>,
) {
  return ['members', '/members/:idMember', toValue(args)] as const
}

export function getMembersIdMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberMutationKey() {
  return ['members', '/members/:idMember', 'PUT'] as const
}

export function getPutMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':idMember']['$put']>) {
      return parseResponse(client.members[':idMember'].$put(args, options))
    },
  })
}

export function usePutMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdMemberActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>>,
) {
  return ['members', '/members/:idMember/actions', toValue(args)] as const
}

export function getMembersIdMemberActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberAvatarMutationKey() {
  return ['members', '/members/:idMember/avatar', 'POST'] as const
}

export function getPostMembersIdMemberAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['avatar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].avatar.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['avatar']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getPutMembersIdMemberAvatarSourceMutationKey() {
  return ['members', '/members/:idMember/avatarSource', 'PUT'] as const
}

export function getPutMembersIdMemberAvatarSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['avatarSource']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberAvatarSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].avatarSource.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberAvatarSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['avatarSource']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberAvatarSourceMutationOptions<
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

export function getPutMembersIdMemberBioMutationKey() {
  return ['members', '/members/:idMember/bio', 'PUT'] as const
}

export function getPutMembersIdMemberBioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['bio']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['bio']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberBioMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':idMember']['bio']['$put']>) {
      return parseResponse(client.members[':idMember'].bio.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberBio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['bio']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['bio']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberBioMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdMemberBoardBackgroundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boardBackgrounds', toValue(args)] as const
}

export function getMembersIdMemberBoardBackgroundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardBackgroundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>
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
                  ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardBackgroundsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardBackgroundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardBackgroundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardBackgrounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberBoardBackgroundsMutationKey() {
  return ['members', '/members/:idMember/boardBackgrounds', 'POST'] as const
}

export function getPostMembersIdMemberBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].boardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberBoardBackgrounds<
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
                  ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberBoardBackgroundsMutationOptions<
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

export function getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
    >
  >,
) {
  return [
    'members',
    '/members/:idMember/boardBackgrounds/:idBoardBackground',
    toValue(args),
  ] as const
}

export function getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardBackgroundsIdBoardBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
                    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
                    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey>
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
              (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationKey() {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', 'PUT'] as const
}

export function getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberBoardBackgroundsIdBoardBackground<
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
                    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
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
  const mutationDefaults = getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationKey() {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', 'DELETE'] as const
}

export function getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdMemberBoardBackgroundsIdBoardBackground<
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
                    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
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
  const mutationDefaults = getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getMembersIdMemberBoardStarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boardStars', toValue(args)] as const
}

export function getMembersIdMemberBoardStarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardStarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardStars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardStarsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardStarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardStarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardStars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberBoardStarsMutationKey() {
  return ['members', '/members/:idMember/boardStars', 'POST'] as const
}

export function getPostMembersIdMemberBoardStarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberBoardStarsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].boardStars.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberBoardStars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberBoardStarsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdMemberBoardStarsIdBoardStarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', toValue(args)] as const
}

export function getMembersIdMemberBoardStarsIdBoardStarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardStarsIdBoardStarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardStarsIdBoardStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardStarsIdBoardStarQueryKey>
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
            ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardStarsIdBoardStarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardStarsIdBoardStarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberBoardStarsIdBoardStarMutationKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', 'PUT'] as const
}

export function getPutMembersIdMemberBoardStarsIdBoardStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberBoardStarsIdBoardStarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberBoardStarsIdBoardStar<
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']
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
  const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarMutationOptions<
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

export function getDeleteMembersIdMemberBoardStarsIdBoardStarMutationKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', 'DELETE'] as const
}

export function getDeleteMembersIdMemberBoardStarsIdBoardStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMemberBoardStarsIdBoardStarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdMemberBoardStarsIdBoardStar<
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
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
  const mutationDefaults = getDeleteMembersIdMemberBoardStarsIdBoardStarMutationOptions<
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

export function getPutMembersIdMemberBoardStarsIdBoardStarIdBoardMutationKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar/idBoard', 'PUT'] as const
}

export function getPutMembersIdMemberBoardStarsIdBoardStarIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberBoardStarsIdBoardStarIdBoardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].idBoard.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberBoardStarsIdBoardStarIdBoard<
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
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
  const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarIdBoardMutationOptions<
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

export function getPutMembersIdMemberBoardStarsIdBoardStarPosMutationKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar/pos', 'PUT'] as const
}

export function getPutMembersIdMemberBoardStarsIdBoardStarPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberBoardStarsIdBoardStarPosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].pos.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberBoardStarsIdBoardStarPos<
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
                    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
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
  const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarPosMutationOptions<
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

export function getMembersIdMemberBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>>,
) {
  return ['members', '/members/:idMember/boards', toValue(args)] as const
}

export function getMembersIdMemberBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberBoardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boards/:filter', toValue(args)] as const
}

export function getMembersIdMemberBoardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>
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
                  ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberBoardsInvitedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boardsInvited', toValue(args)] as const
}

export function getMembersIdMemberBoardsInvitedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardsInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardsInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardsInvitedQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardsInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardsInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardsInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberBoardsInvitedFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
  >,
) {
  return ['members', '/members/:idMember/boardsInvited/:field', toValue(args)] as const
}

export function getMembersIdMemberBoardsInvitedFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberBoardsInvitedFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].boardsInvited[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberBoardsInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
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
                    (typeof client.members)[':idMember']['boardsInvited'][':field']['$get']
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
                    (typeof client.members)[':idMember']['boardsInvited'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberBoardsInvitedFieldQueryKey>
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
            ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberBoardsInvitedFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberBoardsInvitedFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].boardsInvited[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>>,
) {
  return ['members', '/members/:idMember/cards', toValue(args)] as const
}

export function getMembersIdMemberCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCardsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberCardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>
  >,
) {
  return ['members', '/members/:idMember/cards/:filter', toValue(args)] as const
}

export function getMembersIdMemberCardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].cards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>
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
                  ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCardsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].cards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberCustomBoardBackgroundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
  >,
) {
  return ['members', '/members/:idMember/customBoardBackgrounds', toValue(args)] as const
}

export function getMembersIdMemberCustomBoardBackgroundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCustomBoardBackgroundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCustomBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
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
                  ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomBoardBackgroundsQueryKey>
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
            ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomBoardBackgroundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCustomBoardBackgroundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customBoardBackgrounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberCustomBoardBackgroundsMutationKey() {
  return ['members', '/members/:idMember/customBoardBackgrounds', 'POST'] as const
}

export function getPostMembersIdMemberCustomBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberCustomBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['customBoardBackgrounds']['$post']
      >,
    ) {
      return parseResponse(client.members[':idMember'].customBoardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberCustomBoardBackgrounds<
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
                    (typeof client.members)[':idMember']['customBoardBackgrounds']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberCustomBoardBackgroundsMutationOptions<
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

export function getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
    >
  >,
) {
  return [
    'members',
    '/members/:idMember/customBoardBackgrounds/:idBoardBackground',
    toValue(args),
  ] as const
}

export function getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
                    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
                    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey>
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
              (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationKey() {
  return ['members', '/members/:idMember/customBoardBackgrounds/:idBoardBackground', 'PUT'] as const
}

export function getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
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
                    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
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
  const mutationDefaults =
    getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationKey() {
  return [
    'members',
    '/members/:idMember/customBoardBackgrounds/:idBoardBackground',
    'DELETE',
  ] as const
}

export function getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
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
                    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
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
  const mutationDefaults =
    getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getMembersIdMemberCustomEmojiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>
  >,
) {
  return ['members', '/members/:idMember/customEmoji', toValue(args)] as const
}

export function getMembersIdMemberCustomEmojiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCustomEmojiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customEmoji.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomEmojiQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCustomEmojiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customEmoji.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberCustomEmojiMutationKey() {
  return ['members', '/members/:idMember/customEmoji', 'POST'] as const
}

export function getPostMembersIdMemberCustomEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberCustomEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].customEmoji.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberCustomEmoji<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberCustomEmojiMutationOptions<
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

export function getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']>
  >,
) {
  return ['members', '/members/:idMember/customEmoji/:idCustomEmoji', toValue(args)] as const
}

export function getMembersIdMemberCustomEmojiIdCustomEmojiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCustomEmojiIdCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']>
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
                    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
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
                    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey>
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
              (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberCustomStickersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>
  >,
) {
  return ['members', '/members/:idMember/customStickers', toValue(args)] as const
}

export function getMembersIdMemberCustomStickersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCustomStickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customStickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCustomStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomStickersQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomStickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCustomStickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customStickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberCustomStickersMutationKey() {
  return ['members', '/members/:idMember/customStickers', 'POST'] as const
}

export function getPostMembersIdMemberCustomStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberCustomStickersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].customStickers.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberCustomStickers<
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
                Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberCustomStickersMutationOptions<
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

export function getMembersIdMemberCustomStickersIdCustomStickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
    >
  >,
) {
  return ['members', '/members/:idMember/customStickers/:idCustomSticker', toValue(args)] as const
}

export function getMembersIdMemberCustomStickersIdCustomStickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberCustomStickersIdCustomStickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].customStickers[':idCustomSticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberCustomStickersIdCustomSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
                    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
                    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberCustomStickersIdCustomStickerQueryKey>
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
              (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberCustomStickersIdCustomStickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberCustomStickersIdCustomStickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].customStickers[':idCustomSticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMembersIdMemberCustomStickersIdCustomStickerMutationKey() {
  return ['members', '/members/:idMember/customStickers/:idCustomSticker', 'DELETE'] as const
}

export function getDeleteMembersIdMemberCustomStickersIdCustomStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMemberCustomStickersIdCustomStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].customStickers[':idCustomSticker'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdMemberCustomStickersIdCustomSticker<
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
                    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
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
  const mutationDefaults = getDeleteMembersIdMemberCustomStickersIdCustomStickerMutationOptions<
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

export function getMembersIdMemberDeltasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>>,
) {
  return ['members', '/members/:idMember/deltas', toValue(args)] as const
}

export function getMembersIdMemberDeltasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberDeltasQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberFullNameMutationKey() {
  return ['members', '/members/:idMember/fullName', 'PUT'] as const
}

export function getPutMembersIdMemberFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['fullName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberFullNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].fullName.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['fullName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberFullNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutMembersIdMemberInitialsMutationKey() {
  return ['members', '/members/:idMember/initials', 'PUT'] as const
}

export function getPutMembersIdMemberInitialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['initials']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['initials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberInitialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['initials']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].initials.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberInitials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['initials']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['initials']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberInitialsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdMemberNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>
  >,
) {
  return ['members', '/members/:idMember/notifications', toValue(args)] as const
}

export function getMembersIdMemberNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberNotificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberNotificationsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
  >,
) {
  return ['members', '/members/:idMember/notifications/:filter', toValue(args)] as const
}

export function getMembersIdMemberNotificationsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberNotificationsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].notifications[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberNotificationsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
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
                    (typeof client.members)[':idMember']['notifications'][':filter']['$get']
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
                    (typeof client.members)[':idMember']['notifications'][':filter']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberNotificationsFilterQueryKey>
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
            ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberNotificationsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberNotificationsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].notifications[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberOneTimeMessagesDismissedMutationKey() {
  return ['members', '/members/:idMember/oneTimeMessagesDismissed', 'POST'] as const
}

export function getPostMembersIdMemberOneTimeMessagesDismissedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberOneTimeMessagesDismissedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].oneTimeMessagesDismissed.$post(args, options),
      )
    },
  })
}

export function usePostMembersIdMemberOneTimeMessagesDismissed<
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
                    (typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']
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
  const mutationDefaults = getPostMembersIdMemberOneTimeMessagesDismissedMutationOptions<
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

export function getMembersIdMemberOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>
  >,
) {
  return ['members', '/members/:idMember/organizations', toValue(args)] as const
}

export function getMembersIdMemberOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberOrganizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberOrganizationsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
  >,
) {
  return ['members', '/members/:idMember/organizations/:filter', toValue(args)] as const
}

export function getMembersIdMemberOrganizationsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberOrganizationsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].organizations[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberOrganizationsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
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
                    (typeof client.members)[':idMember']['organizations'][':filter']['$get']
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
                    (typeof client.members)[':idMember']['organizations'][':filter']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberOrganizationsFilterQueryKey>
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
            ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberOrganizationsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberOrganizationsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].organizations[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberOrganizationsInvitedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
  >,
) {
  return ['members', '/members/:idMember/organizationsInvited', toValue(args)] as const
}

export function getMembersIdMemberOrganizationsInvitedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberOrganizationsInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].organizationsInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberOrganizationsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
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
                  ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberOrganizationsInvitedQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberOrganizationsInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberOrganizationsInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].organizationsInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdMemberOrganizationsInvitedFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']>
  >,
) {
  return ['members', '/members/:idMember/organizationsInvited/:field', toValue(args)] as const
}

export function getMembersIdMemberOrganizationsInvitedFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberOrganizationsInvitedFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].organizationsInvited[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberOrganizationsInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']>
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
                    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
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
                    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberOrganizationsInvitedFieldQueryKey>
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
              (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberOrganizationsInvitedFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberOrganizationsInvitedFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].organizationsInvited[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberPrefsColorBlindMutationKey() {
  return ['members', '/members/:idMember/prefs/colorBlind', 'PUT'] as const
}

export function getPutMembersIdMemberPrefsColorBlindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberPrefsColorBlindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].prefs.colorBlind.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberPrefsColorBlind<
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
                  ReturnType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberPrefsColorBlindMutationOptions<
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

export function getPutMembersIdMemberPrefsLocaleMutationKey() {
  return ['members', '/members/:idMember/prefs/locale', 'PUT'] as const
}

export function getPutMembersIdMemberPrefsLocaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberPrefsLocaleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].prefs.locale.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberPrefsLocale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberPrefsLocaleMutationOptions<TError, TOnMutateResult>(
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

export function getPutMembersIdMemberPrefsMinutesBetweenSummariesMutationKey() {
  return ['members', '/members/:idMember/prefs/minutesBetweenSummaries', 'PUT'] as const
}

export function getPutMembersIdMemberPrefsMinutesBetweenSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberPrefsMinutesBetweenSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].prefs.minutesBetweenSummaries.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberPrefsMinutesBetweenSummaries<
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
                    (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
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
  const mutationDefaults = getPutMembersIdMemberPrefsMinutesBetweenSummariesMutationOptions<
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

export function getMembersIdMemberSavedSearchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>
  >,
) {
  return ['members', '/members/:idMember/savedSearches', toValue(args)] as const
}

export function getMembersIdMemberSavedSearchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberSavedSearchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].savedSearches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberSavedSearchesQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberSavedSearchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberSavedSearchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].savedSearches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdMemberSavedSearchesMutationKey() {
  return ['members', '/members/:idMember/savedSearches', 'POST'] as const
}

export function getPostMembersIdMemberSavedSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdMemberSavedSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>,
    ) {
      return parseResponse(client.members[':idMember'].savedSearches.$post(args, options))
    },
  })
}

export function usePostMembersIdMemberSavedSearches<
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
                Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>,
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
  const mutationDefaults = getPostMembersIdMemberSavedSearchesMutationOptions<
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

export function getMembersIdMemberSavedSearchesIdSavedSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
    >
  >,
) {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', toValue(args)] as const
}

export function getMembersIdMemberSavedSearchesIdSavedSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberSavedSearchesIdSavedSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberSavedSearchesIdSavedSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberSavedSearchesIdSavedSearchQueryKey>
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
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberSavedSearchesIdSavedSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberSavedSearchesIdSavedSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchMutationKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', 'PUT'] as const
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberSavedSearchesIdSavedSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearch<
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
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
  const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
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

export function getDeleteMembersIdMemberSavedSearchesIdSavedSearchMutationKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', 'DELETE'] as const
}

export function getDeleteMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdMemberSavedSearchesIdSavedSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdMemberSavedSearchesIdSavedSearch<
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
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
  const mutationDefaults = getDeleteMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
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

export function getPutMembersIdMemberSavedSearchesIdSavedSearchNameMutationKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/name', 'PUT'] as const
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberSavedSearchesIdSavedSearchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].name.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchName<
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
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
  const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchNameMutationOptions<
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

export function getPutMembersIdMemberSavedSearchesIdSavedSearchPosMutationKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/pos', 'PUT'] as const
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchPosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberSavedSearchesIdSavedSearchPosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].pos.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchPos<
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
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
  const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchPosMutationOptions<
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

export function getPutMembersIdMemberSavedSearchesIdSavedSearchQueryMutationKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/query', 'PUT'] as const
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberSavedSearchesIdSavedSearchQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].query.$put(args, options),
      )
    },
  })
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchQuery<
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
                    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
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
  const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchQueryMutationOptions<
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

export function getMembersIdMemberTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>>,
) {
  return ['members', '/members/:idMember/tokens', toValue(args)] as const
}

export function getMembersIdMemberTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMemberUsernameMutationKey() {
  return ['members', '/members/:idMember/username', 'PUT'] as const
}

export function getPutMembersIdMemberUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['username']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':idMember']['username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMemberUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':idMember']['username']['$put']>,
    ) {
      return parseResponse(client.members[':idMember'].username.$put(args, options))
    },
  })
}

export function usePutMembersIdMemberUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember']['username']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':idMember']['username']['$put']>,
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
  const mutationDefaults = getPutMembersIdMemberUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdMemberFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>>,
) {
  return ['members', '/members/:idMember/:field', toValue(args)] as const
}

export function getMembersIdMemberFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdMemberFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':idMember'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdMemberFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdMemberFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':idMember'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNotificationsAllReadMutationKey() {
  return ['notifications', '/notifications/all/read', 'POST'] as const
}

export function getPostNotificationsAllReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.all.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsAllReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.all.read.$post>) {
      return parseResponse(client.notifications.all.read.$post(args, options))
    },
  })
}

export function usePostNotificationsAllRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.all.read.$post>,
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
  const mutationDefaults = getPostNotificationsAllReadMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdNotificationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification', toValue(args)] as const
}

export function getNotificationsIdNotificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsIdNotificationMutationKey() {
  return ['notifications', '/notifications/:idNotification', 'PUT'] as const
}

export function getPutNotificationsIdNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':idNotification']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)[':idNotification']['$put']>,
    ) {
      return parseResponse(client.notifications[':idNotification'].$put(args, options))
    },
  })
}

export function usePutNotificationsIdNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':idNotification']['$put']>,
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
  const mutationDefaults = getPutNotificationsIdNotificationMutationOptions<
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

export function getNotificationsIdNotificationBoardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/board', toValue(args)] as const
}

export function getNotificationsIdNotificationBoardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationBoardQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationBoardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board'][':field']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/board/:field', toValue(args)] as const
}

export function getNotificationsIdNotificationBoardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationBoardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].board[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['board'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['board'][':field']['$get']>
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
                    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationBoardFieldQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['board'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationBoardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationBoardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].board[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationCardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/card', toValue(args)] as const
}

export function getNotificationsIdNotificationCardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationCardQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationCardFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/card/:field', toValue(args)] as const
}

export function getNotificationsIdNotificationCardFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationCardFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].card[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationCardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
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
                    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationCardFieldQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationCardFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationCardFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].card[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationDisplayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/display', toValue(args)] as const
}

export function getNotificationsIdNotificationDisplayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationDisplayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].display.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationDisplayQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationDisplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationDisplayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].display.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationEntitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/entities', toValue(args)] as const
}

export function getNotificationsIdNotificationEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationEntitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/list', toValue(args)] as const
}

export function getNotificationsIdNotificationListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationListQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationListFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/list/:field', toValue(args)] as const
}

export function getNotificationsIdNotificationListFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationListFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].list[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
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
                    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationListFieldQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationListFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationListFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].list[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationMemberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/member', toValue(args)] as const
}

export function getNotificationsIdNotificationMemberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationMemberQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationMemberFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member'][':field']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/member/:field', toValue(args)] as const
}

export function getNotificationsIdNotificationMemberFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationMemberFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].member[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['member'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['member'][':field']['$get']>
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
                    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationMemberFieldQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['member'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationMemberFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationMemberFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].member[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationMemberCreatorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/memberCreator', toValue(args)] as const
}

export function getNotificationsIdNotificationMemberCreatorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationMemberCreatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].memberCreator.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
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
                    (typeof client.notifications)[':idNotification']['memberCreator']['$get']
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
                    (typeof client.notifications)[':idNotification']['memberCreator']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationMemberCreatorQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationMemberCreatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationMemberCreatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].memberCreator.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationMemberCreatorFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
    >
  >,
) {
  return [
    'notifications',
    '/notifications/:idNotification/memberCreator/:field',
    toValue(args),
  ] as const
}

export function getNotificationsIdNotificationMemberCreatorFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationMemberCreatorFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].memberCreator[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationMemberCreatorField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationMemberCreatorFieldQueryKey>
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
              (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationMemberCreatorFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationMemberCreatorFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].memberCreator[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/organization', toValue(args)] as const
}

export function getNotificationsIdNotificationOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>
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
                    (typeof client.notifications)[':idNotification']['organization']['$get']
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
                    (typeof client.notifications)[':idNotification']['organization']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationOrganizationQueryKey>
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
            ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdNotificationOrganizationFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
    >
  >,
) {
  return [
    'notifications',
    '/notifications/:idNotification/organization/:field',
    toValue(args),
  ] as const
}

export function getNotificationsIdNotificationOrganizationFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationOrganizationFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'].organization[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationOrganizationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
                    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationOrganizationFieldQueryKey>
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
              (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationOrganizationFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationOrganizationFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'].organization[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsIdNotificationUnreadMutationKey() {
  return ['notifications', '/notifications/:idNotification/unread', 'PUT'] as const
}

export function getPutNotificationsIdNotificationUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['unread']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdNotificationUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>,
    ) {
      return parseResponse(client.notifications[':idNotification'].unread.$put(args, options))
    },
  })
}

export function usePutNotificationsIdNotificationUnread<
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
                  ReturnType<(typeof client.notifications)[':idNotification']['unread']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>,
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
  const mutationDefaults = getPutNotificationsIdNotificationUnreadMutationOptions<
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

export function getNotificationsIdNotificationFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>
  >,
) {
  return ['notifications', '/notifications/:idNotification/:field', toValue(args)] as const
}

export function getNotificationsIdNotificationFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdNotificationFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':idNotification'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdNotificationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>
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
                  ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsIdNotificationFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdNotificationFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdNotificationFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':idNotification'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
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
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdOrgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':idOrg']['$get']>>,
) {
  return ['organizations', '/organizations/:idOrg', toValue(args)] as const
}

export function getOrganizationsIdOrgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':idOrg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':idOrg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgMutationKey() {
  return ['organizations', '/organizations/:idOrg', 'PUT'] as const
}

export function getPutOrganizationsIdOrgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':idOrg']['$put']>) {
      return parseResponse(client.organizations[':idOrg'].$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdOrgMutationKey() {
  return ['organizations', '/organizations/:idOrg', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':idOrg']['$delete']>) {
      return parseResponse(client.organizations[':idOrg'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationsIdOrgMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdOrgActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/actions', toValue(args)] as const
}

export function getOrganizationsIdOrgActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgBoardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/boards', toValue(args)] as const
}

export function getOrganizationsIdOrgBoardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgBoardsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgBoardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/boards/:filter', toValue(args)] as const
}

export function getOrganizationsIdOrgBoardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgBoardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].boards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgBoardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
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
                  ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgBoardsFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgBoardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgBoardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].boards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgDeltasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/deltas', toValue(args)] as const
}

export function getOrganizationsIdOrgDeltasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgDeltasQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgDescMutationKey() {
  return ['organizations', '/organizations/:idOrg/desc', 'PUT'] as const
}

export function getPutOrganizationsIdOrgDescMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['desc']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgDescMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].desc.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['desc']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgDescMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganizationsIdOrgDisplayNameMutationKey() {
  return ['organizations', '/organizations/:idOrg/displayName', 'PUT'] as const
}

export function getPutOrganizationsIdOrgDisplayNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['displayName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgDisplayNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].displayName.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgDisplayName<
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
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['displayName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgDisplayNameMutationOptions<
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

export function getPostOrganizationsIdOrgLogoMutationKey() {
  return ['organizations', '/organizations/:idOrg/logo', 'POST'] as const
}

export function getPostOrganizationsIdOrgLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdOrgLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].logo.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdOrgLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']>,
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
  const mutationDefaults = getPostOrganizationsIdOrgLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdOrgLogoMutationKey() {
  return ['organizations', '/organizations/:idOrg/logo', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].logo.$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdOrgLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationsIdOrgLogoMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdOrgMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/members', toValue(args)] as const
}

export function getOrganizationsIdOrgMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgMembersMutationKey() {
  return ['organizations', '/organizations/:idOrg/members', 'PUT'] as const
}

export function getPutOrganizationsIdOrgMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].members.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgMembersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdOrgMembersFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/members/:filter', toValue(args)] as const
}

export function getOrganizationsIdOrgMembersFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembersFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].members[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembersFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
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
                  ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembersFilterQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembersFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembersFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].members[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember', 'PUT'] as const
}

export function getPutOrganizationsIdOrgMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['members'][':idMember']['$put']
      >,
    ) {
      return parseResponse(client.organizations[':idOrg'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgMembersIdMember<
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgMembersIdMemberMutationOptions<
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

export function getDeleteOrganizationsIdOrgMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].members[':idMember'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdOrgMembersIdMember<
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdOrgMembersIdMemberMutationOptions<
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

export function getDeleteOrganizationsIdOrgMembersIdMemberAllMutationKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember/all', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgMembersIdMemberAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgMembersIdMemberAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].members[':idMember'].all.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdOrgMembersIdMemberAll<
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdOrgMembersIdMemberAllMutationOptions<
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

export function getOrganizationsIdOrgMembersIdMemberCardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
    >
  >,
) {
  return ['organizations', '/organizations/:idOrg/members/:idMember/cards', toValue(args)] as const
}

export function getOrganizationsIdOrgMembersIdMemberCardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembersIdMemberCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].members[':idMember'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembersIdMemberCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembersIdMemberCardsQueryKey>
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
              (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembersIdMemberCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembersIdMemberCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].members[':idMember'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgMembersIdMemberDeactivatedMutationKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember/deactivated', 'PUT'] as const
}

export function getPutOrganizationsIdOrgMembersIdMemberDeactivatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgMembersIdMemberDeactivatedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].members[':idMember'].deactivated.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgMembersIdMemberDeactivated<
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
                    (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgMembersIdMemberDeactivatedMutationOptions<
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

export function getOrganizationsIdOrgMembersInvitedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited', toValue(args)] as const
}

export function getOrganizationsIdOrgMembersInvitedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembersInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].membersInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembersInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>
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
                  ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembersInvitedQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembersInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembersInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].membersInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgMembersInvitedFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited/:field', toValue(args)] as const
}

export function getOrganizationsIdOrgMembersInvitedFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembersInvitedFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].membersInvited[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembersInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']>
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
                    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
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
                    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembersInvitedFieldQueryKey>
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
            ReturnType<(typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembersInvitedFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembersInvitedFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].membersInvited[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/memberships', toValue(args)] as const
}

export function getOrganizationsIdOrgMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdOrgMembershipsIdMembershipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:idOrg/memberships/:idMembership',
    toValue(args),
  ] as const
}

export function getOrganizationsIdOrgMembershipsIdMembershipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgMembershipsIdMembershipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'].memberships[':idMembership'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgMembershipsIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
                    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
                    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgMembershipsIdMembershipQueryKey>
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
              (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgMembershipsIdMembershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgMembershipsIdMembershipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'].memberships[':idMembership'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdOrgMembershipsIdMembershipMutationKey() {
  return ['organizations', '/organizations/:idOrg/memberships/:idMembership', 'PUT'] as const
}

export function getPutOrganizationsIdOrgMembershipsIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgMembershipsIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].memberships[':idMembership'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgMembershipsIdMembership<
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
                    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgMembershipsIdMembershipMutationOptions<
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

export function getPutOrganizationsIdOrgNameMutationKey() {
  return ['organizations', '/organizations/:idOrg/name', 'PUT'] as const
}

export function getPutOrganizationsIdOrgNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].name.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganizationsIdOrgPrefsAssociatedDomainMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/associatedDomain', 'PUT'] as const
}

export function getPutOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsAssociatedDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.associatedDomain.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsAssociatedDomain<
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
                    (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
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

export function getDeleteOrganizationsIdOrgPrefsAssociatedDomainMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/associatedDomain', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgPrefsAssociatedDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.associatedDomain.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdOrgPrefsAssociatedDomain<
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
                    (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgMutationKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/org',
    'PUT',
  ] as const
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.boardVisibilityRestrict.org.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrg<
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
                    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateMutationKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/private',
    'PUT',
  ] as const
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.boardVisibilityRestrict.private.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivate<
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
                    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
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
  const mutationDefaults =
    getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicMutationKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/public',
    'PUT',
  ] as const
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.boardVisibilityRestrict.public.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublic<
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
                    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
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
  const mutationDefaults =
    getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsExternalMembersDisabledMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/externalMembersDisabled', 'PUT'] as const
}

export function getPutOrganizationsIdOrgPrefsExternalMembersDisabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsExternalMembersDisabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.externalMembersDisabled.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsExternalMembersDisabled<
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
                    (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsExternalMembersDisabledMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsGoogleAppsVersionMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/googleAppsVersion', 'PUT'] as const
}

export function getPutOrganizationsIdOrgPrefsGoogleAppsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsGoogleAppsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.googleAppsVersion.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsGoogleAppsVersion<
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
                    (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsGoogleAppsVersionMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsOrgInviteRestrictMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/orgInviteRestrict', 'PUT'] as const
}

export function getPutOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsOrgInviteRestrictMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.orgInviteRestrict.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdOrgPrefsOrgInviteRestrict<
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
                    (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
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

export function getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/orgInviteRestrict', 'DELETE'] as const
}

export function getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':idOrg'].prefs.orgInviteRestrict.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdOrgPrefsOrgInviteRestrict<
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
                    (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
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

export function getPutOrganizationsIdOrgPrefsPermissionLevelMutationKey() {
  return ['organizations', '/organizations/:idOrg/prefs/permissionLevel', 'PUT'] as const
}

export function getPutOrganizationsIdOrgPrefsPermissionLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgPrefsPermissionLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']
      >,
    ) {
      return parseResponse(client.organizations[':idOrg'].prefs.permissionLevel.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgPrefsPermissionLevel<
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
                    (typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']
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
  const mutationDefaults = getPutOrganizationsIdOrgPrefsPermissionLevelMutationOptions<
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

export function getPutOrganizationsIdOrgWebsiteMutationKey() {
  return ['organizations', '/organizations/:idOrg/website', 'PUT'] as const
}

export function getPutOrganizationsIdOrgWebsiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['website']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdOrgWebsiteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']>,
    ) {
      return parseResponse(client.organizations[':idOrg'].website.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdOrgWebsite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg']['website']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']>,
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
  const mutationDefaults = getPutOrganizationsIdOrgWebsiteMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdOrgFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>
  >,
) {
  return ['organizations', '/organizations/:idOrg/:field', toValue(args)] as const
}

export function getOrganizationsIdOrgFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdOrgFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':idOrg'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdOrgField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdOrgFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdOrgFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':idOrg'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.$get>>,
) {
  return ['search', '/search/members', toValue(args)] as const
}

export function getSearchMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
          >,
          ReturnType<typeof getSearchMembersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function usePostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sessions.$post>,
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
  const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSessionsSocketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.socket.$get>>,
) {
  return ['sessions', '/sessions/socket', toValue(args)] as const
}

export function getSessionsSocketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.socket.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsSocketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.socket.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsSocket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.socket.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>
            >
          >,
          ReturnType<typeof getSessionsSocketQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSocketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsSocketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.socket.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSessionsIdSessionMutationKey() {
  return ['sessions', '/sessions/:idSession', 'PUT'] as const
}

export function getPutSessionsIdSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':idSession']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':idSession']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSessionsIdSessionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':idSession']['$put']>) {
      return parseResponse(client.sessions[':idSession'].$put(args, options))
    },
  })
}

export function usePutSessionsIdSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':idSession']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':idSession']['$put']>,
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
  const mutationDefaults = getPutSessionsIdSessionMutationOptions<TError, TOnMutateResult>(
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

export function getPutSessionsIdSessionStatusMutationKey() {
  return ['sessions', '/sessions/:idSession/status', 'PUT'] as const
}

export function getPutSessionsIdSessionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':idSession']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSessionsIdSessionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']>,
    ) {
      return parseResponse(client.sessions[':idSession'].status.$put(args, options))
    },
  })
}

export function usePutSessionsIdSessionStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':idSession']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']>,
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
  const mutationDefaults = getPutSessionsIdSessionStatusMutationOptions<TError, TOnMutateResult>(
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

export function getTokensTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
) {
  return ['tokens', '/tokens/:token', toValue(args)] as const
}

export function getTokensTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
            >
          >,
          ReturnType<typeof getTokensTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTokensTokenMutationKey() {
  return ['tokens', '/tokens/:token', 'DELETE'] as const
}

export function getDeleteTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':token']['$delete']>) {
      return parseResponse(client.tokens[':token'].$delete(args, options))
    },
  })
}

export function useDeleteTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['$delete']>,
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
  const mutationDefaults = getDeleteTokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getTokensTokenMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['member']['$get']>>,
) {
  return ['tokens', '/tokens/:token/member', toValue(args)] as const
}

export function getTokensTokenMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['member']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['member']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensTokenMemberQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensTokenMemberFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>
  >,
) {
  return ['tokens', '/tokens/:token/member/:field', toValue(args)] as const
}

export function getTokensTokenMemberFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenMemberFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].member[':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensTokenMemberFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenMemberFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenMemberFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].member[':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensTokenWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>>,
) {
  return ['tokens', '/tokens/:token/webhooks', toValue(args)] as const
}

export function getTokensTokenWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensTokenWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTokensTokenWebhooksMutationKey() {
  return ['tokens', '/tokens/:token/webhooks', 'PUT'] as const
}

export function getPutTokensTokenWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTokensTokenWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']>) {
      return parseResponse(client.tokens[':token'].webhooks.$put(args, options))
    },
  })
}

export function usePutTokensTokenWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']>,
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
  const mutationDefaults = getPutTokensTokenWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getPostTokensTokenWebhooksMutationKey() {
  return ['tokens', '/tokens/:token/webhooks', 'POST'] as const
}

export function getPostTokensTokenWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTokensTokenWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks.$post(args, options))
    },
  })
}

export function usePostTokensTokenWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
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
  const mutationDefaults = getPostTokensTokenWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getTokensTokenWebhooksIdWebhookQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
  >,
) {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', toValue(args)] as const
}

export function getTokensTokenWebhooksIdWebhookQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenWebhooksIdWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].webhooks[':idWebhook'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
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
                  ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenWebhooksIdWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].webhooks[':idWebhook'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTokensTokenWebhooksIdWebhookMutationKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'DELETE'] as const
}

export function getDeleteTokensTokenWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenWebhooksIdWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$delete(args, options))
    },
  })
}

export function useDeleteTokensTokenWebhooksIdWebhook<
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
                  ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
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
  const mutationDefaults = getDeleteTokensTokenWebhooksIdWebhookMutationOptions<
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

export function getTokensTokenFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>>,
) {
  return ['tokens', '/tokens/:token/:field', toValue(args)] as const
}

export function getTokensTokenFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensTokenFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':id']['$get']>>,
) {
  return ['types', '/types/:id', toValue(args)] as const
}

export function getTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.types[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTypesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTypesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.types[':id'].$get(toValue(args), {
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

export function getPutWebhooksIndexMutationKey() {
  return ['webhooks', '/webhooks/', 'PUT'] as const
}

export function getPutWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.index.$put>) {
      return parseResponse(client.webhooks.index.$put(args, options))
    },
  })
}

export function usePutWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.index.$put>,
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
  const mutationDefaults = getPutWebhooksIndexMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdWebhookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>>,
) {
  return ['webhooks', '/webhooks/:idWebhook', toValue(args)] as const
}

export function getWebhooksIdWebhookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':idWebhook'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdWebhookQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':idWebhook'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook', 'PUT'] as const
}

export function getPutWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']>) {
      return parseResponse(client.webhooks[':idWebhook'].$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']>) {
      return parseResponse(client.webhooks[':idWebhook'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksIdWebhookActiveMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook/active', 'PUT'] as const
}

export function getPutWebhooksIdWebhookActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['active']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']>,
    ) {
      return parseResponse(client.webhooks[':idWebhook'].active.$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhookActive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['active']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookActiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksIdWebhookCallbackURLMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook/callbackURL', 'PUT'] as const
}

export function getPutWebhooksIdWebhookCallbackURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookCallbackURLMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>,
    ) {
      return parseResponse(client.webhooks[':idWebhook'].callbackURL.$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhookCallbackURL<
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
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookCallbackURLMutationOptions<
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

export function getPutWebhooksIdWebhookDescriptionMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook/description', 'PUT'] as const
}

export function getPutWebhooksIdWebhookDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['description']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']>,
    ) {
      return parseResponse(client.webhooks[':idWebhook'].description.$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhookDescription<
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
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['description']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookDescriptionMutationOptions<
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

export function getPutWebhooksIdWebhookIdModelMutationKey() {
  return ['webhooks', '/webhooks/:idWebhook/idModel', 'PUT'] as const
}

export function getPutWebhooksIdWebhookIdModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookIdModelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>,
    ) {
      return parseResponse(client.webhooks[':idWebhook'].idModel.$put(args, options))
    },
  })
}

export function usePutWebhooksIdWebhookIdModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdWebhookIdModelMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdWebhookFieldQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:idWebhook/:field', toValue(args)] as const
}

export function getWebhooksIdWebhookFieldQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdWebhookFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':idWebhook'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdWebhookField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdWebhookFieldQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdWebhookFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':idWebhook'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
