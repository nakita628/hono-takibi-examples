import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostPlatformApiV1AccountsKey() {
  return ['platform', '/platform/api/v1/accounts', 'POST'] as const
}

export function usePostPlatformApiV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.api.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformApiV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.api.v1.accounts.$post> },
      ) => parseResponse(client.platform.api.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1AccountsAccountIdKey(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id', args] as const
}

export function useGetPlatformApiV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.api.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.api.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlatformApiV1AccountsAccountIdKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id', 'DELETE'] as const
}

export function useDeletePlatformApiV1AccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlatformApiV1AccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>
        },
      ) =>
        parseResponse(client.platform.api.v1.accounts[':account_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlatformApiV1AccountsAccountIdKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id', 'PATCH'] as const
}

export function usePatchPlatformApiV1AccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlatformApiV1AccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>
        },
      ) => parseResponse(client.platform.api.v1.accounts[':account_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1AccountsAccountIdAccountUsersKey(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
) {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', args] as const
}

export function useGetPlatformApiV1AccountsAccountIdAccountUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AccountsAccountIdAccountUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.platform.api.v1.accounts[':account_id'].account_users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1AccountsAccountIdAccountUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AccountsAccountIdAccountUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.platform.api.v1.accounts[':account_id'].account_users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformApiV1AccountsAccountIdAccountUsersKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', 'POST'] as const
}

export function usePostPlatformApiV1AccountsAccountIdAccountUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformApiV1AccountsAccountIdAccountUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.platform.api.v1.accounts[':account_id'].account_users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePlatformApiV1AccountsAccountIdAccountUsersKey() {
  return ['platform', '/platform/api/v1/accounts/:account_id/account_users', 'DELETE'] as const
}

export function useDeletePlatformApiV1AccountsAccountIdAccountUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlatformApiV1AccountsAccountIdAccountUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.platform.api.v1.accounts[':account_id'].account_users.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1AgentBotsKey() {
  return ['platform', '/platform/api/v1/agent_bots'] as const
}

export function useGetPlatformApiV1AgentBots<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AgentBotsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.agent_bots.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1AgentBots<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AgentBotsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.agent_bots.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformApiV1AgentBotsKey() {
  return ['platform', '/platform/api/v1/agent_bots', 'POST'] as const
}

export function usePostPlatformApiV1AgentBots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.agent_bots.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.api.v1.agent_bots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformApiV1AgentBotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.api.v1.agent_bots.$post> },
      ) => parseResponse(client.platform.api.v1.agent_bots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1AgentBotsIdKey(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
) {
  return ['platform', '/platform/api/v1/agent_bots/:id', args] as const
}

export function useGetPlatformApiV1AgentBotsId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AgentBotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.agent_bots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1AgentBotsId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1AgentBotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.agent_bots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlatformApiV1AgentBotsIdKey() {
  return ['platform', '/platform/api/v1/agent_bots/:id', 'DELETE'] as const
}

export function useDeletePlatformApiV1AgentBotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlatformApiV1AgentBotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']> },
      ) => parseResponse(client.platform.api.v1.agent_bots[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlatformApiV1AgentBotsIdKey() {
  return ['platform', '/platform/api/v1/agent_bots/:id', 'PATCH'] as const
}

export function usePatchPlatformApiV1AgentBotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlatformApiV1AgentBotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']> },
      ) => parseResponse(client.platform.api.v1.agent_bots[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlatformApiV1UsersKey() {
  return ['platform', '/platform/api/v1/users', 'POST'] as const
}

export function usePostPlatformApiV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.api.v1.users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.api.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformApiV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.api.v1.users.$post> },
      ) => parseResponse(client.platform.api.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1UsersIdKey(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
) {
  return ['platform', '/platform/api/v1/users/:id', args] as const
}

export function useGetPlatformApiV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1UsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1UsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.api.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlatformApiV1UsersIdKey() {
  return ['platform', '/platform/api/v1/users/:id', 'DELETE'] as const
}

export function useDeletePlatformApiV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlatformApiV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']> },
      ) => parseResponse(client.platform.api.v1.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlatformApiV1UsersIdKey() {
  return ['platform', '/platform/api/v1/users/:id', 'PATCH'] as const
}

export function usePatchPlatformApiV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlatformApiV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']> },
      ) => parseResponse(client.platform.api.v1.users[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformApiV1UsersIdLoginKey(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
) {
  return ['platform', '/platform/api/v1/users/:id/login', args] as const
}

export function useGetPlatformApiV1UsersIdLogin<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1UsersIdLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.api.v1.users[':id'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformApiV1UsersIdLogin<TError = unknown>(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformApiV1UsersIdLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.api.v1.users[':id'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformApiV1UsersIdTokenKey() {
  return ['platform', '/platform/api/v1/users/:id/token', 'POST'] as const
}

export function usePostPlatformApiV1UsersIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformApiV1UsersIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>
        },
      ) => parseResponse(client.platform.api.v1.users[':id'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiV1InboxesInboxIdentifierKey(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
) {
  return ['public', '/public/api/v1/inboxes/:inbox_identifier', args] as const
}

export function useGetPublicApiV1InboxesInboxIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.api.v1.inboxes[':inbox_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiV1InboxesInboxIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.public.api.v1.inboxes[':inbox_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsKey() {
  return ['public', '/public/api/v1/inboxes/:inbox_identifier/contacts', 'POST'] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicApiV1InboxesInboxIdentifierContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierKey(
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

export function useGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifier<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier',
    'PATCH',
  ] as const
}

export function usePatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsKey(
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

export function useGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations',
    'POST',
  ] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdKey(
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

export function useGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_status',
    'POST',
  ] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].toggle_status.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_typing',
    'POST',
  ] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTyping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].toggle_typing.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/update_last_seen',
    'POST',
  ] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeen<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].update_last_seen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesKey(
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

export function useGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages',
    'POST',
  ] as const
}

export function usePostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdKey() {
  return [
    'public',
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages/:message_id',
    'PATCH',
  ] as const
}

export function usePatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.public.api.v1.inboxes[':inbox_identifier'].contacts[
            ':contact_identifier'
          ].conversations[':conversation_id'].messages[':message_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSurveyResponsesConversationUuidKey(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
) {
  return ['survey', '/survey/responses/:conversation_uuid', args] as const
}

export function useGetSurveyResponsesConversationUuid<TError = unknown>(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSurveyResponsesConversationUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.survey.responses[':conversation_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSurveyResponsesConversationUuid<TError = unknown>(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSurveyResponsesConversationUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.survey.responses)[':conversation_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.survey.responses[':conversation_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id', args] as const
}

export function useGetApiV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdKey() {
  return ['api', '/api/v1/accounts/:account_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']> },
      ) => parseResponse(client.api.v1.accounts[':account_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAuditLogsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/audit_logs', args] as const
}

export function useGetApiV1AccountsAccountIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAgentBotsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots', args] as const
}

export function useGetApiV1AccountsAccountIdAgentBots<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAgentBots<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdAgentBotsKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdAgentBots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdAgentBotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAgentBotsIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', args] as const
}

export function useGetApiV1AccountsAccountIdAgentBotsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentBotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAgentBotsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentBotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdAgentBotsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdAgentBotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdAgentBotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdAgentBotsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/agent_bots/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdAgentBotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdAgentBotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agent_bots[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAgentsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/agents', args] as const
}

export function useGetApiV1AccountsAccountIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdAgentsKey() {
  return ['api', '/api/v1/accounts/:account_id/agents', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdAgentsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/agents/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdAgentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdAgentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agents[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdAgentsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/agents/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdAgentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdAgentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].agents[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCannedResponsesKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/canned_responses', args] as const
}

export function useGetApiV1AccountsAccountIdCannedResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCannedResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCannedResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCannedResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdCannedResponsesKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdCannedResponses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdCannedResponsesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdCannedResponsesIdKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdCannedResponsesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdCannedResponsesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdCannedResponsesIdKey() {
  return ['api', '/api/v1/accounts/:account_id/canned_responses/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdCannedResponsesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdCannedResponsesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].canned_responses[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCustomAttributeDefinitionsKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions', args] as const
}

export function useGetApiV1AccountsAccountIdCustomAttributeDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomAttributeDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCustomAttributeDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomAttributeDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdCustomAttributeDefinitionsKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdCustomAttributeDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdCustomAttributeDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', args] as const
}

export function useGetApiV1AccountsAccountIdCustomAttributeDefinitionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCustomAttributeDefinitionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_attribute_definitions/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdCustomAttributeDefinitionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdCustomAttributeDefinitionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts', args] as const
}

export function useGetApiV1AccountsAccountIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdContactsKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsIdKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', args] as const
}

export function useGetApiV1AccountsAccountIdContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AccountsAccountIdContactsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', 'PUT'] as const
}

export function usePutApiV1AccountsAccountIdContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AccountsAccountIdContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdContactsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsIdConversationsKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/conversations', args] as const
}

export function useGetApiV1AccountsAccountIdContactsIdConversations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContactsIdConversations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsIdLabelsKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/labels', args] as const
}

export function useGetApiV1AccountsAccountIdContactsIdLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContactsIdLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdContactsIdLabelsKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/labels', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdContactsIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdContactsIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].labels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsSearchKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/search', args] as const
}

export function useGetApiV1AccountsAccountIdContactsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContactsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdContactsFilterKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/filter', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdContactsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdContactsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts.filter.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdContactsIdContactInboxesKey() {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/contact_inboxes', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdContactsIdContactInboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdContactsIdContactInboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].contact_inboxes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdContactsIdContactableInboxesKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/contacts/:id/contactable_inboxes', args] as const
}

export function useGetApiV1AccountsAccountIdContactsIdContactableInboxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdContactableInboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdContactsIdContactableInboxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdContactsIdContactableInboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdDataExportsKey() {
  return ['api', '/api/v1/accounts/:account_id/data_exports', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdDataExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdDataExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.accounts[':account_id'].data_exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdActionsContactMergeKey() {
  return ['api', '/api/v1/accounts/:account_id/actions/contact_merge', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdActionsContactMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdActionsContactMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].actions.contact_merge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAutomationRulesKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules', args] as const
}

export function useGetApiV1AccountsAccountIdAutomationRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAutomationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAutomationRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAutomationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdAutomationRulesKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdAutomationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdAutomationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdAutomationRulesIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', args] as const
}

export function useGetApiV1AccountsAccountIdAutomationRulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAutomationRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdAutomationRulesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdAutomationRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdAutomationRulesIdKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdAutomationRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdAutomationRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdAutomationRulesIdKey() {
  return ['api', '/api/v1/accounts/:account_id/automation_rules/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdAutomationRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdAutomationRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].automation_rules[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdPortalsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/portals', args] as const
}

export function useGetApiV1AccountsAccountIdPortals<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdPortalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].portals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdPortals<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdPortalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].portals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdPortalsKey() {
  return ['api', '/api/v1/accounts/:account_id/portals', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdPortals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdPortalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].portals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdPortalsPortalSlugKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug', args] as const
}

export function useGetApiV1AccountsAccountIdPortalsPortalSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdPortalsPortalSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdPortalsPortalSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdPortalsPortalSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdPortalsPortalSlugKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdPortalsPortalSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdPortalsPortalSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug/categories', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdPortalsPortalSlugCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdPortalsPortalSlugCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].categories.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesKey() {
  return ['api', '/api/v1/accounts/:account_id/portals/:portal_slug/articles', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdPortalsPortalSlugArticles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdPortalsPortalSlugArticlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].portals[':portal_slug'].articles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsMetaKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations/meta', args] as const
}

export function useGetApiV1AccountsAccountIdConversationsMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversationsMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations', args] as const
}

export function useGetApiV1AccountsAccountIdConversations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsFilterKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations/filter', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdConversationsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdConversationsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations.filter.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsConversationIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/conversations/:conversation_id', args] as const
}

export function useGetApiV1AccountsAccountIdConversationsConversationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversationsConversationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdConversationsConversationIdKey() {
  return ['api', '/api/v1/accounts/:account_id/conversations/:conversation_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdConversationsConversationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_status',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdToggleStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdToggleStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].toggle_status.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_priority',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdTogglePriority<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdTogglePriorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].toggle_priority.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_typing_status',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].toggle_typing_status.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/update_last_seen',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeen<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].update_last_seen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/custom_attributes',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdCustomAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdCustomAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].custom_attributes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/destroy_custom_attributes',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].destroy_custom_attributes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/assignments',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdAssignments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].assignments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsConversationIdLabelsKey(
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

export function useGetApiV1AccountsAccountIdConversationsConversationIdLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversationsConversationIdLabels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdLabelsKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/labels',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsConversationIdReportingEventsKey(
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

export function useGetApiV1AccountsAccountIdConversationsConversationIdReportingEvents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdReportingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].reporting_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversationsConversationIdReportingEvents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdReportingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[
            ':conversation_id'
          ].reporting_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdBrandedEmailLayoutKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/branded_email_layout', args] as const
}

export function useGetApiV1AccountsAccountIdBrandedEmailLayout<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdBrandedEmailLayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].branded_email_layout.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdBrandedEmailLayout<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdBrandedEmailLayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].branded_email_layout.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdBrandedEmailLayoutKey() {
  return ['api', '/api/v1/accounts/:account_id/branded_email_layout', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdBrandedEmailLayout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdBrandedEmailLayoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].branded_email_layout.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdInboxesKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes', args] as const
}

export function useGetApiV1AccountsAccountIdInboxes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].inboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdInboxes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].inboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdInboxesKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdInboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdInboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].inboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdInboxesIdKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id', args] as const
}

export function useGetApiV1AccountsAccountIdInboxesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdInboxesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdInboxesIdKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdInboxesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdInboxesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdInboxesIdMessageTemplatesKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/message_templates', args] as const
}

export function useGetApiV1AccountsAccountIdInboxesIdMessageTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdMessageTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdInboxesIdMessageTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdMessageTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdInboxesIdAgentBotKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/agent_bot', args] as const
}

export function useGetApiV1AccountsAccountIdInboxesIdAgentBot<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdAgentBotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdInboxesIdAgentBot<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxesIdAgentBotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdInboxesIdSetAgentBotKey() {
  return ['api', '/api/v1/accounts/:account_id/inboxes/:id/set_agent_bot', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdInboxesIdSetAgentBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdInboxesIdSetAgentBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inboxes[':id'].set_agent_bot.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdInboxMembersInboxIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/inbox_members/:inbox_id', args] as const
}

export function useGetApiV1AccountsAccountIdInboxMembersInboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxMembersInboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdInboxMembersInboxId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdInboxMembersInboxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdInboxMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdInboxMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdInboxMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdInboxMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdInboxMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdInboxMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdInboxMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/inbox_members', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdInboxMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdInboxMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].inbox_members.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdLabelsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/labels', args] as const
}

export function useGetApiV1AccountsAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdLabelsKey() {
  return ['api', '/api/v1/accounts/:account_id/labels', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdLabelsIdKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', args] as const
}

export function useGetApiV1AccountsAccountIdLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].labels[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].labels[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdLabelsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].labels[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdLabelsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/labels/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].labels[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdConversationsConversationIdMessagesKey(
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

export function useGetApiV1AccountsAccountIdConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdConversationsConversationIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdConversationsConversationIdMessagesKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages',
    'POST',
  ] as const
}

export function usePostApiV1AccountsAccountIdConversationsConversationIdMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdConversationsConversationIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages/:message_id',
    'DELETE',
  ] as const
}

export function useDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
            ':message_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdKey() {
  return [
    'api',
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages/:message_id',
    'PATCH',
  ] as const
}

export function usePatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
            ':message_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdIntegrationsAppsKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/integrations/apps', args] as const
}

export function useGetApiV1AccountsAccountIdIntegrationsApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdIntegrationsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].integrations.apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdIntegrationsApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdIntegrationsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].integrations.apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdIntegrationsHooksKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdIntegrationsHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdIntegrationsHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].integrations.hooks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks/:hook_id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdIntegrationsHooksHookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdIntegrationsHooksHookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdKey() {
  return ['api', '/api/v1/accounts/:account_id/integrations/hooks/:hook_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdIntegrationsHooksHookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdIntegrationsHooksHookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ProfileKey() {
  return ['api', '/api/v1/profile'] as const
}

export function useGetApiV1Profile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Profile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ProfileKey() {
  return ['api', '/api/v1/profile', 'PUT'] as const
}

export function usePutApiV1Profile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.profile.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.profile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.profile.$put> }) =>
        parseResponse(client.api.v1.profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdTeamsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/teams', args] as const
}

export function useGetApiV1AccountsAccountIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdTeamsKey() {
  return ['api', '/api/v1/accounts/:account_id/teams', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdTeamsTeamIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', args] as const
}

export function useGetApiV1AccountsAccountIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdTeamsTeamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdTeamsTeamIdKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', args] as const
}

export function useGetApiV1AccountsAccountIdTeamsTeamIdTeamMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdTeamsTeamIdTeamMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdTeamsTeamIdTeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey() {
  return ['api', '/api/v1/accounts/:account_id/teams/:team_id/team_members', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdTeamsTeamIdTeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdTeamsTeamIdTeamMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCustomFiltersKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_filters', args] as const
}

export function useGetApiV1AccountsAccountIdCustomFilters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCustomFilters<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdCustomFiltersKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdCustomFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdCustomFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', args] as const
}

export function useGetApiV1AccountsAccountIdCustomFiltersCustomFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCustomFiltersCustomFilterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey() {
  return ['api', '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdCustomFiltersCustomFilterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdCustomFiltersCustomFilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdWebhooksKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/webhooks', args] as const
}

export function useGetApiV1AccountsAccountIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdWebhooksKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdWebhooksWebhookIdKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdWebhooksWebhookIdKey() {
  return ['api', '/api/v1/accounts/:account_id/webhooks/:webhook_id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdReportingEventsKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/reporting_events', args] as const
}

export function useGetApiV1AccountsAccountIdReportingEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdReportingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].reporting_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdReportingEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdReportingEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].reporting_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsKey(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
) {
  return ['api', '/api/v2/accounts/:account_id/reports', args] as const
}

export function useGetApiV2AccountsAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.accounts[':account_id'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.accounts[':account_id'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsSummaryKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/summary', args] as const
}

export function useGetApiV2AccountsAccountIdReportsSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsConversationsKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations', args] as const
}

export function useGetApiV2AccountsAccountIdReportsConversations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsConversations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsConversationsIndexKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/conversations/', args] as const
}

export function useGetApiV2AccountsAccountIdReportsConversationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsConversationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsConversationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsConversationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.conversations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdSummaryReportsChannelKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/channel', args] as const
}

export function useGetApiV2AccountsAccountIdSummaryReportsChannel<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.channel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdSummaryReportsChannel<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.channel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdSummaryReportsInboxKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/inbox', args] as const
}

export function useGetApiV2AccountsAccountIdSummaryReportsInbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsInboxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdSummaryReportsInbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsInboxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdSummaryReportsAgentKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/agent', args] as const
}

export function useGetApiV2AccountsAccountIdSummaryReportsAgent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.agent.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdSummaryReportsAgent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.agent.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdSummaryReportsTeamKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/summary_reports/team', args] as const
}

export function useGetApiV2AccountsAccountIdSummaryReportsTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.team.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdSummaryReportsTeam<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdSummaryReportsTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].summary_reports.team.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsFirstResponseTimeDistributionKey(
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

export function useGetApiV2AccountsAccountIdReportsFirstResponseTimeDistribution<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsFirstResponseTimeDistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsFirstResponseTimeDistribution<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsFirstResponseTimeDistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsInboxLabelMatrixKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/inbox_label_matrix', args] as const
}

export function useGetApiV2AccountsAccountIdReportsInboxLabelMatrix<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsInboxLabelMatrixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsInboxLabelMatrix<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsInboxLabelMatrixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AccountsAccountIdReportsOutgoingMessagesCountKey(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
) {
  return ['api', '/api/v2/accounts/:account_id/reports/outgoing_messages_count', args] as const
}

export function useGetApiV2AccountsAccountIdReportsOutgoingMessagesCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsOutgoingMessagesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AccountsAccountIdReportsOutgoingMessagesCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2AccountsAccountIdReportsOutgoingMessagesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdConversationsConversationIdMessagesKey(
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

export function useGetAccountsAccountIdConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdConversationsConversationIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCampaignsKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns', args] as const
}

export function useGetApiV1AccountsAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.accounts[':account_id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AccountsAccountIdCampaignsKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns', 'POST'] as const
}

export function usePostApiV1AccountsAccountIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AccountsAccountIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']
          >
        },
      ) => parseResponse(client.api.v1.accounts[':account_id'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AccountsAccountIdCampaignsIdKey(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
) {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', args] as const
}

export function useGetApiV1AccountsAccountIdCampaignsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].campaigns[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AccountsAccountIdCampaignsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AccountsAccountIdCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.accounts[':account_id'].campaigns[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1AccountsAccountIdCampaignsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', 'DELETE'] as const
}

export function useDeleteApiV1AccountsAccountIdCampaignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AccountsAccountIdCampaignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].campaigns[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1AccountsAccountIdCampaignsIdKey() {
  return ['api', '/api/v1/accounts/:account_id/campaigns/:id', 'PATCH'] as const
}

export function usePatchApiV1AccountsAccountIdCampaignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1AccountsAccountIdCampaignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.accounts[':account_id'].campaigns[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
