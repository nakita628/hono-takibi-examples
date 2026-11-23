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

export function getApplicationsKey() {
  return ['applications'] as const
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

export function getCustomFieldsKey() {
  return ['customFields'] as const
}

export function getEmojiKey() {
  return ['emoji'] as const
}

export function getEnterprisesKey() {
  return ['enterprises'] as const
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

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
) {
  return ['actions', '/actions/:id', toValue(args)] as const
}

export function getActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getActionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutActionsIdMutationKey() {
  return ['actions', '/actions/:id', 'PUT'] as const
}

export function getPutActionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['$put']>) {
      return parseResponse(client.actions[':id'].$put(args, options))
    },
  })
}

export function usePutActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteActionsIdMutationKey() {
  return ['actions', '/actions/:id', 'DELETE'] as const
}

export function getDeleteActionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['$delete']>) {
      return parseResponse(client.actions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id'][':field']['$get']>>,
) {
  return ['actions', '/actions/:id/:field', toValue(args)] as const
}

export function getActionsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['board']['$get']>>,
) {
  return ['actions', '/actions/:id/board', toValue(args)] as const
}

export function getActionsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['card']['$get']>>,
) {
  return ['actions', '/actions/:id/card', toValue(args)] as const
}

export function getActionsIdCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['card']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['card']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdCardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['list']['$get']>>,
) {
  return ['actions', '/actions/:id/list', toValue(args)] as const
}

export function getActionsIdListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['member']['$get']>>,
) {
  return ['actions', '/actions/:id/member', toValue(args)] as const
}

export function getActionsIdMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['member']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['member']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdMemberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdMemberCreatorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>>,
) {
  return ['actions', '/actions/:id/memberCreator', toValue(args)] as const
}

export function getActionsIdMemberCreatorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdMemberCreatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].memberCreator.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdMemberCreatorQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdMemberCreatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdMemberCreatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].memberCreator.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdOrganizationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['organization']['$get']>>,
) {
  return ['actions', '/actions/:id/organization', toValue(args)] as const
}

export function getActionsIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['organization']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['organization']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdOrganizationQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutActionsIdTextMutationKey() {
  return ['actions', '/actions/:id/text', 'PUT'] as const
}

export function getPutActionsIdTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['text']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['text']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['text']['$put']>) {
      return parseResponse(client.actions[':id'].text.$put(args, options))
    },
  })
}

export function usePutActionsIdText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':id']['text']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':id']['text']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActionsIdTextMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionReactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/reactions', toValue(args)] as const
}

export function getActionsIdActionReactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionReactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].reactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionsIdActionReactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionReactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].reactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionsIdActionReactionsMutationKey() {
  return ['actions', '/actions/:idAction/reactions', 'POST'] as const
}

export function getPostActionsIdActionReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsIdActionReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
    ) {
      return parseResponse(client.actions[':idAction'].reactions.$post(args, options))
    },
  })
}

export function usePostActionsIdActionReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionsIdActionReactionsMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionReactionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/reactions/:id', toValue(args)] as const
}

export function getActionsIdActionReactionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionReactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].reactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionReactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>
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
                  ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionsIdActionReactionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionReactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].reactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteActionsIdActionReactionsIdMutationKey() {
  return ['actions', '/actions/:idAction/reactions/:id', 'DELETE'] as const
}

export function getDeleteActionsIdActionReactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsIdActionReactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
    ) {
      return parseResponse(client.actions[':idAction'].reactions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActionsIdActionReactionsId<
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
                  ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActionsIdActionReactionsIdMutationOptions<
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

export function getActionsIdActionReactionsSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>
  >,
) {
  return ['actions', '/actions/:idAction/reactionsSummary', toValue(args)] as const
}

export function getActionsIdActionReactionsSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdActionReactionsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':idAction'].reactionsSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsIdActionReactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>
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
                  ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionsIdActionReactionsSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdActionReactionsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':idAction'].reactionsSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationsKeyComplianceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>
  >,
) {
  return ['applications', '/applications/:key/compliance', toValue(args)] as const
}

export function getApplicationsKeyComplianceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsKeyComplianceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':key'].compliance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsKeyCompliance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApplicationsKeyComplianceQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsKeyComplianceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsKeyComplianceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':key'].compliance.$get(toValue(args), {
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

export function getBoardsIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>>,
) {
  return ['boards', '/boards/:id/memberships', toValue(args)] as const
}

export function getBoardsIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdMembershipsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['$get']>>,
) {
  return ['boards', '/boards/:id', toValue(args)] as const
}

export function getBoardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBoardsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdMutationKey() {
  return ['boards', '/boards/:id', 'PUT'] as const
}

export function getPutBoardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['$put']>) {
      return parseResponse(client.boards[':id'].$put(args, options))
    },
  })
}

export function usePutBoardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBoardsIdMutationKey() {
  return ['boards', '/boards/:id', 'DELETE'] as const
}

export function getDeleteBoardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['$delete']>) {
      return parseResponse(client.boards[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id'][':field']['$get']>>,
) {
  return ['boards', '/boards/:id/:field', toValue(args)] as const
}

export function getBoardsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsBoardIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>>,
) {
  return ['boards', '/boards/:boardId/actions', toValue(args)] as const
}

export function getBoardsBoardIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':boardId'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsBoardIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':boardId'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsBoardIdBoardStarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>
  >,
) {
  return ['boards', '/boards/:boardId/boardStars', toValue(args)] as const
}

export function getBoardsBoardIdBoardStarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdBoardStarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':boardId'].boardStars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsBoardIdBoardStarsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdBoardStarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdBoardStarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':boardId'].boardStars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdChecklistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>>,
) {
  return ['boards', '/boards/:id/checklists', toValue(args)] as const
}

export function getBoardsIdChecklistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdChecklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].checklists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdChecklistsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdChecklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdChecklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].checklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['cards']['$get']>>,
) {
  return ['boards', '/boards/:id/cards', toValue(args)] as const
}

export function getBoardsIdCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdCardsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>
  >,
) {
  return ['boards', '/boards/:id/cards/:filter', toValue(args)] as const
}

export function getBoardsIdCardsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdCardsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].cards[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdCardsFilterQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCardsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdCardsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].cards[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdCustomFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>>,
) {
  return ['boards', '/boards/:id/customFields', toValue(args)] as const
}

export function getBoardsIdCustomFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdCustomFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].customFields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdCustomFieldsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCustomFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdCustomFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].customFields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['labels']['$get']>>,
) {
  return ['boards', '/boards/:id/labels', toValue(args)] as const
}

export function getBoardsIdLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdLabelsMutationKey() {
  return ['boards', '/boards/:id/labels', 'POST'] as const
}

export function getPostBoardsIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['labels']['$post']>) {
      return parseResponse(client.boards[':id'].labels.$post(args, options))
    },
  })
}

export function usePostBoardsIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['labels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['lists']['$get']>>,
) {
  return ['boards', '/boards/:id/lists', toValue(args)] as const
}

export function getBoardsIdListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdListsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdListsMutationKey() {
  return ['boards', '/boards/:id/lists', 'POST'] as const
}

export function getPostBoardsIdListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['lists']['$post']>) {
      return parseResponse(client.boards[':id'].lists.$post(args, options))
    },
  })
}

export function usePostBoardsIdLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['lists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdListsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdListsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>
  >,
) {
  return ['boards', '/boards/:id/lists/:filter', toValue(args)] as const
}

export function getBoardsIdListsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdListsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].lists[':filter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdListsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdListsFilterQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdListsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdListsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].lists[':filter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['members']['$get']>>,
) {
  return ['boards', '/boards/:id/members', toValue(args)] as const
}

export function getBoardsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBoardsIdMembersMutationKey() {
  return ['boards', '/boards/:id/members', 'PUT'] as const
}

export function getPutBoardsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['members']['$put']>) {
      return parseResponse(client.boards[':id'].members.$put(args, options))
    },
  })
}

export function usePutBoardsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['members']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['members']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMembersIdMemberMutationKey() {
  return ['boards', '/boards/:id/members/:idMember', 'PUT'] as const
}

export function getPutBoardsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutBoardsIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembersIdMemberMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBoardsIdMembersIdMemberMutationKey() {
  return ['boards', '/boards/:id/members/:idMember', 'DELETE'] as const
}

export function getDeleteBoardsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].members[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdMembersIdMemberMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMembershipsIdMembershipMutationKey() {
  return ['boards', '/boards/:id/memberships/:idMembership', 'PUT'] as const
}

export function getPutBoardsIdMembershipsIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembershipsIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].memberships[':idMembership'].$put(args, options))
    },
  })
}

export function usePutBoardsIdMembershipsIdMembership<
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
                  ReturnType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembershipsIdMembershipMutationOptions<
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

export function getPutBoardsIdMyPrefsEmailPositionMutationKey() {
  return ['boards', '/boards/:id/myPrefs/emailPosition', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsEmailPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsEmailPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.emailPosition.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsEmailPosition<
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
                  ReturnType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsEmailPositionMutationOptions<
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

export function getPutBoardsIdMyPrefsIdEmailListMutationKey() {
  return ['boards', '/boards/:id/myPrefs/idEmailList', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsIdEmailListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsIdEmailListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.idEmailList.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsIdEmailList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsIdEmailListMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMyPrefsShowSidebarMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebar', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebar.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMyPrefsShowSidebarActivityMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarActivity', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarActivity.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarActivity<
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
                    (typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarActivityMutationOptions<
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

export function getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarBoardActions', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarBoardActions.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarBoardActions<
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
                    (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
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
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationOptions<
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

export function getPutBoardsIdMyPrefsShowSidebarMembersMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarMembers', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarMembers.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarMembers<
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
                  ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarMembersMutationOptions<
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

export function getPostBoardsIndexMutationKey() {
  return ['boards', '/boards/', 'POST'] as const
}

export function getPostBoardsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.boards.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.boards.index.$post>) {
      return parseResponse(client.boards.index.$post(args, options))
    },
  })
}

export function usePostBoardsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.boards.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBoardsIdCalendarKeyGenerateMutationKey() {
  return ['boards', '/boards/:id/calendarKey/generate', 'POST'] as const
}

export function getPostBoardsIdCalendarKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdCalendarKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].calendarKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdCalendarKeyGenerate<
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
                  ReturnType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdCalendarKeyGenerateMutationOptions<
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

export function getPostBoardsIdEmailKeyGenerateMutationKey() {
  return ['boards', '/boards/:id/emailKey/generate', 'POST'] as const
}

export function getPostBoardsIdEmailKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdEmailKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].emailKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdEmailKeyGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdEmailKeyGenerateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBoardsIdIdTagsMutationKey() {
  return ['boards', '/boards/:id/idTags', 'POST'] as const
}

export function getPostBoardsIdIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['idTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>) {
      return parseResponse(client.boards[':id'].idTags.$post(args, options))
    },
  })
}

export function usePostBoardsIdIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['idTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostBoardsIdMarkAsViewedMutationKey() {
  return ['boards', '/boards/:id/markAsViewed', 'POST'] as const
}

export function getPostBoardsIdMarkAsViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['markAsViewed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdMarkAsViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].markAsViewed.$post(args, options))
    },
  })
}

export function usePostBoardsIdMarkAsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['markAsViewed']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdMarkAsViewedMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>>,
) {
  return ['boards', '/boards/:id/boardPlugins', toValue(args)] as const
}

export function getBoardsIdBoardPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdBoardPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].boardPlugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdBoardPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdBoardPluginsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdBoardPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].boardPlugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdBoardPluginsMutationKey() {
  return ['boards', '/boards/:id/boardPlugins', 'POST'] as const
}

export function getPostBoardsIdBoardPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardPluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].boardPlugins.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdBoardPluginsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBoardsIdBoardPluginsIdPluginMutationKey() {
  return ['boards', '/boards/:id/boardPlugins/:idPlugin', 'DELETE'] as const
}

export function getDeleteBoardsIdBoardPluginsIdPluginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdBoardPluginsIdPluginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].boardPlugins[':idPlugin'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdBoardPluginsIdPlugin<
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
                  ReturnType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdBoardPluginsIdPluginMutationOptions<
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

export function getBoardsIdPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>>,
) {
  return ['boards', '/boards/:id/plugins', toValue(args)] as const
}

export function getBoardsIdPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdPluginsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBoardsIdExportsMutationKey() {
  return ['boards', '/boards/:id/exports', 'POST'] as const
}

export function getPostBoardsIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['exports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdExportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['exports']['$post']>) {
      return parseResponse(client.boards[':id'].exports.$post(args, options))
    },
  })
}

export function usePostBoardsIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['exports']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdExportsIdExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>
  >,
) {
  return ['boards', '/boards/:id/exports/:idExport', toValue(args)] as const
}

export function getBoardsIdExportsIdExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdExportsIdExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].exports[':idExport'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdExportsIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdExportsIdExportQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsIdExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdExportsIdExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].exports[':idExport'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBoardsIdExportsIdExportMutationKey() {
  return ['boards', '/boards/:id/exports/:idExport', 'DELETE'] as const
}

export function getDeleteBoardsIdExportsIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdExportsIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].exports[':idExport'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdExportsIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdExportsIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdExportsIdExportDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
  >,
) {
  return ['boards', '/boards/:id/exports/:idExport/download', toValue(args)] as const
}

export function getBoardsIdExportsIdExportDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdExportsIdExportDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].exports[':idExport'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdExportsIdExportDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
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
                    (typeof client.boards)[':id']['exports'][':idExport']['download']['$get']
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
                    (typeof client.boards)[':id']['exports'][':idExport']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoardsIdExportsIdExportDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsIdExportDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdExportsIdExportDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].exports[':idExport'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsIdExportsMostRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>
  >,
) {
  return ['boards', '/boards/:id/exports/mostRecent', toValue(args)] as const
}

export function getBoardsIdExportsMostRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsIdExportsMostRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':id'].exports.mostRecent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsIdExportsMostRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsIdExportsMostRecentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsMostRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsIdExportsMostRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':id'].exports.mostRecent.$get(toValue(args), {
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

export function getCardsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['$get']>>,
) {
  return ['cards', '/cards/:id', toValue(args)] as const
}

export function getCardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdMutationKey() {
  return ['cards', '/cards/:id', 'PUT'] as const
}

export function getPutCardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['$put']>) {
      return parseResponse(client.cards[':id'].$put(args, options))
    },
  })
}

export function usePutCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCardsIdMutationKey() {
  return ['cards', '/cards/:id', 'DELETE'] as const
}

export function getDeleteCardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['$delete']>) {
      return parseResponse(client.cards[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id'][':field']['$get']>>,
) {
  return ['cards', '/cards/:id/:field', toValue(args)] as const
}

export function getCardsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['actions']['$get']>>,
) {
  return ['cards', '/cards/:id/actions', toValue(args)] as const
}

export function getCardsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>>,
) {
  return ['cards', '/cards/:id/attachments', toValue(args)] as const
}

export function getCardsIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdAttachmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdAttachmentsMutationKey() {
  return ['cards', '/cards/:id/attachments', 'POST'] as const
}

export function getPostCardsIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>) {
      return parseResponse(client.cards[':id'].attachments.$post(args, options))
    },
  })
}

export function usePostCardsIdAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdAttachmentsIdAttachmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
  >,
) {
  return ['cards', '/cards/:id/attachments/:idAttachment', toValue(args)] as const
}

export function getCardsIdAttachmentsIdAttachmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdAttachmentsIdAttachmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].attachments[':idAttachment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdAttachmentsIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
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
                  ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCardsIdAttachmentsIdAttachmentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdAttachmentsIdAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdAttachmentsIdAttachmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].attachments[':idAttachment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCardsIdAttachmentsIdAttachmentMutationKey() {
  return ['cards', '/cards/:id/attachments/:idAttachment', 'DELETE'] as const
}

export function getDeleteCardsIdAttachmentsIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdAttachmentsIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']
      >,
    ) {
      return parseResponse(client.cards[':id'].attachments[':idAttachment'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdAttachmentsIdAttachment<
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
                    (typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdAttachmentsIdAttachmentMutationOptions<
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

export function getCardsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['board']['$get']>>,
) {
  return ['cards', '/cards/:id/board', toValue(args)] as const
}

export function getCardsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdCheckItemStatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>>,
) {
  return ['cards', '/cards/:id/checkItemStates', toValue(args)] as const
}

export function getCardsIdCheckItemStatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCheckItemStatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].checkItemStates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCheckItemStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCheckItemStatesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCheckItemStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCheckItemStatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].checkItemStates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdChecklistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>>,
) {
  return ['cards', '/cards/:id/checklists', toValue(args)] as const
}

export function getCardsIdChecklistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdChecklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].checklists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdChecklistsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdChecklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdChecklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].checklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdChecklistsMutationKey() {
  return ['cards', '/cards/:id/checklists', 'POST'] as const
}

export function getPostCardsIdChecklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdChecklistsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>) {
      return parseResponse(client.cards[':id'].checklists.$post(args, options))
    },
  })
}

export function usePostCardsIdChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdChecklistsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCheckItemIdCheckItemQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>
  >,
) {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', toValue(args)] as const
}

export function getCardsIdCheckItemIdCheckItemQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCheckItemIdCheckItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].checkItem[':idCheckItem'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCheckItemIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>
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
                  ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCardsIdCheckItemIdCheckItemQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCheckItemIdCheckItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCheckItemIdCheckItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].checkItem[':idCheckItem'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'PUT'] as const
}

export function getPutCardsIdCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
    ) {
      return parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$put(args, options))
    },
  })
}

export function usePutCardsIdCheckItemIdCheckItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdCheckItemIdCheckItemMutationOptions<
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

export function getDeleteCardsIdCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'DELETE'] as const
}

export function getDeleteCardsIdCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCheckItemIdCheckItem<
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
                  ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdCheckItemIdCheckItemMutationOptions<
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

export function getCardsIdListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['list']['$get']>>,
) {
  return ['cards', '/cards/:id/list', toValue(args)] as const
}

export function getCardsIdListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['members']['$get']>>,
) {
  return ['cards', '/cards/:id/members', toValue(args)] as const
}

export function getCardsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdMembersVotedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>>,
) {
  return ['cards', '/cards/:id/membersVoted', toValue(args)] as const
}

export function getCardsIdMembersVotedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdMembersVotedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].membersVoted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdMembersVoted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdMembersVotedQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdMembersVotedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdMembersVotedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].membersVoted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdMembersVotedMutationKey() {
  return ['cards', '/cards/:id/membersVoted', 'POST'] as const
}

export function getPostCardsIdMembersVotedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdMembersVotedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
    ) {
      return parseResponse(client.cards[':id'].membersVoted.$post(args, options))
    },
  })
}

export function usePostCardsIdMembersVoted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdMembersVotedMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdPluginDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>>,
) {
  return ['cards', '/cards/:id/pluginData', toValue(args)] as const
}

export function getCardsIdPluginDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdPluginDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].pluginData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdPluginDataQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdPluginDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdPluginDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].pluginData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsIdStickersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>>,
) {
  return ['cards', '/cards/:id/stickers', toValue(args)] as const
}

export function getCardsIdStickersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdStickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].stickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdStickersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdStickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdStickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].stickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdStickersMutationKey() {
  return ['cards', '/cards/:id/stickers', 'POST'] as const
}

export function getPostCardsIdStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdStickersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>) {
      return parseResponse(client.cards[':id'].stickers.$post(args, options))
    },
  })
}

export function usePostCardsIdStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdStickersMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdStickersIdStickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>
  >,
) {
  return ['cards', '/cards/:id/stickers/:idSticker', toValue(args)] as const
}

export function getCardsIdStickersIdStickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdStickersIdStickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].stickers[':idSticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdStickersIdStickerQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdStickersIdStickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdStickersIdStickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].stickers[':idSticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCardsIdStickersIdStickerMutationKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'PUT'] as const
}

export function getPutCardsIdStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
    ) {
      return parseResponse(client.cards[':id'].stickers[':idSticker'].$put(args, options))
    },
  })
}

export function usePutCardsIdStickersIdSticker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdStickersIdStickerMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdStickersIdStickerMutationKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'DELETE'] as const
}

export function getDeleteCardsIdStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].stickers[':idSticker'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdStickersIdSticker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdStickersIdStickerMutationOptions<
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

export function getPutCardsIdActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'PUT'] as const
}

export function getPutCardsIdActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']
      >,
    ) {
      return parseResponse(client.cards[':id'].actions[':idAction'].comments.$put(args, options))
    },
  })
}

export function usePutCardsIdActionsIdActionComments<
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
                    (typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']
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
  const mutationDefaults = getPutCardsIdActionsIdActionCommentsMutationOptions<
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

export function getDeleteCardsIdActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'DELETE'] as const
}

export function getDeleteCardsIdActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
      >,
    ) {
      return parseResponse(client.cards[':id'].actions[':idAction'].comments.$delete(args, options))
    },
  })
}

export function useDeleteCardsIdActionsIdActionComments<
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
                    (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
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
  const mutationDefaults = getDeleteCardsIdActionsIdActionCommentsMutationOptions<
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

export function getPutCardsIdCardCustomFieldIdCustomFieldItemMutationKey() {
  return ['cards', '/cards/:idCard/customField/:idCustomField/item', 'PUT'] as const
}

export function getPutCardsIdCardCustomFieldIdCustomFieldItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardCustomFieldIdCustomFieldItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].customField[':idCustomField'].item.$put(args, options),
      )
    },
  })
}

export function usePutCardsIdCardCustomFieldIdCustomFieldItem<
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
                    (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
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
  const mutationDefaults = getPutCardsIdCardCustomFieldIdCustomFieldItemMutationOptions<
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

export function getPutCardsIdCardCustomFieldsMutationKey() {
  return ['cards', '/cards/:idCard/customFields', 'PUT'] as const
}

export function getPutCardsIdCardCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].customFields.$put(args, options))
    },
  })
}

export function usePutCardsIdCardCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':idCard']['customFields']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdCardCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCustomFieldItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>
  >,
) {
  return ['cards', '/cards/:id/customFieldItems', toValue(args)] as const
}

export function getCardsIdCustomFieldItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsIdCustomFieldItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':id'].customFieldItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsIdCustomFieldItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsIdCustomFieldItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCustomFieldItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsIdCustomFieldItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':id'].customFieldItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsIdActionsCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/comments', 'POST'] as const
}

export function getPostCardsIdActionsCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['actions']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdActionsCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
    ) {
      return parseResponse(client.cards[':id'].actions.comments.$post(args, options))
    },
  })
}

export function usePostCardsIdActionsComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['actions']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdActionsCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdIdLabelsMutationKey() {
  return ['cards', '/cards/:id/idLabels', 'POST'] as const
}

export function getPostCardsIdIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['idLabels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>) {
      return parseResponse(client.cards[':id'].idLabels.$post(args, options))
    },
  })
}

export function usePostCardsIdIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['idLabels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdIdMembersMutationKey() {
  return ['cards', '/cards/:id/idMembers', 'POST'] as const
}

export function getPostCardsIdIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>) {
      return parseResponse(client.cards[':id'].idMembers.$post(args, options))
    },
  })
}

export function usePostCardsIdIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['idMembers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdLabelsMutationKey() {
  return ['cards', '/cards/:id/labels', 'POST'] as const
}

export function getPostCardsIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['labels']['$post']>) {
      return parseResponse(client.cards[':id'].labels.$post(args, options))
    },
  })
}

export function usePostCardsIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['labels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdMarkAssociatedNotificationsReadMutationKey() {
  return ['cards', '/cards/:id/markAssociatedNotificationsRead', 'POST'] as const
}

export function getPostCardsIdMarkAssociatedNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdMarkAssociatedNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']
      >,
    ) {
      return parseResponse(client.cards[':id'].markAssociatedNotificationsRead.$post(args, options))
    },
  })
}

export function usePostCardsIdMarkAssociatedNotificationsRead<
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
                    (typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']
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
  const mutationDefaults = getPostCardsIdMarkAssociatedNotificationsReadMutationOptions<
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

export function getDeleteCardsIdIdLabelsIdLabelMutationKey() {
  return ['cards', '/cards/:id/idLabels/:idLabel', 'DELETE'] as const
}

export function getDeleteCardsIdIdLabelsIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdIdLabelsIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].idLabels[':idLabel'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdIdLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdIdLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdIdMembersIdMemberMutationKey() {
  return ['cards', '/cards/:id/idMembers/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].idMembers[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdIdMembersIdMemberMutationOptions<
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

export function getDeleteCardsIdMembersVotedIdMemberMutationKey() {
  return ['cards', '/cards/:id/membersVoted/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdMembersVotedIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdMembersVotedIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].membersVoted[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdMembersVotedIdMember<
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
                  ReturnType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdMembersVotedIdMemberMutationOptions<
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

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem', 'PUT'] as const
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
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
                    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
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
  const mutationDefaults = getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
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

export function getDeleteCardsIdChecklistsIdChecklistMutationKey() {
  return ['cards', '/cards/:id/checklists/:idChecklist', 'DELETE'] as const
}

export function getDeleteCardsIdChecklistsIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdChecklistsIdChecklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].checklists[':idChecklist'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdChecklistsIdChecklist<
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
                  ReturnType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdChecklistsIdChecklistMutationOptions<
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

export function getChecklistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['$get']>>,
) {
  return ['checklists', '/checklists/:id', toValue(args)] as const
}

export function getChecklistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChecklistsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChecklistsIdMutationKey() {
  return ['checklists', '/checklists/:id', 'PUT'] as const
}

export function getPutChecklistsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id']['$put']>) {
      return parseResponse(client.checklists[':id'].$put(args, options))
    },
  })
}

export function usePutChecklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChecklistsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteChecklistsIdMutationKey() {
  return ['checklists', '/checklists/:id', 'DELETE'] as const
}

export function getDeleteChecklistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id']['$delete']>) {
      return parseResponse(client.checklists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteChecklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChecklistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>>,
) {
  return ['checklists', '/checklists/:id/:field', toValue(args)] as const
}

export function getChecklistsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChecklistsIdFieldMutationKey() {
  return ['checklists', '/checklists/:id/:field', 'PUT'] as const
}

export function getPutChecklistsIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>) {
      return parseResponse(client.checklists[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutChecklistsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChecklistsIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['board']['$get']>>,
) {
  return ['checklists', '/checklists/:id/board', toValue(args)] as const
}

export function getChecklistsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>>,
) {
  return ['checklists', '/checklists/:id/cards', toValue(args)] as const
}

export function getChecklistsIdCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChecklistsIdCheckItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>>,
) {
  return ['checklists', '/checklists/:id/checkItems', toValue(args)] as const
}

export function getChecklistsIdCheckItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdCheckItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'].checkItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdCheckItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecklistsIdCheckItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCheckItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdCheckItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'].checkItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChecklistsIdCheckItemsMutationKey() {
  return ['checklists', '/checklists/:id/checkItems', 'POST'] as const
}

export function getPostChecklistsIdCheckItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChecklistsIdCheckItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
    ) {
      return parseResponse(client.checklists[':id'].checkItems.$post(args, options))
    },
  })
}

export function usePostChecklistsIdCheckItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChecklistsIdCheckItemsMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdCheckItemsIdCheckItemQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
  >,
) {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', toValue(args)] as const
}

export function getChecklistsIdCheckItemsIdCheckItemQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecklistsIdCheckItemsIdCheckItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checklists[':id'].checkItems[':idCheckItem'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecklistsIdCheckItemsIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
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
                    (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']
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
                    (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChecklistsIdCheckItemsIdCheckItemQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCheckItemsIdCheckItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecklistsIdCheckItemsIdCheckItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checklists[':id'].checkItems[':idCheckItem'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChecklistsIdCheckItemsIdCheckItemMutationKey() {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', 'DELETE'] as const
}

export function getDeleteChecklistsIdCheckItemsIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdCheckItemsIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
      >,
    ) {
      return parseResponse(
        client.checklists[':id'].checkItems[':idCheckItem'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChecklistsIdCheckItemsIdCheckItem<
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
                    (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
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
  const mutationDefaults = getDeleteChecklistsIdCheckItemsIdCheckItemMutationOptions<
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

export function getPostCustomFieldsMutationKey() {
  return ['customFields', '/customFields', 'POST'] as const
}

export function getPostCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customFields.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.customFields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customFields.$post>) {
      return parseResponse(client.customFields.$post(args, options))
    },
  })
}

export function usePostCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customFields.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customFields.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['$get']>>,
) {
  return ['customFields', '/customFields/:id', toValue(args)] as const
}

export function getCustomFieldsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomFieldsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customFields[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCustomFieldsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomFieldsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customFields[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomFieldsIdMutationKey() {
  return ['customFields', '/customFields/:id', 'PUT'] as const
}

export function getPutCustomFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomFieldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customFields)[':id']['$put']>) {
      return parseResponse(client.customFields[':id'].$put(args, options))
    },
  })
}

export function usePutCustomFieldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.customFields)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCustomFieldsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCustomFieldsIdMutationKey() {
  return ['customFields', '/customFields/:id', 'DELETE'] as const
}

export function getDeleteCustomFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomFieldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customFields)[':id']['$delete']>) {
      return parseResponse(client.customFields[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomFieldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customFields)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customFields)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomFieldsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['options']['$get']>>,
) {
  return ['customFields', '/customFields/:id/options', toValue(args)] as const
}

export function getCustomFieldsIdOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomFieldsIdOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customFields[':id'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomFieldsIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customFields)[':id']['options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomFieldsIdOptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomFieldsIdOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customFields[':id'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomFieldsIdOptionsMutationKey() {
  return ['customFields', '/customFields/:id/options', 'POST'] as const
}

export function getPostCustomFieldsIdOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsIdOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
    ) {
      return parseResponse(client.customFields[':id'].options.$post(args, options))
    },
  })
}

export function usePostCustomFieldsIdOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsIdOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
  >,
) {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', toValue(args)] as const
}

export function getCustomFieldsIdOptionsIdCustomFieldOptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customFields[':id'].options[':idCustomFieldOption'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomFieldsIdOptionsIdCustomFieldOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
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
                    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
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
                    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customFields[':id'].options[':idCustomFieldOption'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationKey() {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', 'DELETE'] as const
}

export function getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
      >,
    ) {
      return parseResponse(
        client.customFields[':id'].options[':idCustomFieldOption'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomFieldsIdOptionsIdCustomFieldOption<
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
                    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
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
  const mutationDefaults = getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationOptions<
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

export function getEmojiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emoji.$get>>,
) {
  return ['emoji', '/emoji', toValue(args)] as const
}

export function getEmojiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emoji.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmojiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emoji.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmoji<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emoji.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
          ReturnType<typeof getEmojiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmojiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emoji.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['$get']>>,
) {
  return ['enterprises', '/enterprises/:id', toValue(args)] as const
}

export function getEnterprisesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEnterprisesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdAuditlogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>>,
) {
  return ['enterprises', '/enterprises/:id/auditlog', toValue(args)] as const
}

export function getEnterprisesIdAuditlogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdAuditlogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].auditlog.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdAuditlog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdAuditlogQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdAuditlogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdAuditlogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].auditlog.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdAdminsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>>,
) {
  return ['enterprises', '/enterprises/:id/admins', toValue(args)] as const
}

export function getEnterprisesIdAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdAdminsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdSignupUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>,
) {
  return ['enterprises', '/enterprises/:id/signupUrl', toValue(args)] as const
}

export function getEnterprisesIdSignupUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdSignupUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].signupUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdSignupUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdSignupUrlQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdSignupUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdSignupUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].signupUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdMembersQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:id/members/query', toValue(args)] as const
}

export function getEnterprisesIdMembersQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdMembersQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].members.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdMembersQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdMembersQueryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdMembersQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].members.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>>,
) {
  return ['enterprises', '/enterprises/:id/members', toValue(args)] as const
}

export function getEnterprisesIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdMembersIdMemberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:id/members/:idMember', toValue(args)] as const
}

export function getEnterprisesIdMembersIdMemberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdMembersIdMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdMembersIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
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
                  ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdMembersIdMemberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersIdMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdMembersIdMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].members[':idMember'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
    >
  >,
) {
  return [
    'enterprises',
    '/enterprises/:id/transferrable/organization/:idOrganization',
    toValue(args),
  ] as const
}

export function getEnterprisesIdTransferrableOrganizationIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useEnterprisesIdTransferrableOrganizationIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
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
                    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
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
                    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
    >
  >,
) {
  return [
    'enterprises',
    '/enterprises/:id/transferrable/bulk/:idOrganizations',
    toValue(args),
  ] as const
}

export function getEnterprisesIdTransferrableBulkIdOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdTransferrableBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
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
                    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
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
                    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEnterprisesIdEnterpriseJoinRequestBulkMutationKey() {
  return ['enterprises', '/enterprises/${id}/enterpriseJoinRequest/bulk', 'PUT'] as const
}

export function getPutEnterprisesIdEnterpriseJoinRequestBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)['${id}']['enterpriseJoinRequest']['bulk']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)['${id}']['enterpriseJoinRequest']['bulk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdEnterpriseJoinRequestBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)['${id}']['enterpriseJoinRequest']['bulk']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises['${id}'].enterpriseJoinRequest.bulk.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdEnterpriseJoinRequestBulk<
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
                    (typeof client.enterprises)['${id}']['enterpriseJoinRequest']['bulk']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprises)['${id}']['enterpriseJoinRequest']['bulk']['$put']
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
  const mutationDefaults = getPutEnterprisesIdEnterpriseJoinRequestBulkMutationOptions<
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

export function getEnterprisesIdClaimableOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:id/claimableOrganizations', toValue(args)] as const
}

export function getEnterprisesIdClaimableOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdClaimableOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].claimableOrganizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdClaimableOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
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
                  ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdClaimableOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdClaimableOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdClaimableOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].claimableOrganizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnterprisesIdPendingOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:id/pendingOrganizations', toValue(args)] as const
}

export function getEnterprisesIdPendingOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdPendingOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].pendingOrganizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdPendingOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
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
                  ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdPendingOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdPendingOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdPendingOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].pendingOrganizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnterprisesIdTokensMutationKey() {
  return ['enterprises', '/enterprises/:id/tokens', 'POST'] as const
}

export function getPostEnterprisesIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterprisesIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
    ) {
      return parseResponse(client.enterprises[':id'].tokens.$post(args, options))
    },
  })
}

export function usePostEnterprisesIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterprisesIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getEnterprisesIdOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>
  >,
) {
  return ['enterprises', '/enterprises/:id/organizations', toValue(args)] as const
}

export function getEnterprisesIdOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEnterprisesIdOrganizationsMutationKey() {
  return ['enterprises', '/enterprises/:id/organizations', 'PUT'] as const
}

export function getPutEnterprisesIdOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdOrganizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
    ) {
      return parseResponse(client.enterprises[':id'].organizations.$put(args, options))
    },
  })
}

export function usePutEnterprisesIdOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnterprisesIdOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutEnterprisesIdMembersIdMemberLicensedMutationKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/licensed', 'PUT'] as const
}

export function getPutEnterprisesIdMembersIdMemberLicensedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdMembersIdMemberLicensedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].licensed.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdMembersIdMemberLicensed<
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
                    (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
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
  const mutationDefaults = getPutEnterprisesIdMembersIdMemberLicensedMutationOptions<
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

export function getPutEnterprisesIdMembersIdMemberDeactivatedMutationKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function getPutEnterprisesIdMembersIdMemberDeactivatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdMembersIdMemberDeactivatedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].deactivated.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdMembersIdMemberDeactivated<
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
                    (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
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
  const mutationDefaults = getPutEnterprisesIdMembersIdMemberDeactivatedMutationOptions<
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

export function getPutEnterprisesIdAdminsIdMemberMutationKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'PUT'] as const
}

export function getPutEnterprisesIdAdminsIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdAdminsIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
    ) {
      return parseResponse(client.enterprises[':id'].admins[':idMember'].$put(args, options))
    },
  })
}

export function usePutEnterprisesIdAdminsIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnterprisesIdAdminsIdMemberMutationOptions<
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

export function getDeleteEnterprisesIdAdminsIdMemberMutationKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'DELETE'] as const
}

export function getDeleteEnterprisesIdAdminsIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnterprisesIdAdminsIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.enterprises[':id'].admins[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteEnterprisesIdAdminsIdMember<
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
                  ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnterprisesIdAdminsIdMemberMutationOptions<
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

export function getDeleteEnterprisesIdOrganizationsIdOrgMutationKey() {
  return ['enterprises', '/enterprises/:id/organizations/:idOrg', 'DELETE'] as const
}

export function getDeleteEnterprisesIdOrganizationsIdOrgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnterprisesIdOrganizationsIdOrgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']
      >,
    ) {
      return parseResponse(client.enterprises[':id'].organizations[':idOrg'].$delete(args, options))
    },
  })
}

export function useDeleteEnterprisesIdOrganizationsIdOrg<
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
                    (typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']
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
  const mutationDefaults = getDeleteEnterprisesIdOrganizationsIdOrgMutationOptions<
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

export function getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
    >
  >,
) {
  return [
    'enterprises',
    '/enterprises/:id/organizations/bulk/:idOrganizations',
    toValue(args),
  ] as const
}

export function getEnterprisesIdOrganizationsBulkIdOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnterprisesIdOrganizationsBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
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
                    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
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
                    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['$get']>>,
) {
  return ['labels', '/labels/:id', toValue(args)] as const
}

export function getLabelsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLabelsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLabelsIdMutationKey() {
  return ['labels', '/labels/:id', 'PUT'] as const
}

export function getPutLabelsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['$put']>) {
      return parseResponse(client.labels[':id'].$put(args, options))
    },
  })
}

export function usePutLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLabelsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLabelsIdMutationKey() {
  return ['labels', '/labels/:id', 'DELETE'] as const
}

export function getDeleteLabelsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['$delete']>) {
      return parseResponse(client.labels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLabelsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutLabelsIdFieldMutationKey() {
  return ['labels', '/labels/:id/:field', 'PUT'] as const
}

export function getPutLabelsIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id'][':field']['$put']>) {
      return parseResponse(client.labels[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutLabelsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':id'][':field']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':id'][':field']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLabelsIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
) {
  return ['lists', '/lists/:id', toValue(args)] as const
}

export function getListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getListsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutListsIdMutationKey() {
  return ['lists', '/lists/:id', 'PUT'] as const
}

export function getPutListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['$put']>) {
      return parseResponse(client.lists[':id'].$put(args, options))
    },
  })
}

export function usePutListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getPostListsIdArchiveAllCardsMutationKey() {
  return ['lists', '/lists/:id/archiveAllCards', 'POST'] as const
}

export function getPostListsIdArchiveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['archiveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdArchiveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':id'].archiveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdArchiveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['archiveAllCards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsIdArchiveAllCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListsIdMoveAllCardsMutationKey() {
  return ['lists', '/lists/:id/moveAllCards', 'POST'] as const
}

export function getPostListsIdMoveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['moveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdMoveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':id'].moveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdMoveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['moveAllCards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsIdMoveAllCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdClosedMutationKey() {
  return ['lists', '/lists/:id/closed', 'PUT'] as const
}

export function getPutListsIdClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['closed']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['closed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdClosedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['closed']['$put']>) {
      return parseResponse(client.lists[':id'].closed.$put(args, options))
    },
  })
}

export function usePutListsIdClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['closed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id']['closed']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdClosedMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdIdBoardMutationKey() {
  return ['lists', '/lists/:id/idBoard', 'PUT'] as const
}

export function getPutListsIdIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['idBoard']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdIdBoardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>) {
      return parseResponse(client.lists[':id'].idBoard.$put(args, options))
    },
  })
}

export function usePutListsIdIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['idBoard']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdIdBoardMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdFieldMutationKey() {
  return ['lists', '/lists/:id/:field', 'PUT'] as const
}

export function getPutListsIdFieldMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id'][':field']['$put']>) {
      return parseResponse(client.lists[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutListsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id'][':field']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':id'][':field']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdFieldMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['actions']['$get']>>,
) {
  return ['lists', '/lists/:id/actions', toValue(args)] as const
}

export function getListsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['board']['$get']>>,
) {
  return ['lists', '/lists/:id/board', toValue(args)] as const
}

export function getListsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['cards']['$get']>>,
) {
  return ['lists', '/lists/:id/cards', toValue(args)] as const
}

export function getListsIdCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['$get']>>,
) {
  return ['members', '/members/:id', toValue(args)] as const
}

export function getMembersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMembersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdMutationKey() {
  return ['members', '/members/:id', 'PUT'] as const
}

export function getPutMembersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':id']['$put']>) {
      return parseResponse(client.members[':id'].$put(args, options))
    },
  })
}

export function usePutMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMembersIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id'][':field']['$get']>>,
) {
  return ['members', '/members/:id/:field', toValue(args)] as const
}

export function getMembersIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['actions']['$get']>>,
) {
  return ['members', '/members/:id/actions', toValue(args)] as const
}

export function getMembersIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdBoardBackgroundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>
  >,
) {
  return ['members', '/members/:id/boardBackgrounds', toValue(args)] as const
}

export function getMembersIdBoardBackgroundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardBackgroundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boardBackgrounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardBackgroundsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardBackgroundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardBackgroundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boardBackgrounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdBoardBackgroundsMutationKey() {
  return ['members', '/members/:id/boardBackgrounds', 'POST'] as const
}

export function getPostMembersIdBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
    ) {
      return parseResponse(client.members[':id'].boardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdBoardBackgrounds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdBoardBackgroundsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdBoardBackgroundsIdBackgroundQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
  >,
) {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', toValue(args)] as const
}

export function getMembersIdBoardBackgroundsIdBackgroundQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardBackgroundsIdBackgroundQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
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
                    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
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
                    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardBackgroundsIdBackgroundQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardBackgroundsIdBackgroundQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardBackgroundsIdBackgroundQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boardBackgrounds[':idBackground'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'PUT'] as const
}

export function getPutMembersIdBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdBoardBackgroundsIdBackground<
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
                    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
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
  const mutationDefaults = getPutMembersIdBoardBackgroundsIdBackgroundMutationOptions<
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

export function getDeleteMembersIdBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'DELETE'] as const
}

export function getDeleteMembersIdBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdBoardBackgroundsIdBackground<
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
                    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
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
  const mutationDefaults = getDeleteMembersIdBoardBackgroundsIdBackgroundMutationOptions<
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

export function getMembersIdBoardStarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>>,
) {
  return ['members', '/members/:id/boardStars', toValue(args)] as const
}

export function getMembersIdBoardStarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardStarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boardStars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardStarsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardStarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardStarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boardStars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdBoardStarsMutationKey() {
  return ['members', '/members/:id/boardStars', 'POST'] as const
}

export function getPostMembersIdBoardStarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdBoardStarsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
    ) {
      return parseResponse(client.members[':id'].boardStars.$post(args, options))
    },
  })
}

export function usePostMembersIdBoardStars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdBoardStarsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdBoardStarsIdStarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>
  >,
) {
  return ['members', '/members/:id/boardStars/:idStar', toValue(args)] as const
}

export function getMembersIdBoardStarsIdStarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardStarsIdStarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boardStars[':idStar'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoardStarsIdStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardStarsIdStarQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardStarsIdStarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardStarsIdStarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boardStars[':idStar'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdBoardStarsIdStarMutationKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'PUT'] as const
}

export function getPutMembersIdBoardStarsIdStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdBoardStarsIdStarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
    ) {
      return parseResponse(client.members[':id'].boardStars[':idStar'].$put(args, options))
    },
  })
}

export function usePutMembersIdBoardStarsIdStar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdBoardStarsIdStarMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMembersIdBoardStarsIdStarMutationKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'DELETE'] as const
}

export function getDeleteMembersIdBoardStarsIdStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdBoardStarsIdStarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
    ) {
      return parseResponse(client.members[':id'].boardStars[':idStar'].$delete(args, options))
    },
  })
}

export function useDeleteMembersIdBoardStarsIdStar<
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
                  ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdBoardStarsIdStarMutationOptions<
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

export function getMembersIdBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boards']['$get']>>,
) {
  return ['members', '/members/:id/boards', toValue(args)] as const
}

export function getMembersIdBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdBoardsInvitedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>>,
) {
  return ['members', '/members/:id/boardsInvited', toValue(args)] as const
}

export function getMembersIdBoardsInvitedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdBoardsInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].boardsInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdBoardsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdBoardsInvitedQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardsInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdBoardsInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].boardsInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['cards']['$get']>>,
) {
  return ['members', '/members/:id/cards', toValue(args)] as const
}

export function getMembersIdCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].cards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdCardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdCustomBoardBackgroundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>
  >,
) {
  return ['members', '/members/:id/customBoardBackgrounds', toValue(args)] as const
}

export function getMembersIdCustomBoardBackgroundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomBoardBackgroundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>
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
                  ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomBoardBackgroundsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomBoardBackgroundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomBoardBackgroundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customBoardBackgrounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdCustomBoardBackgroundsMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds', 'POST'] as const
}

export function getPostMembersIdCustomBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customBoardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomBoardBackgrounds<
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
                  ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomBoardBackgroundsMutationOptions<
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

export function getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
    >
  >,
) {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', toValue(args)] as const
}

export function getMembersIdCustomBoardBackgroundsIdBackgroundQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
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
                    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
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
                    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customBoardBackgrounds[':idBackground'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'PUT'] as const
}

export function getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdCustomBoardBackgroundsIdBackground<
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
                    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
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
  const mutationDefaults = getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
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

export function getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'DELETE'] as const
}

export function getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdCustomBoardBackgroundsIdBackground<
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
                    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
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
  const mutationDefaults = getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
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

export function getMembersIdCustomEmojiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>>,
) {
  return ['members', '/members/:id/customEmoji', toValue(args)] as const
}

export function getMembersIdCustomEmojiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomEmojiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customEmoji.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomEmojiQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomEmojiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customEmoji.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdCustomEmojiMutationKey() {
  return ['members', '/members/:id/customEmoji', 'POST'] as const
}

export function getPostMembersIdCustomEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customEmoji.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomEmoji<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomEmojiMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdCustomEmojiIdEmojiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>
  >,
) {
  return ['members', '/members/:id/customEmoji/:idEmoji', toValue(args)] as const
}

export function getMembersIdCustomEmojiIdEmojiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomEmojiIdEmojiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customEmoji[':idEmoji'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomEmojiIdEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>
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
                  ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomEmojiIdEmojiQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomEmojiIdEmojiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomEmojiIdEmojiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customEmoji[':idEmoji'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdCustomStickersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>
  >,
) {
  return ['members', '/members/:id/customStickers', toValue(args)] as const
}

export function getMembersIdCustomStickersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomStickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customStickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomStickersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomStickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomStickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customStickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdCustomStickersMutationKey() {
  return ['members', '/members/:id/customStickers', 'POST'] as const
}

export function getPostMembersIdCustomStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomStickersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customStickers.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomStickersMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdCustomStickersIdStickerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
  >,
) {
  return ['members', '/members/:id/customStickers/:idSticker', toValue(args)] as const
}

export function getMembersIdCustomStickersIdStickerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdCustomStickersIdStickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].customStickers[':idSticker'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdCustomStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
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
                  ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdCustomStickersIdStickerQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomStickersIdStickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdCustomStickersIdStickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].customStickers[':idSticker'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMembersIdCustomStickersIdStickerMutationKey() {
  return ['members', '/members/:id/customStickers/:idSticker', 'DELETE'] as const
}

export function getDeleteMembersIdCustomStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdCustomStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customStickers[':idSticker'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdCustomStickersIdSticker<
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
                    (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
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
  const mutationDefaults = getDeleteMembersIdCustomStickersIdStickerMutationOptions<
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

export function getMembersIdNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['notifications']['$get']>>,
) {
  return ['members', '/members/:id/notifications', toValue(args)] as const
}

export function getMembersIdNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['notifications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['notifications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdNotificationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['organizations']['$get']>>,
) {
  return ['members', '/members/:id/organizations', toValue(args)] as const
}

export function getMembersIdOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['organizations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['organizations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdOrganizationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdOrganizationsInvitedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>
  >,
) {
  return ['members', '/members/:id/organizationsInvited', toValue(args)] as const
}

export function getMembersIdOrganizationsInvitedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdOrganizationsInvitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].organizationsInvited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdOrganizationsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdOrganizationsInvitedQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdOrganizationsInvitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdOrganizationsInvitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].organizationsInvited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMembersIdSavedSearchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>>,
) {
  return ['members', '/members/:id/savedSearches', toValue(args)] as const
}

export function getMembersIdSavedSearchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdSavedSearchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].savedSearches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdSavedSearchesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdSavedSearchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdSavedSearchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].savedSearches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdSavedSearchesMutationKey() {
  return ['members', '/members/:id/savedSearches', 'POST'] as const
}

export function getPostMembersIdSavedSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdSavedSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
    ) {
      return parseResponse(client.members[':id'].savedSearches.$post(args, options))
    },
  })
}

export function usePostMembersIdSavedSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdSavedSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdSavedSearchesIdSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
  >,
) {
  return ['members', '/members/:id/savedSearches/:idSearch', toValue(args)] as const
}

export function getMembersIdSavedSearchesIdSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdSavedSearchesIdSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].savedSearches[':idSearch'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdSavedSearchesIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
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
                  ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdSavedSearchesIdSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdSavedSearchesIdSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdSavedSearchesIdSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].savedSearches[':idSearch'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdSavedSearchesIdSearchMutationKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'PUT'] as const
}

export function getPutMembersIdSavedSearchesIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdSavedSearchesIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
    ) {
      return parseResponse(client.members[':id'].savedSearches[':idSearch'].$put(args, options))
    },
  })
}

export function usePutMembersIdSavedSearchesIdSearch<
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
                  ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdSavedSearchesIdSearchMutationOptions<
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

export function getDeleteMembersIdSavedSearchesIdSearchMutationKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'DELETE'] as const
}

export function getDeleteMembersIdSavedSearchesIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdSavedSearchesIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']
      >,
    ) {
      return parseResponse(client.members[':id'].savedSearches[':idSearch'].$delete(args, options))
    },
  })
}

export function useDeleteMembersIdSavedSearchesIdSearch<
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
                    (typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdSavedSearchesIdSearchMutationOptions<
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

export function getMembersIdTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['tokens']['$get']>>,
) {
  return ['members', '/members/:id/tokens', toValue(args)] as const
}

export function getMembersIdTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.members)[':id']['tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMembersIdTokensQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMembersIdAvatarMutationKey() {
  return ['members', '/members/:id/avatar', 'POST'] as const
}

export function getPostMembersIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['avatar']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['avatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdAvatarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':id']['avatar']['$post']>) {
      return parseResponse(client.members[':id'].avatar.$post(args, options))
    },
  })
}

export function usePostMembersIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.members)[':id']['avatar']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['avatar']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getPostMembersIdOneTimeMessagesDismissedMutationKey() {
  return ['members', '/members/:id/oneTimeMessagesDismissed', 'POST'] as const
}

export function getPostMembersIdOneTimeMessagesDismissedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdOneTimeMessagesDismissedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
    ) {
      return parseResponse(client.members[':id'].oneTimeMessagesDismissed.$post(args, options))
    },
  })
}

export function usePostMembersIdOneTimeMessagesDismissed<
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
                  ReturnType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdOneTimeMessagesDismissedMutationOptions<
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

export function getMembersIdNotificationChannelSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
  >,
) {
  return ['members', '/members/:id/notificationChannelSettings', toValue(args)] as const
}

export function getMembersIdNotificationChannelSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdNotificationChannelSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdNotificationChannelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
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
                  ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdNotificationChannelSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationChannelSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdNotificationChannelSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].notificationChannelSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdNotificationChannelSettingsMutationKey() {
  return ['members', '/members/:id/notificationChannelSettings', 'PUT'] as const
}

export function getPutMembersIdNotificationChannelSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
    ) {
      return parseResponse(client.members[':id'].notificationChannelSettings.$put(args, options))
    },
  })
}

export function usePutMembersIdNotificationChannelSettings<
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
                  ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdNotificationChannelSettingsMutationOptions<
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

export function getMembersIdNotificationChannelSettingsChannelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
    >
  >,
) {
  return ['members', '/members/:id/notificationChannelSettings/:channel', toValue(args)] as const
}

export function getMembersIdNotificationChannelSettingsChannelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMembersIdNotificationChannelSettingsChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMembersIdNotificationChannelSettingsChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
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
                    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
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
                    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMembersIdNotificationChannelSettingsChannelQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationChannelSettingsChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMembersIdNotificationChannelSettingsChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.members[':id'].notificationChannelSettings[':channel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMembersIdNotificationChannelSettingsChannelMutationKey() {
  return ['members', '/members/:id/notificationChannelSettings/:channel', 'PUT'] as const
}

export function getPutMembersIdNotificationChannelSettingsChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdNotificationChannelSettingsChannel<
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
                    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
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
  const mutationDefaults = getPutMembersIdNotificationChannelSettingsChannelMutationOptions<
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

export function getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationKey() {
  return [
    'members',
    '/members/:id/notificationChannelSettings/:channel/:blockedKeys',
    'PUT',
  ] as const
}

export function getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'][':blockedKeys'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMembersIdNotificationChannelSettingsChannelBlockedKeys<
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
                    (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
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
    getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationOptions<
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

export function getNotificationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
) {
  return ['notifications', '/notifications/:id', toValue(args)] as const
}

export function getNotificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'PUT'] as const
}

export function getPutNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$put']>) {
      return parseResponse(client.notifications[':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>>,
) {
  return ['notifications', '/notifications/:id/:field', toValue(args)] as const
}

export function getNotificationsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'][':field'].$get(toValue(args), {
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

export function getPutNotificationsIdUnreadMutationKey() {
  return ['notifications', '/notifications/:id/unread', 'PUT'] as const
}

export function getPutNotificationsIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['unread']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
    ) {
      return parseResponse(client.notifications[':id'].unread.$put(args, options))
    },
  })
}

export function usePutNotificationsIdUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['unread']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsIdUnreadMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['board']['$get']>>,
) {
  return ['notifications', '/notifications/:id/board', toValue(args)] as const
}

export function getNotificationsIdBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['board']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['board']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['card']['$get']>>,
) {
  return ['notifications', '/notifications/:id/card', toValue(args)] as const
}

export function getNotificationsIdCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['card']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['card']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdCardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['list']['$get']>>,
) {
  return ['notifications', '/notifications/:id/list', toValue(args)] as const
}

export function getNotificationsIdListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdListQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['member']['$get']>>,
) {
  return ['notifications', '/notifications/:id/member', toValue(args)] as const
}

export function getNotificationsIdMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['member']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notifications)[':id']['member']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdMemberQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdMemberCreatorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>
  >,
) {
  return ['notifications', '/notifications/:id/memberCreator', toValue(args)] as const
}

export function getNotificationsIdMemberCreatorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdMemberCreatorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].memberCreator.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdMemberCreatorQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdMemberCreatorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdMemberCreatorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].memberCreator.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsIdOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>
  >,
) {
  return ['notifications', '/notifications/:id/organization', toValue(args)] as const
}

export function getNotificationsIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsIdOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications[':id'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsIdOrganizationQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsIdOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications[':id'].organization.$get(toValue(args), {
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

export function getOrganizationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
) {
  return ['organizations', '/organizations/:id', toValue(args)] as const
}

export function getOrganizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function getPutOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$put']>) {
      return parseResponse(client.organizations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$delete']>) {
      return parseResponse(client.organizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>>,
) {
  return ['organizations', '/organizations/:id/:field', toValue(args)] as const
}

export function getOrganizationsIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>>,
) {
  return ['organizations', '/organizations/:id/actions', toValue(args)] as const
}

export function getOrganizationsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>>,
) {
  return ['organizations', '/organizations/:id/boards', toValue(args)] as const
}

export function getOrganizationsIdBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdBoardsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdExportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>>,
) {
  return ['organizations', '/organizations/:id/exports', toValue(args)] as const
}

export function getOrganizationsIdExportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].exports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdExportsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].exports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsIdExportsMutationKey() {
  return ['organizations', '/organizations/:id/exports', 'POST'] as const
}

export function getPostOrganizationsIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].exports.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['members']['$get']>>,
) {
  return ['organizations', '/organizations/:id/members', toValue(args)] as const
}

export function getOrganizationsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsIdMembersMutationKey() {
  return ['organizations', '/organizations/:id/members', 'PUT'] as const
}

export function getPutOrganizationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
    ) {
      return parseResponse(client.organizations[':id'].members.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/memberships', toValue(args)] as const
}

export function getOrganizationsIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdMembershipsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdMembershipsIdMembershipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/memberships/:idMembership', toValue(args)] as const
}

export function getOrganizationsIdMembershipsIdMembershipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdMembershipsIdMembershipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].memberships[':idMembership'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdMembershipsIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
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
                    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
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
                    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdMembershipsIdMembershipQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembershipsIdMembershipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdMembershipsIdMembershipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].memberships[':idMembership'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdPluginDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/pluginData', toValue(args)] as const
}

export function getOrganizationsIdPluginDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdPluginDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].pluginData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdPluginDataQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdPluginDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdPluginDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].pluginData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIdTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>>,
) {
  return ['organizations', '/organizations/:id/tags', toValue(args)] as const
}

export function getOrganizationsIdTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsIdTagsMutationKey() {
  return ['organizations', '/organizations/:id/tags', 'POST'] as const
}

export function getPostOrganizationsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].tags.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganizationsIdMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'PUT'] as const
}

export function getPutOrganizationsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
    ) {
      return parseResponse(client.organizations[':id'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutOrganizationsIdMembersIdMember<
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
                  ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMembersIdMemberMutationOptions<
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

export function getDeleteOrganizationsIdMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['$delete']
      >,
    ) {
      return parseResponse(client.organizations[':id'].members[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdMembersIdMember<
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
                    (typeof client.organizations)[':id']['members'][':idMember']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMembersIdMemberMutationOptions<
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

export function getPutOrganizationsIdMembersIdMemberDeactivatedMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function getPutOrganizationsIdMembersIdMemberDeactivatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersIdMemberDeactivatedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].members[':idMember'].deactivated.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdMembersIdMemberDeactivated<
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
                    (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
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
  const mutationDefaults = getPutOrganizationsIdMembersIdMemberDeactivatedMutationOptions<
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

export function getPostOrganizationsIdLogoMutationKey() {
  return ['organizations', '/organizations/:id/logo', 'POST'] as const
}

export function getPostOrganizationsIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].logo.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdLogoMutationKey() {
  return ['organizations', '/organizations/:id/logo', 'DELETE'] as const
}

export function getDeleteOrganizationsIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
    ) {
      return parseResponse(client.organizations[':id'].logo.$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdMembersIdMemberAllMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember/all', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMembersIdMemberAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMembersIdMemberAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].members[':idMember'].all.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdMembersIdMemberAll<
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
                    (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdMembersIdMemberAllMutationOptions<
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

export function getDeleteOrganizationsIdPrefsAssociatedDomainMutationKey() {
  return ['organizations', '/organizations/:id/prefs/associatedDomain', 'DELETE'] as const
}

export function getDeleteOrganizationsIdPrefsAssociatedDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdPrefsAssociatedDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].prefs.associatedDomain.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdPrefsAssociatedDomain<
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
                    (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdPrefsAssociatedDomainMutationOptions<
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

export function getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationKey() {
  return ['organizations', '/organizations/:id/prefs/orgInviteRestrict', 'DELETE'] as const
}

export function getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].prefs.orgInviteRestrict.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdPrefsOrgInviteRestrict<
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
                    (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationOptions<
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

export function getDeleteOrganizationsIdTagsIdTagMutationKey() {
  return ['organizations', '/organizations/:id/tags/:idTag', 'DELETE'] as const
}

export function getDeleteOrganizationsIdTagsIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdTagsIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
    ) {
      return parseResponse(client.organizations[':id'].tags[':idTag'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdTagsIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdTagsIdTagMutationOptions<
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

export function getOrganizationsIdNewBillableGuestsIdBoardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
  >,
) {
  return ['organizations', '/organizations/:id/newBillableGuests/:idBoard', toValue(args)] as const
}

export function getOrganizationsIdNewBillableGuestsIdBoardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIdNewBillableGuestsIdBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':id'].newBillableGuests[':idBoard'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIdNewBillableGuestsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
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
                    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
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
                    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsIdNewBillableGuestsIdBoardQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdNewBillableGuestsIdBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIdNewBillableGuestsIdBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':id'].newBillableGuests[':idBoard'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['index']['$get']>>,
) {
  return ['plugins', '/plugins/:id/', toValue(args)] as const
}

export function getPluginsIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPluginsIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPluginsIdIndexMutationKey() {
  return ['plugins', '/plugins/:id/', 'PUT'] as const
}

export function getPutPluginsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPluginsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plugins)[':id']['index']['$put']>) {
      return parseResponse(client.plugins[':id'].index.$put(args, options))
    },
  })
}

export function usePutPluginsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plugins)[':id']['index']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPluginsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostPluginsIdPluginListingsMutationKey() {
  return ['plugins', '/plugins/:idPlugin/listings', 'POST'] as const
}

export function getPostPluginsIdPluginListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plugins)[':idPlugin']['listings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsIdPluginListingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
    ) {
      return parseResponse(client.plugins[':idPlugin'].listings.$post(args, options))
    },
  })
}

export function usePostPluginsIdPluginListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':idPlugin']['listings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPluginsIdPluginListingsMutationOptions<TError, TOnMutateResult>(
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

export function getPluginsIdComplianceMemberPrivacyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
  >,
) {
  return ['plugins', '/plugins/:id/compliance/memberPrivacy', toValue(args)] as const
}

export function getPluginsIdComplianceMemberPrivacyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsIdComplianceMemberPrivacyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':id'].compliance.memberPrivacy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsIdComplianceMemberPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
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
                  ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPluginsIdComplianceMemberPrivacyQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdComplianceMemberPrivacyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsIdComplianceMemberPrivacyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':id'].compliance.memberPrivacy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPluginsIdPluginListingsIdListingMutationKey() {
  return ['plugins', '/plugins/:idPlugin/listings/:idListing', 'PUT'] as const
}

export function getPutPluginsIdPluginListingsIdListingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPluginsIdPluginListingsIdListingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']
      >,
    ) {
      return parseResponse(client.plugins[':idPlugin'].listings[':idListing'].$put(args, options))
    },
  })
}

export function usePutPluginsIdPluginListingsIdListing<
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
                  ReturnType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPluginsIdPluginListingsIdListingMutationOptions<
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

export function getSearchMembersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.index.$get>>,
) {
  return ['search', '/search/members/', toValue(args)] as const
}

export function getSearchMembersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMembersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.members.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMembersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.members.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
            >
          >,
          ReturnType<typeof getSearchMembersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMembersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMembersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.members.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getPutTokensTokenWebhooksIdWebhookMutationKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'PUT'] as const
}

export function getPutTokensTokenWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTokensTokenWebhooksIdWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$put(args, options))
    },
  })
}

export function usePutTokensTokenWebhooksIdWebhook<
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
                  ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTokensTokenWebhooksIdWebhookMutationOptions<
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

export function getDeleteTokensTokenIndexMutationKey() {
  return ['tokens', '/tokens/:token/', 'DELETE'] as const
}

export function getDeleteTokensTokenIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>) {
      return parseResponse(client.tokens[':token'].index.$delete(args, options))
    },
  })
}

export function useDeleteTokensTokenIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':token']['index']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokensTokenIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksIndexMutationKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function getPostWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.index.$post>) {
      return parseResponse(client.webhooks.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIndexMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id', toValue(args)] as const
}

export function getWebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWebhooksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function getPutWebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$put']>) {
      return parseResponse(client.webhooks[':id'].$put(args, options))
    },
  })
}

export function usePutWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksIdFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>>,
) {
  return ['webhooks', '/webhooks/:id/:field', toValue(args)] as const
}

export function getWebhooksIdFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksIdFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':id'][':field'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksIdFieldQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksIdFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':id'][':field'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
