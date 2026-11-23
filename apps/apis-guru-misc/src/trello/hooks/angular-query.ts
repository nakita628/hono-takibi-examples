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
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
) {
  return ['actions', '/actions/:idAction', args] as const
}

export function getActionsIdActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionQueryKey>
  >({
    queryKey: getActionsIdActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionsIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionsIdActionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutActionsIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':idAction']['$put']>,
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
    const mutationDefaults = getPutActionsIdActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteActionsIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteActionsIdActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionsIdActionBoardQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
) {
  return ['actions', '/actions/:idAction/board', args] as const
}

export function getActionsIdActionBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionBoardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionBoardFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/board/:field', args] as const
}

export function getActionsIdActionBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionCardQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
) {
  return ['actions', '/actions/:idAction/card', args] as const
}

export function getActionsIdActionCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].card.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionsIdActionCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getActionsIdActionCardFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/card/:field', args] as const
}

export function getActionsIdActionCardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionCardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].card[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionCardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionCardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionDisplayQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
) {
  return ['actions', '/actions/:idAction/display', args] as const
}

export function getActionsIdActionDisplayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionDisplayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].display.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionDisplayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionEntitiesQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
) {
  return ['actions', '/actions/:idAction/entities', args] as const
}

export function getActionsIdActionEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionEntitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionListQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
) {
  return ['actions', '/actions/:idAction/list', args] as const
}

export function getActionsIdActionListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionsIdActionListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getActionsIdActionListFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/list/:field', args] as const
}

export function getActionsIdActionListFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionListFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].list[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionListFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionMemberQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
) {
  return ['actions', '/actions/:idAction/member', args] as const
}

export function getActionsIdActionMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionMemberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionMemberFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/member/:field', args] as const
}

export function getActionsIdActionMemberFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionMemberFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].member[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionMemberFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionMemberCreatorQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
) {
  return ['actions', '/actions/:idAction/memberCreator', args] as const
}

export function getActionsIdActionMemberCreatorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionMemberCreatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].memberCreator.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionMemberCreatorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionMemberCreatorFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/memberCreator/:field', args] as const
}

export function getActionsIdActionMemberCreatorFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionMemberCreatorFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].memberCreator[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionMemberCreatorField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.actions)[':idAction']['memberCreator'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionMemberCreatorFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionOrganizationQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
) {
  return ['actions', '/actions/:idAction/organization', args] as const
}

export function getActionsIdActionOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionOrganizationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getActionsIdActionOrganizationFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/organization/:field', args] as const
}

export function getActionsIdActionOrganizationFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionOrganizationFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].organization[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionOrganizationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.actions)[':idAction']['organization'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionOrganizationFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutActionsIdActionText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutActionsIdActionTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionsIdActionFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/:field', args] as const
}

export function getActionsIdActionFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionsIdActionFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionsIdActionField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getActionsIdActionFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBatchQueryKey(args: InferRequestType<typeof client.batch.$get>) {
  return ['batch', '/batch', args] as const
}

export function getBatchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.batch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchQueryKey>
  >({
    queryKey: getBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.batch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBoards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
        TError,
        InferRequestType<typeof client.boards.$post>,
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
    const mutationDefaults = getPostBoardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
) {
  return ['boards', '/boards/:idBoard', args] as const
}

export function getBoardsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardQueryKey>
  >({
    queryKey: getBoardsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBoardsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBoardsIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':idBoard']['$put']>,
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
    const mutationDefaults = getPutBoardsIdBoardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardActionsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
) {
  return ['boards', '/boards/:idBoard/actions', args] as const
}

export function getBoardsIdBoardActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardBoardStarsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
) {
  return ['boards', '/boards/:idBoard/boardStars', args] as const
}

export function getBoardsIdBoardBoardStarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardBoardStarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].boardStars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardBoardStarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBoardsIdBoardCalendarKeyGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardCalendarKeyGenerateMutationOptions<
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

export function getBoardsIdBoardCardsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards', args] as const
}

export function getBoardsIdBoardCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardCardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBoardsIdBoardCardsFilterQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards/:filter', args] as const
}

export function getBoardsIdBoardCardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardCardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].cards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardCardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardCardsIdCardQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards/:idCard', args] as const
}

export function getBoardsIdBoardCardsIdCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardCardsIdCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].cards[':idCard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardCardsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardCardsIdCardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardChecklistsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
) {
  return ['boards', '/boards/:idBoard/checklists', args] as const
}

export function getBoardsIdBoardChecklistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardChecklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].checklists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardChecklistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBoardsIdBoardChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardChecklistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardClosedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardDeltasQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
) {
  return ['boards', '/boards/:idBoard/deltas', args] as const
}

export function getBoardsIdBoardDeltasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].deltas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardDeltasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBoardsIdBoardDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardDescMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBoardsIdBoardEmailKeyGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardEmailKeyGenerateMutationOptions<
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

export function injectPutBoardsIdBoardIdOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardIdOrganizationMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesBlue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesBlueMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesGreen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesGreenMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesOrange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesOrangeMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesPurple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesPurpleMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesRed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesRedMutationOptions<
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

export function injectPutBoardsIdBoardLabelNamesYellow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardLabelNamesYellowMutationOptions<
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

export function getBoardsIdBoardLabelsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
) {
  return ['boards', '/boards/:idBoard/labels', args] as const
}

export function getBoardsIdBoardLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBoardsIdBoardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardLabelsIdLabelQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
) {
  return ['boards', '/boards/:idBoard/labels/:idLabel', args] as const
}

export function getBoardsIdBoardLabelsIdLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardLabelsIdLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].labels[':idLabel'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardLabelsIdLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardLabelsIdLabelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardListsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
) {
  return ['boards', '/boards/:idBoard/lists', args] as const
}

export function getBoardsIdBoardListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBoardsIdBoardLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardListsFilterQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/lists/:filter', args] as const
}

export function getBoardsIdBoardListsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardListsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].lists[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardListsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardListsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBoardsIdBoardMarkAsViewed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardMarkAsViewedMutationOptions<
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

export function getBoardsIdBoardMembersQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
) {
  return ['boards', '/boards/:idBoard/members', args] as const
}

export function getBoardsIdBoardMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardMembersFilterQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/members/:filter', args] as const
}

export function getBoardsIdBoardMembersFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembersFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].members[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembersFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMembersFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardMembersIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMembersIdMemberMutationOptions<
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

export function injectDeleteBoardsIdBoardMembersIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBoardsIdBoardMembersIdMemberMutationOptions<
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

export function getBoardsIdBoardMembersIdMemberCardsQueryKey(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
) {
  return ['boards', '/boards/:idBoard/members/:idMember/cards', args] as const
}

export function getBoardsIdBoardMembersIdMemberCardsQueryOptions<
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
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembersIdMemberCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].members[':idMember'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembersIdMemberCards<
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
  args: () => InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBoardsIdBoardMembersIdMemberCardsQueryKey>
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
      ...getBoardsIdBoardMembersIdMemberCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardMembersInvitedQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
) {
  return ['boards', '/boards/:idBoard/membersInvited', args] as const
}

export function getBoardsIdBoardMembersInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembersInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].membersInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembersInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMembersInvitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardMembersInvitedFieldQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/membersInvited/:field', args] as const
}

export function getBoardsIdBoardMembersInvitedFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembersInvitedFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].membersInvited[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembersInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMembersInvitedFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardMembershipsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
) {
  return ['boards', '/boards/:idBoard/memberships', args] as const
}

export function getBoardsIdBoardMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardMembershipsIdMembershipQueryKey(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
) {
  return ['boards', '/boards/:idBoard/memberships/:idMembership', args] as const
}

export function getBoardsIdBoardMembershipsIdMembershipQueryOptions<
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
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMembershipsIdMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].memberships[':idMembership'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMembershipsIdMembership<
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
  args: () => InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBoardsIdBoardMembershipsIdMembershipQueryKey>
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
      ...getBoardsIdBoardMembershipsIdMembershipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardMembershipsIdMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMembershipsIdMembershipMutationOptions<
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

export function getBoardsIdBoardMyPrefsQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
) {
  return ['boards', '/boards/:idBoard/myPrefs', args] as const
}

export function getBoardsIdBoardMyPrefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardMyPrefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].myPrefs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardMyPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardMyPrefsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardMyPrefsEmailPosition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsEmailPositionMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsIdEmailList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsIdEmailListMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsShowListGuide<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsShowListGuideMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsShowSidebar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsShowSidebarActivity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarActivityMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsShowSidebarBoardActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsMutationOptions<
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

export function injectPutBoardsIdBoardMyPrefsShowSidebarMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardMyPrefsShowSidebarMembersMutationOptions<
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

export function injectPutBoardsIdBoardName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardOrganizationQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
) {
  return ['boards', '/boards/:idBoard/organization', args] as const
}

export function getBoardsIdBoardOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBoardsIdBoardOrganizationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBoardsIdBoardOrganizationFieldQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/organization/:field', args] as const
}

export function getBoardsIdBoardOrganizationFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardOrganizationFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'].organization[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardOrganizationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.boards)[':idBoard']['organization'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBoardsIdBoardOrganizationFieldQueryKey>
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
      ...getBoardsIdBoardOrganizationFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBoardsIdBoardPowerUps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBoardsIdBoardPowerUpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteBoardsIdBoardPowerUpsPowerUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBoardsIdBoardPowerUpsPowerUpMutationOptions<
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

export function injectPutBoardsIdBoardPrefsBackground<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsBackgroundMutationOptions<
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

export function injectPutBoardsIdBoardPrefsCalendarFeedEnabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsCalendarFeedEnabledMutationOptions<
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

export function injectPutBoardsIdBoardPrefsCardAging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsCardAgingMutationOptions<
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

export function injectPutBoardsIdBoardPrefsCardCovers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsCardCoversMutationOptions<
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

export function injectPutBoardsIdBoardPrefsComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsCommentsMutationOptions<
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

export function injectPutBoardsIdBoardPrefsInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsInvitationsMutationOptions<
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

export function injectPutBoardsIdBoardPrefsPermissionLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsPermissionLevelMutationOptions<
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

export function injectPutBoardsIdBoardPrefsSelfJoin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsSelfJoinMutationOptions<
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

export function injectPutBoardsIdBoardPrefsVoting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardPrefsVotingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutBoardsIdBoardSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBoardsIdBoardSubscribedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBoardsIdBoardFieldQueryKey(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/:field', args] as const
}

export function getBoardsIdBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBoardsIdBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':idBoard'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBoardsIdBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBoardsIdBoardFieldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
        TError,
        InferRequestType<typeof client.cards.$post>,
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
    const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
) {
  return ['cards', '/cards/:idCard', args] as const
}

export function getCardsIdCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardQueryKey>
  >({
    queryKey: getCardsIdCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCardsIdCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutCardsIdCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':idCard']['$put']>,
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
    const mutationDefaults = getPutCardsIdCardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':idCard']['$delete']>,
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
    const mutationDefaults = getDeleteCardsIdCardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardActionsQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
) {
  return ['cards', '/cards/:idCard/actions', args] as const
}

export function getCardsIdCardActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCardsIdCardActionsComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardActionsCommentsMutationOptions<
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

export function injectPutCardsIdCardActionsIdActionComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardActionsIdActionCommentsMutationOptions<
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

export function injectDeleteCardsIdCardActionsIdActionComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardActionsIdActionCommentsMutationOptions<
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

export function getCardsIdCardAttachmentsQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
) {
  return ['cards', '/cards/:idCard/attachments', args] as const
}

export function getCardsIdCardAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardAttachmentsIdAttachmentQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
) {
  return ['cards', '/cards/:idCard/attachments/:idAttachment', args] as const
}

export function getCardsIdCardAttachmentsIdAttachmentQueryOptions<
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
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardAttachmentsIdAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].attachments[':idAttachment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardAttachmentsIdAttachment<
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
  args: () => InferRequestType<
    (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardAttachmentsIdAttachmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardAttachmentsIdAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardAttachmentsIdAttachmentMutationOptions<
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

export function getCardsIdCardBoardQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
) {
  return ['cards', '/cards/:idCard/board', args] as const
}

export function getCardsIdCardBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardBoardQueryKey>
  >({
    queryKey: getCardsIdCardBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCardBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardBoardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCardsIdCardBoardFieldQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/board/:field', args] as const
}

export function getCardsIdCardBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCardsIdCardCheckItemStatesQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
) {
  return ['cards', '/cards/:idCard/checkItemStates', args] as const
}

export function getCardsIdCardCheckItemStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardCheckItemStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].checkItemStates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardCheckItemStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardCheckItemStatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemMutationOptions<
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

export function injectPostCardsIdCardChecklistIdChecklistCheckItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardChecklistIdChecklistCheckItemMutationOptions<
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

export function injectDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
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

export function injectPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardMutationOptions<
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

export function injectPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameMutationOptions<
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

export function injectPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosMutationOptions<
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

export function injectPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateMutationOptions<
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

export function getCardsIdCardChecklistsQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
) {
  return ['cards', '/cards/:idCard/checklists', args] as const
}

export function getCardsIdCardChecklistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardChecklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].checklists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardChecklistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardChecklistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardChecklistsIdChecklist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>,
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
    const mutationDefaults = getDeleteCardsIdCardChecklistsIdChecklistMutationOptions<
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

export function injectPutCardsIdCardClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardClosedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardDescMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardDue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardDueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardIdAttachmentCover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardIdAttachmentCoverMutationOptions<
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

export function injectPutCardsIdCardIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardIdBoardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardIdLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardIdLabelsIdLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardIdLabelsIdLabelMutationOptions<
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

export function injectPutCardsIdCardIdList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardIdListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardIdMembersIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardIdMembersIdMemberMutationOptions<
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

export function injectPutCardsIdCardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardLabelsColor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardLabelsColorMutationOptions<
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

export function getCardsIdCardListQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
) {
  return ['cards', '/cards/:idCard/list', args] as const
}

export function getCardsIdCardListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCardListQueryKey>
  >({
    queryKey: getCardsIdCardListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCardsIdCardList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCardListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCardsIdCardListFieldQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/list/:field', args] as const
}

export function getCardsIdCardListFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardListFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].list[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardListFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardMarkAssociatedNotificationsRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardMarkAssociatedNotificationsReadMutationOptions<
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

export function getCardsIdCardMembersQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
) {
  return ['cards', '/cards/:idCard/members', args] as const
}

export function getCardsIdCardMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCardsIdCardMembersVotedQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
) {
  return ['cards', '/cards/:idCard/membersVoted', args] as const
}

export function getCardsIdCardMembersVotedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardMembersVotedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].membersVoted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardMembersVoted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsIdCardMembersVotedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCardsIdCardMembersVoted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardMembersVotedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCardsIdCardMembersVotedIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardMembersVotedIdMemberMutationOptions<
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

export function injectPutCardsIdCardName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardPosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardStickersQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
) {
  return ['cards', '/cards/:idCard/stickers', args] as const
}

export function getCardsIdCardStickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardStickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].stickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardStickersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCardsIdCardStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsIdCardStickersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardStickersIdStickerQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
) {
  return ['cards', '/cards/:idCard/stickers/:idSticker', args] as const
}

export function getCardsIdCardStickersIdStickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardStickersIdStickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'].stickers[':idSticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCardsIdCardStickersIdStickerQueryKey>
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
      ...getCardsIdCardStickersIdStickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCardsIdCardStickersIdSticker<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardStickersIdStickerMutationOptions<
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

export function injectDeleteCardsIdCardStickersIdSticker<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsIdCardStickersIdStickerMutationOptions<
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

export function injectPutCardsIdCardSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsIdCardSubscribedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsIdCardFieldQueryKey(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/:field', args] as const
}

export function getCardsIdCardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsIdCardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':idCard'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsIdCardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsIdCardFieldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.checklists.$post>,
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
    const mutationDefaults = getPostChecklistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist', args] as const
}

export function getChecklistsIdChecklistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutChecklistsIdChecklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecklistsIdChecklistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteChecklistsIdChecklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecklistsIdChecklistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistBoardQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/board', args] as const
}

export function getChecklistsIdChecklistBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistBoardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistBoardFieldQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/board/:field', args] as const
}

export function getChecklistsIdChecklistBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.checklists)[':idChecklist']['board'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getChecklistsIdChecklistBoardFieldQueryKey>
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
      ...getChecklistsIdChecklistBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistCardsQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/cards', args] as const
}

export function getChecklistsIdChecklistCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistCardsFilterQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/cards/:filter', args] as const
}

export function getChecklistsIdChecklistCardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistCardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].cards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistCardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistCheckItemsQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems', args] as const
}

export function getChecklistsIdChecklistCheckItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistCheckItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].checkItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistCheckItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistCheckItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostChecklistsIdChecklistCheckItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecklistsIdChecklistCheckItemsMutationOptions<
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

export function getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems/:idCheckItem', args] as const
}

export function getChecklistsIdChecklistCheckItemsIdCheckItemQueryOptions<
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
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistCheckItemsIdCheckItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistCheckItemsIdCheckItem<
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
  args: () => InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistCheckItemsIdCheckItemQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteChecklistsIdChecklistCheckItemsIdCheckItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecklistsIdChecklistCheckItemsIdCheckItemMutationOptions<
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

export function injectPutChecklistsIdChecklistIdCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecklistsIdChecklistIdCardMutationOptions<
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

export function injectPutChecklistsIdChecklistName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecklistsIdChecklistNameMutationOptions<
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

export function injectPutChecklistsIdChecklistPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecklistsIdChecklistPosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChecklistsIdChecklistFieldQueryKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/:field', args] as const
}

export function getChecklistsIdChecklistFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChecklistsIdChecklistFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':idChecklist'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecklistsIdChecklistField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getChecklistsIdChecklistFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
        TError,
        InferRequestType<typeof client.labels.$post>,
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
    const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLabelsIdLabelQueryKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
) {
  return ['labels', '/labels/:idLabel', args] as const
}

export function getLabelsIdLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdLabelQueryKey>
  >({
    queryKey: getLabelsIdLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':idLabel'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLabelsIdLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIdLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsIdLabelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':idLabel']['$put']>,
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
    const mutationDefaults = getPutLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':idLabel']['$delete']>,
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
    const mutationDefaults = getDeleteLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLabelsIdLabelBoardQueryKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
) {
  return ['labels', '/labels/:idLabel/board', args] as const
}

export function getLabelsIdLabelBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLabelsIdLabelBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':idLabel'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLabelsIdLabelBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsIdLabelBoardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLabelsIdLabelBoardFieldQueryKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
) {
  return ['labels', '/labels/:idLabel/board/:field', args] as const
}

export function getLabelsIdLabelBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLabelsIdLabelBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':idLabel'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLabelsIdLabelBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLabelsIdLabelBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLabelsIdLabelColor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLabelsIdLabelColorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutLabelsIdLabelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLabelsIdLabelNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
        TError,
        InferRequestType<typeof client.lists.$post>,
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
    const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListsIdListQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
) {
  return ['lists', '/lists/:idList', args] as const
}

export function getListsIdListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListQueryKey>
  >({
    queryKey: getListsIdListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListsIdList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutListsIdList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':idList']['$put']>,
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
    const mutationDefaults = getPutListsIdListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListsIdListActionsQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
) {
  return ['lists', '/lists/:idList/actions', args] as const
}

export function getListsIdListActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListsIdListActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdListActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostListsIdListArchiveAllCards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListsIdListArchiveAllCardsMutationOptions<
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

export function getListsIdListBoardQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
) {
  return ['lists', '/lists/:idList/board', args] as const
}

export function getListsIdListBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListBoardQueryKey>
  >({
    queryKey: getListsIdListBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdListBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdListBoardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getListsIdListBoardFieldQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
) {
  return ['lists', '/lists/:idList/board/:field', args] as const
}

export function getListsIdListBoardFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListsIdListBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListBoardField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getListsIdListBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getListsIdListCardsQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
) {
  return ['lists', '/lists/:idList/cards', args] as const
}

export function getListsIdListCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdListCardsQueryKey>
  >({
    queryKey: getListsIdListCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdListCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdListCardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostListsIdListCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListsIdListCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListsIdListCardsFilterQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
) {
  return ['lists', '/lists/:idList/cards/:filter', args] as const
}

export function getListsIdListCardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListsIdListCardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'].cards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getListsIdListCardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutListsIdListClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListsIdListClosedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutListsIdListIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListsIdListIdBoardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostListsIdListMoveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListsIdListMoveAllCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutListsIdListName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListsIdListNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutListsIdListPos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListsIdListPosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutListsIdListSubscribed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListsIdListSubscribedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListsIdListFieldQueryKey(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
) {
  return ['lists', '/lists/:idList/:field', args] as const
}

export function getListsIdListFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getListsIdListFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':idList'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsIdListField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdListFieldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMembersIdMemberQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
) {
  return ['members', '/members/:idMember', args] as const
}

export function getMembersIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdMemberQueryKey>
  >({
    queryKey: getMembersIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMembersIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMembersIdMemberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':idMember']['$put']>,
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
    const mutationDefaults = getPutMembersIdMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMembersIdMemberActionsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
) {
  return ['members', '/members/:idMember/actions', args] as const
}

export function getMembersIdMemberActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberAvatarSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberAvatarSourceMutationOptions<
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

export function injectPutMembersIdMemberBio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberBioMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMembersIdMemberBoardBackgroundsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
) {
  return ['members', '/members/:idMember/boardBackgrounds', args] as const
}

export function getMembersIdMemberBoardBackgroundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardBackgroundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardBackgroundsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberBoardBackgrounds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberBoardBackgroundsMutationOptions<
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

export function getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
) {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', args] as const
}

export function getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardBackgroundsIdBoardBackground<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardBackgroundsIdBoardBackgroundQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberBoardBackgroundsIdBoardBackground<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function injectDeleteMembersIdMemberBoardBackgroundsIdBoardBackground<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getMembersIdMemberBoardStarsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
) {
  return ['members', '/members/:idMember/boardStars', args] as const
}

export function getMembersIdMemberBoardStarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardStarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardStars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardStarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberBoardStars<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberBoardStarsMutationOptions<
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

export function getMembersIdMemberBoardStarsIdBoardStarQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
) {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', args] as const
}

export function getMembersIdMemberBoardStarsIdBoardStarQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardStarsIdBoardStarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardStars[':idBoardStar'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardStarsIdBoardStar<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMembersIdMemberBoardStarsIdBoardStarQueryKey>
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
      ...getMembersIdMemberBoardStarsIdBoardStarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberBoardStarsIdBoardStar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarMutationOptions<
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

export function injectDeleteMembersIdMemberBoardStarsIdBoardStar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMembersIdMemberBoardStarsIdBoardStarMutationOptions<
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

export function injectPutMembersIdMemberBoardStarsIdBoardStarIdBoard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarIdBoardMutationOptions<
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

export function injectPutMembersIdMemberBoardStarsIdBoardStarPos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberBoardStarsIdBoardStarPosMutationOptions<
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

export function getMembersIdMemberBoardsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
) {
  return ['members', '/members/:idMember/boards', args] as const
}

export function getMembersIdMemberBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberBoardsFilterQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/boards/:filter', args] as const
}

export function getMembersIdMemberBoardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberBoardsInvitedQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
) {
  return ['members', '/members/:idMember/boardsInvited', args] as const
}

export function getMembersIdMemberBoardsInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardsInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardsInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardsInvitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberBoardsInvitedFieldQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
) {
  return ['members', '/members/:idMember/boardsInvited/:field', args] as const
}

export function getMembersIdMemberBoardsInvitedFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberBoardsInvitedFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].boardsInvited[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberBoardsInvitedField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['boardsInvited'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberBoardsInvitedFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberCardsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
) {
  return ['members', '/members/:idMember/cards', args] as const
}

export function getMembersIdMemberCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberCardsFilterQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/cards/:filter', args] as const
}

export function getMembersIdMemberCardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].cards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberCustomBoardBackgroundsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
) {
  return ['members', '/members/:idMember/customBoardBackgrounds', args] as const
}

export function getMembersIdMemberCustomBoardBackgroundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomBoardBackgroundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomBoardBackgroundsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberCustomBoardBackgrounds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberCustomBoardBackgroundsMutationOptions<
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

export function getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
) {
  return ['members', '/members/:idMember/customBoardBackgrounds/:idBoardBackground', args] as const
}

export function getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function injectDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundMutationOptions<
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

export function getMembersIdMemberCustomEmojiQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
) {
  return ['members', '/members/:idMember/customEmoji', args] as const
}

export function getMembersIdMemberCustomEmojiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomEmojiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customEmoji.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomEmojiQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberCustomEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberCustomEmojiMutationOptions<
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

export function getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
) {
  return ['members', '/members/:idMember/customEmoji/:idCustomEmoji', args] as const
}

export function getMembersIdMemberCustomEmojiIdCustomEmojiQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomEmojiIdCustomEmojiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomEmojiIdCustomEmoji<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomEmojiIdCustomEmojiQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberCustomStickersQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
) {
  return ['members', '/members/:idMember/customStickers', args] as const
}

export function getMembersIdMemberCustomStickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomStickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customStickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomStickersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberCustomStickers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberCustomStickersMutationOptions<
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

export function getMembersIdMemberCustomStickersIdCustomStickerQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
) {
  return ['members', '/members/:idMember/customStickers/:idCustomSticker', args] as const
}

export function getMembersIdMemberCustomStickersIdCustomStickerQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberCustomStickersIdCustomStickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].customStickers[':idCustomSticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberCustomStickersIdCustomSticker<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberCustomStickersIdCustomStickerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMembersIdMemberCustomStickersIdCustomSticker<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMembersIdMemberCustomStickersIdCustomStickerMutationOptions<
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

export function getMembersIdMemberDeltasQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
) {
  return ['members', '/members/:idMember/deltas', args] as const
}

export function getMembersIdMemberDeltasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].deltas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberDeltasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberInitials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberInitialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMembersIdMemberNotificationsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
) {
  return ['members', '/members/:idMember/notifications', args] as const
}

export function getMembersIdMemberNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberNotificationsFilterQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/notifications/:filter', args] as const
}

export function getMembersIdMemberNotificationsFilterQueryOptions<
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
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberNotificationsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].notifications[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberNotificationsFilter<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['notifications'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberNotificationsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberOneTimeMessagesDismissed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>,
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
    const mutationDefaults = getPostMembersIdMemberOneTimeMessagesDismissedMutationOptions<
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

export function getMembersIdMemberOrganizationsQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
) {
  return ['members', '/members/:idMember/organizations', args] as const
}

export function getMembersIdMemberOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberOrganizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberOrganizationsFilterQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/organizations/:filter', args] as const
}

export function getMembersIdMemberOrganizationsFilterQueryOptions<
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
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberOrganizationsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].organizations[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberOrganizationsFilter<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['organizations'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberOrganizationsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberOrganizationsInvitedQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
) {
  return ['members', '/members/:idMember/organizationsInvited', args] as const
}

export function getMembersIdMemberOrganizationsInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberOrganizationsInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].organizationsInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberOrganizationsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMembersIdMemberOrganizationsInvitedQueryKey>
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
      ...getMembersIdMemberOrganizationsInvitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMembersIdMemberOrganizationsInvitedFieldQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
) {
  return ['members', '/members/:idMember/organizationsInvited/:field', args] as const
}

export function getMembersIdMemberOrganizationsInvitedFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberOrganizationsInvitedFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].organizationsInvited[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberOrganizationsInvitedField<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberOrganizationsInvitedFieldQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberPrefsColorBlind<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberPrefsColorBlindMutationOptions<
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

export function injectPutMembersIdMemberPrefsLocale<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberPrefsLocaleMutationOptions<
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

export function injectPutMembersIdMemberPrefsMinutesBetweenSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberPrefsMinutesBetweenSummariesMutationOptions<
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

export function getMembersIdMemberSavedSearchesQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
) {
  return ['members', '/members/:idMember/savedSearches', args] as const
}

export function getMembersIdMemberSavedSearchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberSavedSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].savedSearches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberSavedSearchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMembersIdMemberSavedSearches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMembersIdMemberSavedSearchesMutationOptions<
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

export function getMembersIdMemberSavedSearchesIdSavedSearchQueryKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
) {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', args] as const
}

export function getMembersIdMemberSavedSearchesIdSavedSearchQueryOptions<
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
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberSavedSearchesIdSavedSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].savedSearches[':idSavedSearch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberSavedSearchesIdSavedSearch<
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
  args: () => InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberSavedSearchesIdSavedSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberSavedSearchesIdSavedSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
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

export function injectDeleteMembersIdMemberSavedSearchesIdSavedSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMembersIdMemberSavedSearchesIdSavedSearchMutationOptions<
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

export function injectPutMembersIdMemberSavedSearchesIdSavedSearchName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchNameMutationOptions<
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

export function injectPutMembersIdMemberSavedSearchesIdSavedSearchPos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchPosMutationOptions<
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

export function injectPutMembersIdMemberSavedSearchesIdSavedSearchQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberSavedSearchesIdSavedSearchQueryMutationOptions<
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

export function getMembersIdMemberTokensQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
) {
  return ['members', '/members/:idMember/tokens', args] as const
}

export function getMembersIdMemberTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMembersIdMemberUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMembersIdMemberUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMembersIdMemberFieldQueryKey(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
) {
  return ['members', '/members/:idMember/:field', args] as const
}

export function getMembersIdMemberFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMembersIdMemberFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':idMember'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMembersIdMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMembersIdMemberFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostNotificationsAllRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.all.read.$post>,
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
    const mutationDefaults = getPostNotificationsAllReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification', args] as const
}

export function getNotificationsIdNotificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutNotificationsIdNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationsIdNotificationMutationOptions<
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

export function getNotificationsIdNotificationBoardQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/board', args] as const
}

export function getNotificationsIdNotificationBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationBoardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationBoardFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/board/:field', args] as const
}

export function getNotificationsIdNotificationBoardFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationBoardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].board[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationBoardField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationBoardFieldQueryKey>
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
      ...getNotificationsIdNotificationBoardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationCardQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/card', args] as const
}

export function getNotificationsIdNotificationCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].card.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationCardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationCardFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/card/:field', args] as const
}

export function getNotificationsIdNotificationCardFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationCardFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].card[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationCardField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationCardFieldQueryKey>
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
      ...getNotificationsIdNotificationCardFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationDisplayQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/display', args] as const
}

export function getNotificationsIdNotificationDisplayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationDisplayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].display.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationDisplay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationDisplayQueryKey>
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
      ...getNotificationsIdNotificationDisplayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationEntitiesQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/entities', args] as const
}

export function getNotificationsIdNotificationEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['entities']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationEntitiesQueryKey>
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
      ...getNotificationsIdNotificationEntitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationListQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/list', args] as const
}

export function getNotificationsIdNotificationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationListFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/list/:field', args] as const
}

export function getNotificationsIdNotificationListFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationListFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].list[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationListField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationListFieldQueryKey>
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
      ...getNotificationsIdNotificationListFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationMemberQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/member', args] as const
}

export function getNotificationsIdNotificationMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationMemberQueryKey>
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
      ...getNotificationsIdNotificationMemberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationMemberFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/member/:field', args] as const
}

export function getNotificationsIdNotificationMemberFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationMemberFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].member[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationMemberField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationMemberFieldQueryKey>
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
      ...getNotificationsIdNotificationMemberFieldQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationMemberCreatorQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/memberCreator', args] as const
}

export function getNotificationsIdNotificationMemberCreatorQueryOptions<
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
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationMemberCreatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].memberCreator.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationMemberCreator<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationMemberCreatorQueryKey>
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
      ...getNotificationsIdNotificationMemberCreatorQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationMemberCreatorFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/memberCreator/:field', args] as const
}

export function getNotificationsIdNotificationMemberCreatorFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationMemberCreatorFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].memberCreator[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationMemberCreatorField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationMemberCreatorFieldQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationOrganizationQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/organization', args] as const
}

export function getNotificationsIdNotificationOrganizationQueryOptions<
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
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationOrganization<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['organization']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationOrganizationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsIdNotificationOrganizationFieldQueryKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/organization/:field', args] as const
}

export function getNotificationsIdNotificationOrganizationFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationOrganizationFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'].organization[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationOrganizationField<
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
  args: () => InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getNotificationsIdNotificationOrganizationFieldQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutNotificationsIdNotificationUnread<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationsIdNotificationUnreadMutationOptions<
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

export function getNotificationsIdNotificationFieldQueryKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/:field', args] as const
}

export function getNotificationsIdNotificationFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getNotificationsIdNotificationFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':idNotification'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsIdNotificationField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getNotificationsIdNotificationFieldQueryKey>
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
      ...getNotificationsIdNotificationFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organizations.$post>,
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
    const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg', args] as const
}

export function getOrganizationsIdOrgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdOrgQueryKey>
  >({
    queryKey: getOrganizationsIdOrgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsIdOrgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationsIdOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgActionsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/actions', args] as const
}

export function getOrganizationsIdOrgActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgBoardsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/boards', args] as const
}

export function getOrganizationsIdOrgBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].boards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgBoardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgBoardsFilterQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/boards/:filter', args] as const
}

export function getOrganizationsIdOrgBoardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgBoardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].boards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgBoardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':idOrg']['boards'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationsIdOrgBoardsFilterQueryKey>
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
      ...getOrganizationsIdOrgBoardsFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgDeltasQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/deltas', args] as const
}

export function getOrganizationsIdOrgDeltasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].deltas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgDeltas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgDeltasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgDesc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgDescMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgDisplayName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgDisplayNameMutationOptions<
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

export function injectPostOrganizationsIdOrgLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsIdOrgLogoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteOrganizationsIdOrgLogo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgLogoMutationOptions<
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

export function getOrganizationsIdOrgMembersQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/members', args] as const
}

export function getOrganizationsIdOrgMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgMembersMutationOptions<
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

export function getOrganizationsIdOrgMembersFilterQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/members/:filter', args] as const
}

export function getOrganizationsIdOrgMembersFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembersFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].members[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembersFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationsIdOrgMembersFilterQueryKey>
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
      ...getOrganizationsIdOrgMembersFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgMembersIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgMembersIdMemberMutationOptions<
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

export function injectDeleteOrganizationsIdOrgMembersIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgMembersIdMemberMutationOptions<
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

export function injectDeleteOrganizationsIdOrgMembersIdMemberAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgMembersIdMemberAllMutationOptions<
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

export function getOrganizationsIdOrgMembersIdMemberCardsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/members/:idMember/cards', args] as const
}

export function getOrganizationsIdOrgMembersIdMemberCardsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembersIdMemberCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].members[':idMember'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembersIdMemberCards<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgMembersIdMemberCardsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgMembersIdMemberDeactivated<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgMembersIdMemberDeactivatedMutationOptions<
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

export function getOrganizationsIdOrgMembersInvitedQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited', args] as const
}

export function getOrganizationsIdOrgMembersInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembersInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].membersInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembersInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgMembersInvitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgMembersInvitedFieldQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited/:field', args] as const
}

export function getOrganizationsIdOrgMembersInvitedFieldQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembersInvitedFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].membersInvited[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembersInvitedField<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationsIdOrgMembersInvitedFieldQueryKey>
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
      ...getOrganizationsIdOrgMembersInvitedFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgMembershipsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/memberships', args] as const
}

export function getOrganizationsIdOrgMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationsIdOrgMembershipsIdMembershipQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/memberships/:idMembership', args] as const
}

export function getOrganizationsIdOrgMembershipsIdMembershipQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgMembershipsIdMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'].memberships[':idMembership'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgMembershipsIdMembership<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgMembershipsIdMembershipQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgMembershipsIdMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgMembershipsIdMembershipMutationOptions<
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

export function injectPutOrganizationsIdOrgName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutOrganizationsIdOrgPrefsAssociatedDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
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

export function injectDeleteOrganizationsIdOrgPrefsAssociatedDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgPrefsAssociatedDomainMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsExternalMembersDisabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsExternalMembersDisabledMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsGoogleAppsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsGoogleAppsVersionMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsOrgInviteRestrict<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
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

export function injectDeleteOrganizationsIdOrgPrefsOrgInviteRestrict<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictMutationOptions<
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

export function injectPutOrganizationsIdOrgPrefsPermissionLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgPrefsPermissionLevelMutationOptions<
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

export function injectPutOrganizationsIdOrgWebsite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsIdOrgWebsiteMutationOptions<
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

export function getOrganizationsIdOrgFieldQueryKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/:field', args] as const
}

export function getOrganizationsIdOrgFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsIdOrgFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':idOrg'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationsIdOrgField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOrganizationsIdOrgFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchMembersQueryKey(
  args: InferRequestType<typeof client.search.members.$get>,
) {
  return ['search', '/search/members', args] as const
}

export function getSearchMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMembersQueryKey>
  >({
    queryKey: getSearchMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sessions.$post>,
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
    const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSessionsSocketQueryKey(
  args: InferRequestType<typeof client.sessions.socket.$get>,
) {
  return ['sessions', '/sessions/socket', args] as const
}

export function getSessionsSocketQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sessions.socket.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSocketQueryKey>
  >({
    queryKey: getSessionsSocketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions.socket.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSessionsSocket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sessions.socket.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsSocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionsSocketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSessionsIdSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSessionsIdSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutSessionsIdSessionStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSessionsIdSessionStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTokensTokenQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
) {
  return ['tokens', '/tokens/:token', args] as const
}

export function getTokensTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenQueryKey>
  >({
    queryKey: getTokensTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':token']['$delete']>,
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
    const mutationDefaults = getDeleteTokensTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTokensTokenMemberQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
) {
  return ['tokens', '/tokens/:token/member', args] as const
}

export function getTokensTokenMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensTokenMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensTokenMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensTokenMemberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTokensTokenMemberFieldQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
) {
  return ['tokens', '/tokens/:token/member/:field', args] as const
}

export function getTokensTokenMemberFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensTokenMemberFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].member[':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensTokenMemberField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTokensTokenMemberFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTokensTokenWebhooksQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks', args] as const
}

export function getTokensTokenWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensTokenWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensTokenWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensTokenWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTokensTokenWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTokensTokenWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTokensTokenWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokensTokenWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTokensTokenWebhooksIdWebhookQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', args] as const
}

export function getTokensTokenWebhooksIdWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensTokenWebhooksIdWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].webhooks[':idWebhook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensTokenWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
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
      ...getTokensTokenWebhooksIdWebhookQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteTokensTokenWebhooksIdWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTokensTokenWebhooksIdWebhookMutationOptions<
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

export function getTokensTokenFieldQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
) {
  return ['tokens', '/tokens/:token/:field', args] as const
}

export function getTokensTokenFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensTokenFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensTokenField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensTokenFieldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTypesIdQueryKey(args: InferRequestType<(typeof client.types)[':id']['$get']>) {
  return ['types', '/types/:id', args] as const
}

export function getTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.types)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTypesIdQueryKey>
  >({
    queryKey: getTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.types[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTypesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.types)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function injectPutWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.index.$put>,
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
    const mutationDefaults = getPutWebhooksIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksIdWebhookQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
) {
  return ['webhooks', '/webhooks/:idWebhook', args] as const
}

export function getWebhooksIdWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookQueryKey>
  >({
    queryKey: getWebhooksIdWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':idWebhook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksIdWebhookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutWebhooksIdWebhookActive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdWebhookActiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutWebhooksIdWebhookCallbackURL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdWebhookCallbackURLMutationOptions<
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

export function injectPutWebhooksIdWebhookDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdWebhookDescriptionMutationOptions<
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

export function injectPutWebhooksIdWebhookIdModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksIdWebhookIdModelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksIdWebhookFieldQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
) {
  return ['webhooks', '/webhooks/:idWebhook/:field', args] as const
}

export function getWebhooksIdWebhookFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhooksIdWebhookFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':idWebhook'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksIdWebhookField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWebhooksIdWebhookFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
