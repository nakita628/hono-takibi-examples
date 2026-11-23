import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getPlatformKey() {
  return ['platform'] as const
}

export function getPublicKey() {
  return ['public'] as const
}

export function getSurveyKey() {
  return ['survey'] as const
}

export function getPostPlatformApiV1AccountsMutationKey() {
  return ['platform', '/platform/api/v1/accounts', 'POST'] as const
}

export function getPostPlatformApiV1AccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.api.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformApiV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.api.v1.accounts.$post>) {
      return parseResponse(client.platform.api.v1.accounts.$post(args, options))
    },
  })
}

export function usePostPlatformApiV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.api.v1.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformApiV1AccountsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlatformApiV1AccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id', args] as const
}

export function getPlatformApiV1AccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AccountsAccountIdQueryKey>
  >({
    queryKey: getPlatformApiV1AccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AccountsAccountIdQueryKey>
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
      ...getPlatformApiV1AccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformApiV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AccountsAccountIdQueryKey>
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
      ...getPlatformApiV1AccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeletePlatformApiV1AccountsAccountIdMutationKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id', 'DELETE'] as const
}

export function getDeletePlatformApiV1AccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlatformApiV1AccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>,
    ) {
      return parseResponse(client.platform.api.v1.accounts[':account_id'].$delete(args, options))
    },
  })
}

export function useDeletePlatformApiV1AccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlatformApiV1AccountsAccountIdMutationOptions<
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

export function getPatchPlatformApiV1AccountsAccountIdMutationKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id', 'PATCH'] as const
}

export function getPatchPlatformApiV1AccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlatformApiV1AccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>,
    ) {
      return parseResponse(client.platform.api.v1.accounts[':account_id'].$patch(args, options))
    },
  })
}

export function usePatchPlatformApiV1AccountsAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPlatformApiV1AccountsAccountIdMutationOptions<
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

export function getPlatformApiV1AccountsAccountIdAccountUsersQueryKey(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', args] as const
}

export function getPlatformApiV1AccountsAccountIdAccountUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AccountsAccountIdAccountUsersQueryKey>
  >({
    queryKey: getPlatformApiV1AccountsAccountIdAccountUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].account_users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1AccountsAccountIdAccountUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AccountsAccountIdAccountUsersQueryKey>
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
      ...getPlatformApiV1AccountsAccountIdAccountUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformApiV1AccountsAccountIdAccountUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AccountsAccountIdAccountUsersQueryKey>
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
      ...getPlatformApiV1AccountsAccountIdAccountUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformApiV1AccountsAccountIdAccountUsersMutationKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', 'POST'] as const
}

export function getPostPlatformApiV1AccountsAccountIdAccountUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformApiV1AccountsAccountIdAccountUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
      >,
    ) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].account_users.$post(args, options),
      )
    },
  })
}

export function usePostPlatformApiV1AccountsAccountIdAccountUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformApiV1AccountsAccountIdAccountUsersMutationOptions<
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

export function getDeletePlatformApiV1AccountsAccountIdAccountUsersMutationKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', 'DELETE'] as const
}

export function getDeletePlatformApiV1AccountsAccountIdAccountUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePlatformApiV1AccountsAccountIdAccountUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
      >,
    ) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].account_users.$delete(args, options),
      )
    },
  })
}

export function useDeletePlatformApiV1AccountsAccountIdAccountUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlatformApiV1AccountsAccountIdAccountUsersMutationOptions<
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

export function getPlatformApiV1AgentBotsQueryKey() {
  return ['platform', '/platform/api/v1/agent_bots'] as const
}

export function getPlatformApiV1AgentBotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AgentBotsQueryKey>
  >({
    queryKey: getPlatformApiV1AgentBotsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.agent_bots.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1AgentBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AgentBotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformApiV1AgentBotsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformApiV1AgentBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AgentBotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformApiV1AgentBotsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPlatformApiV1AgentBotsMutationKey() {
  return ['platform', '/platform/api/v1/agent_bots', 'POST'] as const
}

export function getPostPlatformApiV1AgentBotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.api.v1.agent_bots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformApiV1AgentBotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.api.v1.agent_bots.$post>) {
      return parseResponse(client.platform.api.v1.agent_bots.$post(args, options))
    },
  })
}

export function usePostPlatformApiV1AgentBots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.api.v1.agent_bots.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformApiV1AgentBotsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlatformApiV1AgentBotsIdQueryKey(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
) {
  return ['platform', '/platform/api/v1/agent_bots/:id', args] as const
}

export function getPlatformApiV1AgentBotsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AgentBotsIdQueryKey>
  >({
    queryKey: getPlatformApiV1AgentBotsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.agent_bots[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1AgentBotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AgentBotsIdQueryKey>
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
      ...getPlatformApiV1AgentBotsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformApiV1AgentBotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1AgentBotsIdQueryKey>
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
      ...getPlatformApiV1AgentBotsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeletePlatformApiV1AgentBotsIdMutationKey() {
  return ['platform', '/platform/api/v1/agent_bots/:id', 'DELETE'] as const
}

export function getDeletePlatformApiV1AgentBotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlatformApiV1AgentBotsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>,
    ) {
      return parseResponse(client.platform.api.v1.agent_bots[':id'].$delete(args, options))
    },
  })
}

export function useDeletePlatformApiV1AgentBotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlatformApiV1AgentBotsIdMutationOptions<
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

export function getPatchPlatformApiV1AgentBotsIdMutationKey() {
  return ['platform', '/platform/api/v1/agent_bots/:id', 'PATCH'] as const
}

export function getPatchPlatformApiV1AgentBotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlatformApiV1AgentBotsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>,
    ) {
      return parseResponse(client.platform.api.v1.agent_bots[':id'].$patch(args, options))
    },
  })
}

export function usePatchPlatformApiV1AgentBotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPlatformApiV1AgentBotsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPlatformApiV1UsersMutationKey() {
  return ['platform', '/platform/api/v1/users', 'POST'] as const
}

export function getPostPlatformApiV1UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.api.v1.users.$post>) {
      return parseResponse(client.platform.api.v1.users.$post(args, options))
    },
  })
}

export function usePostPlatformApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.users.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.api.v1.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformApiV1UsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlatformApiV1UsersIdQueryKey(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
) {
  return ['platform', '/platform/api/v1/users/:id', args] as const
}

export function getPlatformApiV1UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1UsersIdQueryKey>
  >({
    queryKey: getPlatformApiV1UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.users[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformApiV1UsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformApiV1UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformApiV1UsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePlatformApiV1UsersIdMutationKey() {
  return ['platform', '/platform/api/v1/users/:id', 'DELETE'] as const
}

export function getDeletePlatformApiV1UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlatformApiV1UsersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']>,
    ) {
      return parseResponse(client.platform.api.v1.users[':id'].$delete(args, options))
    },
  })
}

export function useDeletePlatformApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlatformApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPlatformApiV1UsersIdMutationKey() {
  return ['platform', '/platform/api/v1/users/:id', 'PATCH'] as const
}

export function getPatchPlatformApiV1UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlatformApiV1UsersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']>,
    ) {
      return parseResponse(client.platform.api.v1.users[':id'].$patch(args, options))
    },
  })
}

export function usePatchPlatformApiV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPlatformApiV1UsersIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlatformApiV1UsersIdLoginQueryKey(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
) {
  return ['platform', '/platform/api/v1/users/:id/login', args] as const
}

export function getPlatformApiV1UsersIdLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1UsersIdLoginQueryKey>
  >({
    queryKey: getPlatformApiV1UsersIdLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.api.v1.users[':id'].login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformApiV1UsersIdLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1UsersIdLoginQueryKey>
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
      ...getPlatformApiV1UsersIdLoginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformApiV1UsersIdLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformApiV1UsersIdLoginQueryKey>
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
      ...getPlatformApiV1UsersIdLoginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformApiV1UsersIdTokenMutationKey() {
  return ['platform', '/platform/api/v1/users/:id/token', 'POST'] as const
}

export function getPostPlatformApiV1UsersIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformApiV1UsersIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>,
    ) {
      return parseResponse(client.platform.api.v1.users[':id'].token.$post(args, options))
    },
  })
}

export function usePostPlatformApiV1UsersIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformApiV1UsersIdTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPublicApiV1InboxesInboxIdentifierQueryKey(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
) {
  return ['public', '/public/api/v1/inboxes/:inbox_identifier', args] as const
}

export function getPublicApiV1InboxesInboxIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicApiV1InboxesInboxIdentifierQueryKey>
  >({
    queryKey: getPublicApiV1InboxesInboxIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicApiV1InboxesInboxIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiV1InboxesInboxIdentifierQueryKey>
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
      ...getPublicApiV1InboxesInboxIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiV1InboxesInboxIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiV1InboxesInboxIdentifierQueryKey>
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
      ...getPublicApiV1InboxesInboxIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsMutationKey() {
  return ['public', '/public/api/v1/inboxes/:inbox_identifier/contacts', 'POST'] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPublicApiV1InboxesInboxIdentifierContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPublicApiV1InboxesInboxIdentifierContactsMutationOptions<
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

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier',
    args,
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey>
  >({
    queryKey: getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function usePublicApiV1InboxesInboxIdentifierContactsContactIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey>
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiV1InboxesInboxIdentifierContactsContactIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey>
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier',
    'PATCH',
  ] as const
}

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierMutationOptions<
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

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations',
    args,
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey
    >
  >({
    queryKey:
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations',
    'POST',
  ] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsMutationOptions<
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

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id',
    args,
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey
    >
  >({
    queryKey:
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_status',
    'POST',
  ] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].toggle_status.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusMutationOptions<
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

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_typing',
    'POST',
  ] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].toggle_typing.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTyping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingMutationOptions<
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

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/update_last_seen',
    'POST',
  ] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].update_last_seen.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenMutationOptions<
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

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages',
    args,
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey
    >
  >({
    queryKey:
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey
        >
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
      ...getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages',
    'POST',
  ] as const
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].messages.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMutationOptions<
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

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdMutationKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages/:message_id',
    'PATCH',
  ] as const
}

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].messages[':message_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdMutationOptions<
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

export function getSurveyResponsesConversationUuidQueryKey(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
) {
  return ['survey', '/survey/responses/:conversation_uuid', args] as const
}

export function getSurveyResponsesConversationUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveyResponsesConversationUuidQueryKey>
  >({
    queryKey: getSurveyResponsesConversationUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.survey.responses[':conversation_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSurveyResponsesConversationUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveyResponsesConversationUuidQueryKey>
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
      ...getSurveyResponsesConversationUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSurveyResponsesConversationUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveyResponsesConversationUuidQueryKey>
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
      ...getSurveyResponsesConversationUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id', args] as const
}

export function getApiV1AccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdQueryKey>
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
      ...getApiV1AccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdQueryKey>
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
      ...getApiV1AccountsAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV1AccountsAccountIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].$patch(args, options))
    },
  })
}

export function usePatchApiV1AccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdAuditLogsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/audit_logs', args] as const
}

export function getApiV1AccountsAccountIdAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAuditLogsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].audit_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAuditLogsQueryKey>
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
      ...getApiV1AccountsAccountIdAuditLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAuditLogsQueryKey>
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
      ...getApiV1AccountsAccountIdAuditLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdAgentBotsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots', args] as const
}

export function getApiV1AccountsAccountIdAgentBotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAgentBotsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAgentBotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAgentBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentBotsQueryKey>
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
      ...getApiV1AccountsAccountIdAgentBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAgentBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentBotsQueryKey>
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
      ...getApiV1AccountsAccountIdAgentBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdAgentBotsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdAgentBotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdAgentBotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdAgentBots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdAgentBotsMutationOptions<
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

export function getApiV1AccountsAccountIdAgentBotsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', args] as const
}

export function getApiV1AccountsAccountIdAgentBotsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAgentBotsIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAgentBotsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAgentBotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentBotsIdQueryKey>
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
      ...getApiV1AccountsAccountIdAgentBotsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAgentBotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentBotsIdQueryKey>
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
      ...getApiV1AccountsAccountIdAgentBotsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdAgentBotsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdAgentBotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdAgentBotsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdAgentBotsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdAgentBotsIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdAgentBotsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdAgentBotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdAgentBotsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdAgentBotsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdAgentBotsIdMutationOptions<
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

export function getApiV1AccountsAccountIdAgentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/agents', args] as const
}

export function getApiV1AccountsAccountIdAgentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAgentsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentsQueryKey>
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
      ...getApiV1AccountsAccountIdAgentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAgentsQueryKey>
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
      ...getApiV1AccountsAccountIdAgentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdAgentsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agents', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].agents.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdAgents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdAgentsMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdAgentsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agents/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdAgentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdAgentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agents[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdAgentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdAgentsIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdAgentsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/agents/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdAgentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdAgentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agents[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdAgentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdAgentsIdMutationOptions<
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

export function getApiV1AccountsAccountIdCannedResponsesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/canned_responses', args] as const
}

export function getApiV1AccountsAccountIdCannedResponsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCannedResponsesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCannedResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].canned_responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCannedResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCannedResponsesQueryKey>
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
      ...getApiV1AccountsAccountIdCannedResponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCannedResponses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCannedResponsesQueryKey>
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
      ...getApiV1AccountsAccountIdCannedResponsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdCannedResponsesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdCannedResponsesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdCannedResponsesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].canned_responses.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdCannedResponses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdCannedResponsesMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdCannedResponsesIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdCannedResponsesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdCannedResponsesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].canned_responses[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdCannedResponsesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdCannedResponsesIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdCannedResponsesIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdCannedResponsesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdCannedResponsesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].canned_responses[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdCannedResponsesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdCannedResponsesIdMutationOptions<
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

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions', args] as const
}

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCustomAttributeDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey>
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
      ...getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCustomAttributeDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey>
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
      ...getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdCustomAttributeDefinitionsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdCustomAttributeDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdCustomAttributeDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdCustomAttributeDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdCustomAttributeDefinitionsMutationOptions<
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

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', args] as const
}

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey>
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
      ...getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey>
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
      ...getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdMutationOptions<
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

export function getApiV1AccountsAccountIdContactsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts', args] as const
}

export function getApiV1AccountsAccountIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdContactsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].contacts.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdContactsMutationOptions<
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

export function getApiV1AccountsAccountIdContactsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', args] as const
}

export function getApiV1AccountsAccountIdContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContactsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContactsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1AccountsAccountIdContactsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', 'PUT'] as const
}

export function getPutApiV1AccountsAccountIdContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AccountsAccountIdContactsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1AccountsAccountIdContactsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AccountsAccountIdContactsIdMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdContactsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdContactsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdContactsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdContactsIdMutationOptions<
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

export function getApiV1AccountsAccountIdContactsIdConversationsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/conversations', args] as const
}

export function getApiV1AccountsAccountIdContactsIdConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdConversationsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsIdConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContactsIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdConversationsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdConversationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContactsIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdConversationsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdConversationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdContactsIdLabelsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/labels', args] as const
}

export function getApiV1AccountsAccountIdContactsIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdLabelsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContactsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContactsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdContactsIdLabelsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/labels', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdContactsIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdContactsIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].labels.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdContactsIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdContactsIdLabelsMutationOptions<
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

export function getApiV1AccountsAccountIdContactsSearchQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/search', args] as const
}

export function getApiV1AccountsAccountIdContactsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsSearchQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsSearchQueryKey>
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
      ...getApiV1AccountsAccountIdContactsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsSearchQueryKey>
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
      ...getApiV1AccountsAccountIdContactsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdContactsFilterMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/filter', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdContactsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdContactsFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts.filter.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdContactsFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdContactsFilterMutationOptions<
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

export function getPostApiV1AccountsAccountIdContactsIdContactInboxesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/contact_inboxes', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdContactsIdContactInboxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdContactsIdContactInboxesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].contact_inboxes.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdContactsIdContactInboxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdContactsIdContactInboxesMutationOptions<
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

export function getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/contactable_inboxes', args] as const
}

export function getApiV1AccountsAccountIdContactsIdContactableInboxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdContactsIdContactableInboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdContactableInboxesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdContactsIdContactableInboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey>
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
      ...getApiV1AccountsAccountIdContactsIdContactableInboxesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdDataExportsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/data_exports', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdDataExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdDataExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].data_exports.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdDataExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdDataExportsMutationOptions<
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

export function getPostApiV1AccountsAccountIdActionsContactMergeMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/actions/contact_merge', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdActionsContactMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdActionsContactMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].actions.contact_merge.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdActionsContactMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdActionsContactMergeMutationOptions<
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

export function getApiV1AccountsAccountIdAutomationRulesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules', args] as const
}

export function getApiV1AccountsAccountIdAutomationRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAutomationRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAutomationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesQueryKey>
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
      ...getApiV1AccountsAccountIdAutomationRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAutomationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesQueryKey>
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
      ...getApiV1AccountsAccountIdAutomationRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdAutomationRulesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdAutomationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdAutomationRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdAutomationRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdAutomationRulesMutationOptions<
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

export function getApiV1AccountsAccountIdAutomationRulesIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', args] as const
}

export function getApiV1AccountsAccountIdAutomationRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdAutomationRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdAutomationRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesIdQueryKey>
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
      ...getApiV1AccountsAccountIdAutomationRulesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdAutomationRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesIdQueryKey>
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
      ...getApiV1AccountsAccountIdAutomationRulesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdAutomationRulesIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdAutomationRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdAutomationRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdAutomationRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdAutomationRulesIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdAutomationRulesIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdAutomationRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdAutomationRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdAutomationRulesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdAutomationRulesIdMutationOptions<
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

export function getApiV1AccountsAccountIdPortalsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/portals', args] as const
}

export function getApiV1AccountsAccountIdPortalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdPortalsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdPortalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdPortals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdPortalsQueryKey>
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
      ...getApiV1AccountsAccountIdPortalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdPortals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdPortalsQueryKey>
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
      ...getApiV1AccountsAccountIdPortalsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdPortalsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/portals', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdPortalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdPortalsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].portals.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdPortals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdPortalsMutationOptions<
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

export function getApiV1AccountsAccountIdPortalsPortalSlugQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug', args] as const
}

export function getApiV1AccountsAccountIdPortalsPortalSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdPortalsPortalSlugQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdPortalsPortalSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdPortalsPortalSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdPortalsPortalSlugQueryKey>
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
      ...getApiV1AccountsAccountIdPortalsPortalSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdPortalsPortalSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdPortalsPortalSlugQueryKey>
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
      ...getApiV1AccountsAccountIdPortalsPortalSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV1AccountsAccountIdPortalsPortalSlugMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdPortalsPortalSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdPortalsPortalSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals[':portal_slug'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdPortalsPortalSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdPortalsPortalSlugMutationOptions<
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

export function getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug/categories', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals[':portal_slug'].categories.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdPortalsPortalSlugCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesMutationOptions<
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

export function getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug/articles', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals[':portal_slug'].articles.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdPortalsPortalSlugArticles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesMutationOptions<
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

export function getApiV1AccountsAccountIdConversationsMetaQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations/meta', args] as const
}

export function getApiV1AccountsAccountIdConversationsMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsMetaQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations.meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversationsMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsMetaQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversationsMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsMetaQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsMetaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdConversationsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations', args] as const
}

export function getApiV1AccountsAccountIdConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdConversationsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].conversations.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdConversations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdConversationsMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsFilterMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations/filter', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdConversationsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations.filter.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdConversationsFilterMutationOptions<
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

export function getApiV1AccountsAccountIdConversationsConversationIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations/:conversation_id', args] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV1AccountsAccountIdConversationsConversationIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations/:conversation_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdConversationsConversationIdMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_status',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].toggle_status.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdToggleStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_priority',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].toggle_priority.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdTogglePriority<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_typing_status',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].toggle_typing_status.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/update_last_seen',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].update_last_seen.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/custom_attributes',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].custom_attributes.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdCustomAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/destroy_custom_attributes',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].destroy_custom_attributes.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesMutationOptions<
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

export function getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/assignments',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].assignments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsMutationOptions<
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

export function getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/labels',
    args,
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversationsConversationIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversationsConversationIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdLabelsMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/labels',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsConversationIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdLabelsMutationOptions<
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

export function getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/reporting_events',
    args,
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].reporting_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversationsConversationIdReportingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey
        >
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
      ...getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversationsConversationIdReportingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey
        >
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
      ...getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/branded_email_layout', args] as const
}

export function getApiV1AccountsAccountIdBrandedEmailLayoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].branded_email_layout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdBrandedEmailLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey>
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
      ...getApiV1AccountsAccountIdBrandedEmailLayoutQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdBrandedEmailLayout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey>
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
      ...getApiV1AccountsAccountIdBrandedEmailLayoutQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV1AccountsAccountIdBrandedEmailLayoutMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/branded_email_layout', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdBrandedEmailLayoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdBrandedEmailLayoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].branded_email_layout.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdBrandedEmailLayout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdBrandedEmailLayoutMutationOptions<
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

export function getApiV1AccountsAccountIdInboxesQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes', args] as const
}

export function getApiV1AccountsAccountIdInboxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdInboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdInboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdInboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdInboxesMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdInboxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdInboxesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].inboxes.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdInboxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdInboxesMutationOptions<
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

export function getApiV1AccountsAccountIdInboxesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id', args] as const
}

export function getApiV1AccountsAccountIdInboxesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdInboxesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdInboxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdInboxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiV1AccountsAccountIdInboxesIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdInboxesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdInboxesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdInboxesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdInboxesIdMutationOptions<
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

export function getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/message_templates', args] as const
}

export function getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdInboxesIdMessageTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdInboxesIdMessageTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/agent_bot', args] as const
}

export function getApiV1AccountsAccountIdInboxesIdAgentBotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdInboxesIdAgentBot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdAgentBotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdInboxesIdAgentBot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey>
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
      ...getApiV1AccountsAccountIdInboxesIdAgentBotQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdInboxesIdSetAgentBotMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/set_agent_bot', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdInboxesIdSetAgentBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdInboxesIdSetAgentBotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].set_agent_bot.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdInboxesIdSetAgentBot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdInboxesIdSetAgentBotMutationOptions<
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

export function getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inbox_members/:inbox_id', args] as const
}

export function getApiV1AccountsAccountIdInboxMembersInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdInboxMembersInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey>
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
      ...getApiV1AccountsAccountIdInboxMembersInboxIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdInboxMembersInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey>
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
      ...getApiV1AccountsAccountIdInboxMembersInboxIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdInboxMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdInboxMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdInboxMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].inbox_members.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdInboxMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdInboxMembersMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdInboxMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdInboxMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdInboxMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inbox_members.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdInboxMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdInboxMembersMutationOptions<
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

export function getPatchApiV1AccountsAccountIdInboxMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdInboxMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdInboxMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inbox_members.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdInboxMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdInboxMembersMutationOptions<
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

export function getApiV1AccountsAccountIdLabelsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/labels', args] as const
}

export function getApiV1AccountsAccountIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdLabelsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdLabelsQueryKey>
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
      ...getApiV1AccountsAccountIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdLabelsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/labels', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].labels.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdLabelsMutationOptions<
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

export function getApiV1AccountsAccountIdLabelsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', args] as const
}

export function getApiV1AccountsAccountIdLabelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdLabelsIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdLabelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdLabelsIdQueryKey>
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
      ...getApiV1AccountsAccountIdLabelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdLabelsIdQueryKey>
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
      ...getApiV1AccountsAccountIdLabelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdLabelsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdLabelsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdLabelsIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdLabelsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdLabelsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdLabelsIdMutationOptions<
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

export function getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages',
    args,
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiV1AccountsAccountIdConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey>
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
      ...getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdMessagesMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages',
    'POST',
  ] as const
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdConversationsConversationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1AccountsAccountIdConversationsConversationIdMessagesMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages/:message_id',
    'DELETE',
  ] as const
}

export function getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
          ':message_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages/:message_id',
    'PATCH',
  ] as const
}

export function getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
          ':message_id'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdMutationOptions<
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

export function getApiV1AccountsAccountIdIntegrationsAppsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/integrations/apps', args] as const
}

export function getApiV1AccountsAccountIdIntegrationsAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdIntegrationsAppsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdIntegrationsAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].integrations.apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdIntegrationsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdIntegrationsAppsQueryKey>
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
      ...getApiV1AccountsAccountIdIntegrationsAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdIntegrationsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdIntegrationsAppsQueryKey>
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
      ...getApiV1AccountsAccountIdIntegrationsAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdIntegrationsHooksMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdIntegrationsHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdIntegrationsHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].integrations.hooks.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdIntegrationsHooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdIntegrationsHooksMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks/:hook_id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdIntegrationsHooksHookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks/:hook_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdIntegrationsHooksHookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdMutationOptions<
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

export function getApiV1ProfileQueryKey() {
  return ['api', '/api/v1/profile'] as const
}

export function getApiV1ProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProfileQueryKey>
  >({
    queryKey: getApiV1ProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1ProfileMutationKey() {
  return ['api', '/api/v1/profile', 'PUT'] as const
}

export function getPutApiV1ProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.profile.$put>) {
      return parseResponse(client.api.v1.profile.$put(args, options))
    },
  })
}

export function usePutApiV1Profile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.profile.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdTeamsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/teams', args] as const
}

export function getApiV1AccountsAccountIdTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdTeamsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdTeamsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdTeamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].teams.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdTeams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdTeamsMutationOptions<
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

export function getApiV1AccountsAccountIdTeamsTeamIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', args] as const
}

export function getApiV1AccountsAccountIdTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdTeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdTeamsTeamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdTeamsTeamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdTeamsTeamIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdTeamsTeamIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdTeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdTeamsTeamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdTeamsTeamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdTeamsTeamIdMutationOptions<
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

export function getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', args] as const
}

export function getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdTeamsTeamIdTeamMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdTeamsTeamIdTeamMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey>
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
      ...getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdTeamsTeamIdTeamMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
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

export function getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdTeamsTeamIdTeamMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersMutationOptions<
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

export function getApiV1AccountsAccountIdCustomFiltersQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_filters', args] as const
}

export function getApiV1AccountsAccountIdCustomFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCustomFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCustomFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersQueryKey>
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
      ...getApiV1AccountsAccountIdCustomFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCustomFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersQueryKey>
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
      ...getApiV1AccountsAccountIdCustomFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdCustomFiltersMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdCustomFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdCustomFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AccountsAccountIdCustomFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdCustomFiltersMutationOptions<
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

export function getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', args] as const
}

export function getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey>
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
      ...getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey>
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
      ...getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdMutationOptions<
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

export function getApiV1AccountsAccountIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/webhooks', args] as const
}

export function getApiV1AccountsAccountIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdWebhooksQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdWebhooksQueryKey>
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
      ...getApiV1AccountsAccountIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdWebhooksQueryKey>
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
      ...getApiV1AccountsAccountIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdWebhooksMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].webhooks.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdWebhooksMutationOptions<
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

export function getDeleteApiV1AccountsAccountIdWebhooksWebhookIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdWebhooksWebhookIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdWebhooksWebhookIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdWebhooksWebhookIdMutationOptions<
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

export function getApiV1AccountsAccountIdReportingEventsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/reporting_events', args] as const
}

export function getApiV1AccountsAccountIdReportingEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdReportingEventsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdReportingEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].reporting_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdReportingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdReportingEventsQueryKey>
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
      ...getApiV1AccountsAccountIdReportingEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdReportingEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdReportingEventsQueryKey>
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
      ...getApiV1AccountsAccountIdReportingEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsQueryKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
) {
  return ['api', '/api/v2/accounts/:account_id/reports', args] as const
}

export function getApiV2AccountsAccountIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsQueryKey>
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
      ...getApiV2AccountsAccountIdReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsQueryKey>
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
      ...getApiV2AccountsAccountIdReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsSummaryQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/summary', args] as const
}

export function getApiV2AccountsAccountIdReportsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsSummaryQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsSummaryQueryKey>
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
      ...getApiV2AccountsAccountIdReportsSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsSummaryQueryKey>
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
      ...getApiV2AccountsAccountIdReportsSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsConversationsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations', args] as const
}

export function getApiV2AccountsAccountIdReportsConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsQueryKey>
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
      ...getApiV2AccountsAccountIdReportsConversationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsQueryKey>
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
      ...getApiV2AccountsAccountIdReportsConversationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsConversationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations/', args] as const
}

export function getApiV2AccountsAccountIdReportsConversationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsIndexQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsConversationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.conversations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsConversationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsIndexQueryKey>
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
      ...getApiV2AccountsAccountIdReportsConversationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsConversationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsIndexQueryKey>
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
      ...getApiV2AccountsAccountIdReportsConversationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsChannelQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/channel', args] as const
}

export function getApiV2AccountsAccountIdSummaryReportsChannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsChannelQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdSummaryReportsChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.channel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdSummaryReportsChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsChannelQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsChannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdSummaryReportsChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsChannelQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsChannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsInboxQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/inbox', args] as const
}

export function getApiV2AccountsAccountIdSummaryReportsInboxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsInboxQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdSummaryReportsInboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdSummaryReportsInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsInboxQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsInboxQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdSummaryReportsInbox<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsInboxQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsInboxQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsAgentQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/agent', args] as const
}

export function getApiV2AccountsAccountIdSummaryReportsAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsAgentQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdSummaryReportsAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.agent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdSummaryReportsAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsAgentQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsAgentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdSummaryReportsAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsAgentQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsAgentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsTeamQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/team', args] as const
}

export function getApiV2AccountsAccountIdSummaryReportsTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsTeamQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdSummaryReportsTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.team.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdSummaryReportsTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsTeamQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsTeamQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdSummaryReportsTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsTeamQueryKey>
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
      ...getApiV2AccountsAccountIdSummaryReportsTeamQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/accounts/:account_id/reports/first_response_time_distribution',
    args,
  ] as const
}

export function getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsFirstResponseTimeDistribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey>
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
      ...getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsFirstResponseTimeDistribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey>
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
      ...getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/inbox_label_matrix', args] as const
}

export function getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsInboxLabelMatrix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey>
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
      ...getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsInboxLabelMatrix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey>
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
      ...getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/outgoing_messages_count', args] as const
}

export function getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey>
  >({
    queryKey: getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV2AccountsAccountIdReportsOutgoingMessagesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey>
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
      ...getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV2AccountsAccountIdReportsOutgoingMessagesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey>
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
      ...getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsAccountIdConversationsConversationIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:account_id/conversations/:conversation_id/messages',
    args,
  ] as const
}

export function getAccountsAccountIdConversationsConversationIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdConversationsConversationIdMessagesQueryKey>
  >({
    queryKey: getAccountsAccountIdConversationsConversationIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountIdConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdConversationsConversationIdMessagesQueryKey>
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
      ...getAccountsAccountIdConversationsConversationIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdConversationsConversationIdMessagesQueryKey>
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
      ...getAccountsAccountIdConversationsConversationIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdCampaignsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns', args] as const
}

export function getApiV1AccountsAccountIdCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCampaignsQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCampaignsQueryKey>
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
      ...getApiV1AccountsAccountIdCampaignsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCampaignsQueryKey>
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
      ...getApiV1AccountsAccountIdCampaignsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsAccountIdCampaignsMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns', 'POST'] as const
}

export function getPostApiV1AccountsAccountIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsAccountIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':account_id'].campaigns.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsAccountIdCampaignsMutationOptions<
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

export function getApiV1AccountsAccountIdCampaignsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', args] as const
}

export function getApiV1AccountsAccountIdCampaignsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCampaignsIdQueryKey>
  >({
    queryKey: getApiV1AccountsAccountIdCampaignsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsAccountIdCampaignsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCampaignsIdQueryKey>
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
      ...getApiV1AccountsAccountIdCampaignsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsAccountIdCampaignsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsAccountIdCampaignsIdQueryKey>
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
      ...getApiV1AccountsAccountIdCampaignsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1AccountsAccountIdCampaignsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', 'DELETE'] as const
}

export function getDeleteApiV1AccountsAccountIdCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AccountsAccountIdCampaignsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AccountsAccountIdCampaignsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AccountsAccountIdCampaignsIdMutationOptions<
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

export function getPatchApiV1AccountsAccountIdCampaignsIdMutationKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', 'PATCH'] as const
}

export function getPatchApiV1AccountsAccountIdCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsAccountIdCampaignsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1AccountsAccountIdCampaignsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsAccountIdCampaignsIdMutationOptions<
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
