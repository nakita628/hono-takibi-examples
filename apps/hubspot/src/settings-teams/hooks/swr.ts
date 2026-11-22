import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsKey() {
  return ['settings'] as const
}

export function getGetSettingsTeams202609Key(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09', args] as const
}

export function useGetSettingsTeams202609<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>
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
        ? getGetSettingsTeams202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.teams['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsTeams202609<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>
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
        ? getGetSettingsTeams202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.teams['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsTeams202609Key() {
  return ['settings', '/settings/teams/2026-09', 'POST'] as const
}

export function usePostSettingsTeams202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.teams)['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsTeams202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.teams)['2026-09']['$post']> },
      ) => parseResponse(client.settings.teams['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsTeams202609TeamIdKey(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09/:teamId', args] as const
}

export function useGetSettingsTeams202609TeamId<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
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
        ? getGetSettingsTeams202609TeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.teams['2026-09'][':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsTeams202609TeamId<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
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
        ? getGetSettingsTeams202609TeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.teams['2026-09'][':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSettingsTeams202609TeamIdKey() {
  return ['settings', '/settings/teams/2026-09/:teamId', 'DELETE'] as const
}

export function useDeleteSettingsTeams202609TeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsTeams202609TeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>
        },
      ) => parseResponse(client.settings.teams['2026-09'][':teamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSettingsTeams202609TeamIdKey() {
  return ['settings', '/settings/teams/2026-09/:teamId', 'PATCH'] as const
}

export function usePatchSettingsTeams202609TeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSettingsTeams202609TeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>
        },
      ) => parseResponse(client.settings.teams['2026-09'][':teamId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsTeams202609TeamIdMembersKey(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09/:teamId/members', args] as const
}

export function useGetSettingsTeams202609TeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
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
        ? getGetSettingsTeams202609TeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.teams['2026-09'][':teamId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsTeams202609TeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
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
        ? getGetSettingsTeams202609TeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.settings.teams['2026-09'][':teamId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsTeams202609TeamIdMembersKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members', 'POST'] as const
}

export function usePostSettingsTeams202609TeamIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsTeams202609TeamIdMembersKey()
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
            (typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.teams['2026-09'][':teamId'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsTeams202609TeamIdMembersBatchKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members/batch', 'POST'] as const
}

export function usePostSettingsTeams202609TeamIdMembersBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsTeams202609TeamIdMembersBatchKey()
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
            (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.settings.teams['2026-09'][':teamId'].members.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsTeams202609TeamIdMembersUserIdKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members/:userId', 'DELETE'] as const
}

export function useDeleteSettingsTeams202609TeamIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsTeams202609TeamIdMembersUserIdKey()
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
            (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.settings.teams['2026-09'][':teamId'].members[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
