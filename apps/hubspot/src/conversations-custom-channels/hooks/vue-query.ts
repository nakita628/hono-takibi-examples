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

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getConversationsCustomChannels202609QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>
  >,
) {
  return ['conversations', '/conversations/custom-channels/2026-09', toValue(args)] as const
}

export function getConversationsCustomChannels202609QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsCustomChannels202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsCustomChannels202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversationsCustomChannels202609QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsCustomChannels202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations['custom-channels']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConversationsCustomChannels202609<
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
                  ReturnType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsCustomChannels202609MutationOptions<
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

export function getConversationsCustomChannels202609ChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId',
    toValue(args),
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsCustomChannels202609ChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsCustomChannels202609ChannelId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsCustomChannels202609ChannelIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsCustomChannels202609ChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteConversationsCustomChannels202609ChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsCustomChannels202609ChannelIdMutationOptions<
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

export function usePatchConversationsCustomChannels202609ChannelId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchConversationsCustomChannels202609ChannelIdMutationOptions<
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

export function usePatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountToken<
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
    getPatchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenMutationOptions<
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

export function getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts',
    toValue(args),
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useConversationsCustomChannels202609ChannelIdChannelAccounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsCustomChannels202609ChannelIdChannelAccountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostConversationsCustomChannels202609ChannelIdChannelAccounts<
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
    getPostConversationsCustomChannels202609ChannelIdChannelAccountsMutationOptions<
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

export function getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/channel-accounts/:channelAccountId',
    toValue(args),
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
          ':channelAccountId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
            ':channelAccountId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId<
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
    getPatchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdMutationOptions<
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

export function usePostConversationsCustomChannels202609ChannelIdMessages<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsCustomChannels202609ChannelIdMessagesMutationOptions<
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

export function getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
    >
  >,
) {
  return [
    'conversations',
    '/conversations/custom-channels/2026-09/:channelId/messages/:messageId',
    toValue(args),
  ] as const
}

export function getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations['custom-channels']['2026-09'][':channelId'].messages[
          ':messageId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConversationsCustomChannels202609ChannelIdMessagesMessageId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
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
                    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getConversationsCustomChannels202609ChannelIdMessagesMessageIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations['custom-channels']['2026-09'][':channelId'].messages[
            ':messageId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchConversationsCustomChannels202609ChannelIdMessagesMessageId<
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
    getPatchConversationsCustomChannels202609ChannelIdMessagesMessageIdMutationOptions<
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
