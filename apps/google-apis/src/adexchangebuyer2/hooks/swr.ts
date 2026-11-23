import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getGetV2beta1AccountsAccountIdClientsKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients', args] as const
}

export function useGetV2beta1AccountsAccountIdClients<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClients<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdClientsKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['clients']['$post']>
        },
      ) => parseResponse(client.v2beta1.accounts[':accountId'].clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdClientsClientAccountIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId', args] as const
}

export function useGetV2beta1AccountsAccountIdClientsClientAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClientsClientAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId', 'PUT'] as const
}

export function usePutV2beta1AccountsAccountIdClientsClientAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2beta1AccountsAccountIdClientsClientAccountIdKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations',
    args,
  ] as const
}

export function useGetV2beta1AccountsAccountIdClientsClientAccountIdInvitations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClientsClientAccountIdInvitations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdClientsClientAccountIdInvitations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdClientsClientAccountIdInvitationsKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations/:invitationId',
    args,
  ] as const
}

export function useGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
            ':invitationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['invitations'][':invitationId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].invitations[
            ':invitationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/clients/:clientAccountId/users', args] as const
}

export function useGetV2beta1AccountsAccountIdClientsClientAccountIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClientsClientAccountIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId',
    args,
  ] as const
}

export function useGetV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
        ? getGetV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$get']
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
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId',
    'PUT',
  ] as const
}

export function usePutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['clients'][':clientAccountId']['users'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].clients[':clientAccountId'].users[':userId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdCreativesKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives', args] as const
}

export function useGetV2beta1AccountsAccountIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdCreativesKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdCreativesKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives']['$post']
          >
        },
      ) => parseResponse(client.v2beta1.accounts[':accountId'].creatives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdCreativesCreativeIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId', args] as const
}

export function useGetV2beta1AccountsAccountIdCreativesCreativeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
        ? getGetV2beta1AccountsAccountIdCreativesCreativeIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdCreativesCreativeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
        ? getGetV2beta1AccountsAccountIdCreativesCreativeIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$get']
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
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2beta1AccountsAccountIdCreativesCreativeIdKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId', 'PUT'] as const
}

export function usePutV2beta1AccountsAccountIdCreativesCreativeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2beta1AccountsAccountIdCreativesCreativeIdKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations',
    args,
  ] as const
}

export function useGetV2beta1AccountsAccountIdCreativesCreativeIdDealAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
        ? getGetV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdCreativesCreativeIdDealAssociations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
        ? getGetV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations']['$get']
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
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'].dealAssociations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:add',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAdd<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'][
            'dealAssociations:add'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:remove',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId']['dealAssociations:remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId'][
            'dealAssociations:remove'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/creatives/:creativeId:stopWatching',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdStopWatching<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:stopWatching']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId:stopWatching'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/creatives/:creativeId:watch', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdCreativesCreativeIdWatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdCreativesCreativeIdWatchKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['creatives'][':creativeId:watch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].creatives[':creativeId:watch'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdFinalizedProposalsKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/finalizedProposals', args] as const
}

export function useGetV2beta1AccountsAccountIdFinalizedProposals<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
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
        ? getGetV2beta1AccountsAccountIdFinalizedProposalsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
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
          client.v2beta1.accounts[':accountId'].finalizedProposals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdFinalizedProposals<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
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
        ? getGetV2beta1AccountsAccountIdFinalizedProposalsKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals']['$get']
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
          client.v2beta1.accounts[':accountId'].finalizedProposals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:pause',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:pause'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:resume',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['finalizedProposals'][':proposalId:resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].finalizedProposals[':proposalId:resume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdProductsKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products', args] as const
}

export function useGetV2beta1AccountsAccountIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdProductsProductIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/products/:productId', args] as const
}

export function useGetV2beta1AccountsAccountIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
        ? getGetV2beta1AccountsAccountIdProductsProductIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
          client.v2beta1.accounts[':accountId'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdProductsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
        ? getGetV2beta1AccountsAccountIdProductsProductIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['products'][':productId']['$get']
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
          client.v2beta1.accounts[':accountId'].products[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdProposalsKey(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals', args] as const
}

export function useGetV2beta1AccountsAccountIdProposals<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdProposals<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
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
        ? getGetV2beta1AccountsAccountIdProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1.accounts[':accountId'].proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdProposals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals']['$post']
          >
        },
      ) => parseResponse(client.v2beta1.accounts[':accountId'].proposals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdProposalsProposalIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId', args] as const
}

export function useGetV2beta1AccountsAccountIdProposalsProposalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
        ? getGetV2beta1AccountsAccountIdProposalsProposalIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
          client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdProposalsProposalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
        ? getGetV2beta1AccountsAccountIdProposalsProposalIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$get']
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
          client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2beta1AccountsAccountIdProposalsProposalIdKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId', 'PUT'] as const
}

export function usePutV2beta1AccountsAccountIdProposalsProposalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2beta1AccountsAccountIdProposalsProposalIdKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:accept', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdAccept<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdAcceptKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:accept'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:addNote', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdAddNote<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdAddNoteKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:addNote']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:addNote'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/proposals/:proposalId:cancelNegotiation',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:cancelNegotiation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:cancelNegotiation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupKey() {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/proposals/:proposalId:completeSetup',
    'POST',
  ] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:completeSetup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:completeSetup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdPauseKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:pause', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdPauseKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:pause'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta1AccountsAccountIdProposalsProposalIdResumeKey() {
  return ['v2beta1', '/v2beta1/accounts/:accountId/proposals/:proposalId:resume', 'POST'] as const
}

export function usePostV2beta1AccountsAccountIdProposalsProposalIdResume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1AccountsAccountIdProposalsProposalIdResumeKey()
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
            (typeof client.v2beta1.accounts)[':accountId']['proposals'][':proposalId:resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2beta1.accounts[':accountId'].proposals[':proposalId:resume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdPublisherProfilesKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/accounts/:accountId/publisherProfiles', args] as const
}

export function useGetV2beta1AccountsAccountIdPublisherProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
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
        ? getGetV2beta1AccountsAccountIdPublisherProfilesKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
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
          client.v2beta1.accounts[':accountId'].publisherProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdPublisherProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
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
        ? getGetV2beta1AccountsAccountIdPublisherProfilesKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles']['$get']
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
          client.v2beta1.accounts[':accountId'].publisherProfiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdKey(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/accounts/:accountId/publisherProfiles/:publisherProfileId',
    args,
  ] as const
}

export function useGetV2beta1AccountsAccountIdPublisherProfilesPublisherProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
        ? getGetV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
          client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1AccountsAccountIdPublisherProfilesPublisherProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
        ? getGetV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdKey(args)
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
                (typeof client.v2beta1.accounts)[':accountId']['publisherProfiles'][':publisherProfileId']['$get']
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
          client.v2beta1.accounts[':accountId'].publisherProfiles[':publisherProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameBidMetricsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidMetrics', args] as const
}

export function useGetV2beta1FilterSetNameBidMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
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
        ? getGetV2beta1FilterSetNameBidMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].bidMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameBidMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
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
        ? getGetV2beta1FilterSetNameBidMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['bidMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].bidMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameBidResponseErrorsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponseErrors', args] as const
}

export function useGetV2beta1FilterSetNameBidResponseErrors<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
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
        ? getGetV2beta1FilterSetNameBidResponseErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].bidResponseErrors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameBidResponseErrors<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
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
        ? getGetV2beta1FilterSetNameBidResponseErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['bidResponseErrors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].bidResponseErrors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameBidResponsesWithoutBidsKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/bidResponsesWithoutBids', args] as const
}

export function useGetV2beta1FilterSetNameBidResponsesWithoutBids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
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
        ? getGetV2beta1FilterSetNameBidResponsesWithoutBidsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
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
          client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameBidResponsesWithoutBids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
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
        ? getGetV2beta1FilterSetNameBidResponsesWithoutBidsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['bidResponsesWithoutBids']['$get']
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
          client.v2beta1[':filterSetName'].bidResponsesWithoutBids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameFilteredBidRequestsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBidRequests', args] as const
}

export function useGetV2beta1FilterSetNameFilteredBidRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
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
        ? getGetV2beta1FilterSetNameFilteredBidRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2beta1[':filterSetName'].filteredBidRequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameFilteredBidRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
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
        ? getGetV2beta1FilterSetNameFilteredBidRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBidRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2beta1[':filterSetName'].filteredBidRequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameFilteredBidsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/filteredBids', args] as const
}

export function useGetV2beta1FilterSetNameFilteredBids<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
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
        ? getGetV2beta1FilterSetNameFilteredBidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].filteredBids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameFilteredBids<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
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
        ? getGetV2beta1FilterSetNameFilteredBidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['filteredBids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].filteredBids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/creatives',
    args,
  ] as const
}

export function useGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreatives<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
        ? getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreatives<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
        ? getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['creatives']['$get']
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
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].creatives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
) {
  return [
    'v2beta1',
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/details',
    args,
  ] as const
}

export function useGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
        ? getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
        ? getGetV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['filteredBids'][':creativeStatusId']['details']['$get']
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
          client.v2beta1[':filterSetName'].filteredBids[':creativeStatusId'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameImpressionMetricsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/impressionMetrics', args] as const
}

export function useGetV2beta1FilterSetNameImpressionMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
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
        ? getGetV2beta1FilterSetNameImpressionMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].impressionMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameImpressionMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
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
        ? getGetV2beta1FilterSetNameImpressionMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2beta1)[':filterSetName']['impressionMetrics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].impressionMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameLosingBidsKey(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/losingBids', args] as const
}

export function useGetV2beta1FilterSetNameLosingBids<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
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
        ? getGetV2beta1FilterSetNameLosingBidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].losingBids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameLosingBids<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
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
        ? getGetV2beta1FilterSetNameLosingBidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':filterSetName']['losingBids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2beta1[':filterSetName'].losingBids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1FilterSetNameNonBillableWinningBidsKey(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
) {
  return ['v2beta1', '/v2beta1/:filterSetName/nonBillableWinningBids', args] as const
}

export function useGetV2beta1FilterSetNameNonBillableWinningBids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
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
        ? getGetV2beta1FilterSetNameNonBillableWinningBidsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
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
          client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1FilterSetNameNonBillableWinningBids<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
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
        ? getGetV2beta1FilterSetNameNonBillableWinningBidsKey(args)
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
                (typeof client.v2beta1)[':filterSetName']['nonBillableWinningBids']['$get']
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
          client.v2beta1[':filterSetName'].nonBillableWinningBids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2beta1NameKey(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:name', args] as const
}

export function useGetV2beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2beta1NameKey() {
  return ['v2beta1', '/v2beta1/:name', 'DELETE'] as const
}

export function useDeleteV2beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta1)[':name']['$delete']> },
      ) => parseResponse(client.v2beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1OwnerNameFilterSetsKey(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:ownerName/filterSets', args] as const
}

export function useGetV2beta1OwnerNameFilterSets<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
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
        ? getGetV2beta1OwnerNameFilterSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':ownerName'].filterSets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1OwnerNameFilterSets<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
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
        ? getGetV2beta1OwnerNameFilterSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':ownerName'].filterSets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1OwnerNameFilterSetsKey() {
  return ['v2beta1', '/v2beta1/:ownerName/filterSets', 'POST'] as const
}

export function usePostV2beta1OwnerNameFilterSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1OwnerNameFilterSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2beta1)[':ownerName']['filterSets']['$post']> },
      ) => parseResponse(client.v2beta1[':ownerName'].filterSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
