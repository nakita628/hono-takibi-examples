import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getConversationsCustomChannels202609QueryKey(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
) {
  return ['conversations', '/conversations/custom-channels/2026-09', args] as const
}

export function getConversationsCustomChannels202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609QueryKey>
  >({
    queryKey: getConversationsCustomChannels202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsCustomChannels202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCustomChannels202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsCustomChannels202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostConversationsCustomChannels202609MutationKey() {
  return ['conversations', '/conversations/custom-channels/2026-09', 'POST'] as const
}

export function getPostConversationsCustomChannels202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCustomChannels202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>,
    ) {
      return parseResponse(client.conversations['custom-channels']['2026-09'].$post(args, options))
    },
  })
}

export function createPostConversationsCustomChannels202609<
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
                ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsCustomChannels202609MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsCustomChannels202609ChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
) {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', args] as const
}

export function getConversationsCustomChannels202609ChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdQueryKey>
  >({
    queryKey: getConversationsCustomChannels202609ChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsCustomChannels202609ChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCustomChannels202609ChannelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsCustomChannels202609ChannelIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteConversationsCustomChannels202609ChannelIdMutationKey() {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', 'DELETE'] as const
}

export function getDeleteConversationsCustomChannels202609ChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsCustomChannels202609ChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteConversationsCustomChannels202609ChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsCustomChannels202609ChannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchConversationsCustomChannels202609ChannelIdMutationKey() {
  return ['conversations', '/conversations/custom-channels/2026-09/:channelId', 'PATCH'] as const
}

export function getPatchConversationsCustomChannels202609ChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchConversationsCustomChannels202609ChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].$patch(args, options),
      )
    },
  })
}

export function createPatchConversationsCustomChannels202609ChannelId<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchConversationsCustomChannels202609ChannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenMutationKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-account-staging-tokens/:accountToken',
    'PATCH',
  ] as const
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'][
          'channel-account-staging-tokens'
        ][':accountToken'].$patch(args, options),
      )
    },
  })
}

export function createPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountToken<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts',
    args,
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey>
  >({
    queryKey: getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createConversationsCustomChannels202609ChannelIdChannelAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsCustomChannels202609ChannelIdChannelAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostConversationsCustomChannels202609ChannelIdChannelAccountsMutationKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts',
    'POST',
  ] as const
}

export function getPostConversationsCustomChannels202609ChannelIdChannelAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCustomChannels202609ChannelIdChannelAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostConversationsCustomChannels202609ChannelIdChannelAccounts<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostConversationsCustomChannels202609ChannelIdChannelAccountsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId',
    args,
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey
    >
  >({
    queryKey:
      getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
          ':channelAccountId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdMutationKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId',
    'PATCH',
  ] as const
}

export function getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
          ':channelAccountId'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConversationsCustomChannels202609ChannelIdMessagesMutationKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages',
    'POST',
  ] as const
}

export function getPostConversationsCustomChannels202609ChannelIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCustomChannels202609ChannelIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].messages.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostConversationsCustomChannels202609ChannelIdMessages<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostConversationsCustomChannels202609ChannelIdMessagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId',
    args,
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey>
  >({
    queryKey: getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].messages[
          ':messageId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversationsCustomChannels202609ChannelIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdMutationKey() {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId',
    'PATCH',
  ] as const
}

export function getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
      >,
    ) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].messages[
          ':messageId'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchConversationsCustomChannels202609ChannelIdMessagesMessageId<
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
                  (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
