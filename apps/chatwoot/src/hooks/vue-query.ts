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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.api.v1.accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.api.v1.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>
  >,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id', toValue(args)] as const
}

export function getPlatformApiV1AccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformApiV1AccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1AccountsAccountIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformApiV1AccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
    >
  >,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', toValue(args)] as const
}

export function getPlatformApiV1AccountsAccountIdAccountUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformApiV1AccountsAccountIdAccountUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.accounts[':account_id'].account_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
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
                    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
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
                    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1AccountsAccountIdAccountUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AccountsAccountIdAccountUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformApiV1AccountsAccountIdAccountUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.accounts[':account_id'].account_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPlatformApiV1AgentBotsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformApiV1AgentBotsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.agent_bots.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1AgentBotsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformApiV1AgentBotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformApiV1AgentBotsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.agent_bots.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>
  >,
) {
  return ['platform', '/platform/api/v1/agent_bots/:id', toValue(args)] as const
}

export function getPlatformApiV1AgentBotsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformApiV1AgentBotsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.agent_bots[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1AgentBotsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformApiV1AgentBotsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.agent_bots[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>>,
) {
  return ['platform', '/platform/api/v1/users/:id', toValue(args)] as const
}

export function getPlatformApiV1UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformApiV1UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1UsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformApiV1UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>
  >,
) {
  return ['platform', '/platform/api/v1/users/:id/login', toValue(args)] as const
}

export function getPlatformApiV1UsersIdLoginQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformApiV1UsersIdLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.api.v1.users[':id'].login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformApiV1UsersIdLoginQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformApiV1UsersIdLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.api.v1.users[':id'].login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
  >,
) {
  return ['public', '/public/api/v1/inboxes/:inbox_identifier', toValue(args)] as const
}

export function getPublicApiV1InboxesInboxIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicApiV1InboxesInboxIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPublicApiV1InboxesInboxIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicApiV1InboxesInboxIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
    >
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier',
    toValue(args),
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
    >
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations',
    toValue(args),
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
    >
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id',
    toValue(args),
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
) {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages',
    toValue(args),
  ] as const
}

export function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.api.v1.inboxes[':inbox_identifier'].contacts[
          ':contact_identifier'
        ].conversations[':conversation_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>
  >,
) {
  return ['survey', '/survey/responses/:conversation_uuid', toValue(args)] as const
}

export function getSurveyResponsesConversationUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSurveyResponsesConversationUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.survey.responses[':conversation_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSurveyResponsesConversationUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSurveyResponsesConversationUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.survey.responses[':conversation_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>>,
) {
  return ['api', '/api/v1/accounts/:account_id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/audit_logs', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].audit_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAuditLogsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].audit_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdAgentBotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAgentBotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAgentBotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAgentBotsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAgentBotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAgentBotsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAgentBotsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAgentBotsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAgentBotsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAgentBotsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/agents', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAgentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAgentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/canned_responses', toValue(args)] as const
}

export function getApiV1AccountsAccountIdCannedResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCannedResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].canned_responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCannedResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCannedResponsesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCannedResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/custom_attribute_definitions',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCustomAttributeDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/custom_attribute_definitions/:id',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCustomAttributeDefinitionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts', toValue(args)] as const
}

export function getApiV1AccountsAccountIdContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdContactsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/conversations', toValue(args)] as const
}

export function getApiV1AccountsAccountIdContactsIdConversationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsIdConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsIdConversationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsIdConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdContactsIdLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/labels', toValue(args)] as const
}

export function getApiV1AccountsAccountIdContactsIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsIdLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/search', toValue(args)] as const
}

export function getApiV1AccountsAccountIdContactsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/contacts/:id/contactable_inboxes',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdContactsIdContactableInboxesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdContactsIdContactableInboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAutomationRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAutomationRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAutomationRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdAutomationRulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdAutomationRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdAutomationRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdAutomationRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/portals', toValue(args)] as const
}

export function getApiV1AccountsAccountIdPortalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdPortalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdPortalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdPortalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].portals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug', toValue(args)] as const
}

export function getApiV1AccountsAccountIdPortalsPortalSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdPortalsPortalSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdPortalsPortalSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdPortalsPortalSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdPortalsPortalSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations/meta', toValue(args)] as const
}

export function getApiV1AccountsAccountIdConversationsMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdConversationsMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations.meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdConversationsMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdConversationsMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations.meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdConversationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations', toValue(args)] as const
}

export function getApiV1AccountsAccountIdConversationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdConversationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':account_id']['conversations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdConversationsConversationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdConversationsConversationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/labels',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1AccountsAccountIdConversationsConversationIdLabelsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/reporting_events',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[
          ':conversation_id'
        ].reporting_events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey
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
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1AccountsAccountIdConversationsConversationIdReportingEventsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].reporting_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/branded_email_layout', toValue(args)] as const
}

export function getApiV1AccountsAccountIdBrandedEmailLayoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].branded_email_layout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdBrandedEmailLayoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].branded_email_layout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes', toValue(args)] as const
}

export function getApiV1AccountsAccountIdInboxesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdInboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdInboxesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdInboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].inboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdInboxesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdInboxesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/inboxes/:id/message_templates',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdMessageTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/agent_bot', toValue(args)] as const
}

export function getApiV1AccountsAccountIdInboxesIdAgentBotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdInboxesIdAgentBotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inbox_members/:inbox_id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdInboxMembersInboxIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdInboxMembersInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/labels', toValue(args)] as const
}

export function getApiV1AccountsAccountIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>
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
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdLabelsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdLabelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].labels[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdLabelsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdLabelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdLabelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].labels[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1AccountsAccountIdConversationsConversationIdMessagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/integrations/apps', toValue(args)] as const
}

export function getApiV1AccountsAccountIdIntegrationsAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdIntegrationsAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].integrations.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdIntegrationsAppsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdIntegrationsAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdIntegrationsAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].integrations.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1ProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
          >,
          ReturnType<typeof getApiV1ProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.profile.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams', toValue(args)] as const
}

export function getApiV1AccountsAccountIdTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdTeamsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
    >
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', toValue(args)] as const
}

export function getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdTeamsTeamIdTeamMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_filters', toValue(args)] as const
}

export function getApiV1AccountsAccountIdCustomFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCustomFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCustomFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id',
    toValue(args),
  ] as const
}

export function getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCustomFiltersCustomFilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/webhooks', toValue(args)] as const
}

export function getApiV1AccountsAccountIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdWebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/reporting_events', toValue(args)] as const
}

export function getApiV1AccountsAccountIdReportingEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdReportingEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].reporting_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdReportingEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdReportingEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdReportingEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].reporting_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports', toValue(args)] as const
}

export function getApiV2AccountsAccountIdReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>
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
                  ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/summary', toValue(args)] as const
}

export function getApiV2AccountsAccountIdReportsSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsConversationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations', toValue(args)] as const
}

export function getApiV2AccountsAccountIdReportsConversationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsConversationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations/', toValue(args)] as const
}

export function getApiV2AccountsAccountIdReportsConversationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsConversationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.conversations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsConversationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsConversationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsChannelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/channel', toValue(args)] as const
}

export function getApiV2AccountsAccountIdSummaryReportsChannelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.channel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsChannelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.channel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsInboxQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/inbox', toValue(args)] as const
}

export function getApiV2AccountsAccountIdSummaryReportsInboxQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsInboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsInboxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsInboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsInboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsAgentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/agent', toValue(args)] as const
}

export function getApiV2AccountsAccountIdSummaryReportsAgentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.agent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsAgentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsAgentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.agent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdSummaryReportsTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/team', toValue(args)] as const
}

export function getApiV2AccountsAccountIdSummaryReportsTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].summary_reports.team.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsTeamQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdSummaryReportsTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdSummaryReportsTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.team.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/accounts/:account_id/reports/first_response_time_distribution',
    toValue(args),
  ] as const
}

export function getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
    >
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/inbox_label_matrix', toValue(args)] as const
}

export function getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsInboxLabelMatrixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/accounts/:account_id/reports/outgoing_messages_count',
    toValue(args),
  ] as const
}

export function getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
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
                    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AccountsAccountIdReportsOutgoingMessagesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdConversationsConversationIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:account_id/conversations/:conversation_id/messages',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdConversationsConversationIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdConversationsConversationIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
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
                    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdConversationsConversationIdMessagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdConversationsConversationIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdConversationsConversationIdMessagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsAccountIdCampaignsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns', toValue(args)] as const
}

export function getApiV1AccountsAccountIdCampaignsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', toValue(args)] as const
}

export function getApiV1AccountsAccountIdCampaignsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsAccountIdCampaignsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':account_id'].campaigns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
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
                    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
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
                    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsAccountIdCampaignsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsAccountIdCampaignsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsAccountIdCampaignsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':account_id'].campaigns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
