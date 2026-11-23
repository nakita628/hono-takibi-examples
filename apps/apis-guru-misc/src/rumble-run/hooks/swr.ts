import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getReleasesKey() {
  return ['releases'] as const
}

export function getGetAccountAgentsKey(args: InferRequestType<typeof client.account.agents.$get>) {
  return ['account', '/account/agents', args] as const
}

export function useGetAccountAgents<TError = unknown>(
  args: InferRequestType<typeof client.account.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAgents<TError = unknown>(
  args: InferRequestType<typeof client.account.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountCredentialsKey(
  args: InferRequestType<typeof client.account.credentials.$get>,
) {
  return ['account', '/account/credentials', args] as const
}

export function useGetAccountCredentials<TError = unknown>(
  args: InferRequestType<typeof client.account.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
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
        ? getGetAccountCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCredentials<TError = unknown>(
  args: InferRequestType<typeof client.account.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
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
        ? getGetAccountCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountCredentialsKey() {
  return ['account', '/account/credentials', 'PUT'] as const
}

export function usePutAccountCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.credentials.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.credentials.$put> }) =>
        parseResponse(client.account.credentials.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountCredentialsCredentialIdKey(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
) {
  return ['account', '/account/credentials/:credential_id', args] as const
}

export function useGetAccountCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
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
        ? getGetAccountCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.credentials[':credential_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
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
        ? getGetAccountCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.credentials[':credential_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountCredentialsCredentialIdKey() {
  return ['account', '/account/credentials/:credential_id', 'DELETE'] as const
}

export function useDeleteAccountCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountCredentialsCredentialIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>
        },
      ) => parseResponse(client.account.credentials[':credential_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountEventsJsonKey(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
) {
  return ['account', '/account/events.json', args] as const
}

export function useGetAccountEventsJson<TError = unknown>(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
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
        ? getGetAccountEventsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['events.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEventsJson<TError = unknown>(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
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
        ? getGetAccountEventsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['events.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountEventsJsonlKey(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
) {
  return ['account', '/account/events.jsonl', args] as const
}

export function useGetAccountEventsJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
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
        ? getGetAccountEventsJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['events.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEventsJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
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
        ? getGetAccountEventsJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account['events.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountGroupsKey() {
  return ['account', '/account/groups'] as const
}

export function useGetAccountGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountGroupsKey() {
  return ['account', '/account/groups', 'PUT'] as const
}

export function usePutAccountGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.groups.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.groups.$put> }) =>
        parseResponse(client.account.groups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountGroupsKey() {
  return ['account', '/account/groups', 'POST'] as const
}

export function usePostAccountGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.groups.$post> }) =>
        parseResponse(client.account.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountGroupsGroupIdKey(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
) {
  return ['account', '/account/groups/:group_id', args] as const
}

export function useGetAccountGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
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
        ? getGetAccountGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
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
        ? getGetAccountGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.groups[':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountGroupsGroupIdKey() {
  return ['account', '/account/groups/:group_id', 'DELETE'] as const
}

export function useDeleteAccountGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.groups)[':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.groups)[':group_id']['$delete']> },
      ) => parseResponse(client.account.groups[':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountKeysKey() {
  return ['account', '/account/keys'] as const
}

export function useGetAccountKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountKeysKey() {
  return ['account', '/account/keys', 'PUT'] as const
}

export function usePutAccountKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.keys.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.keys.$put> }) =>
        parseResponse(client.account.keys.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountKeysKeyIdKey(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
) {
  return ['account', '/account/keys/:key_id', args] as const
}

export function useGetAccountKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
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
        ? getGetAccountKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
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
        ? getGetAccountKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountKeysKeyIdKey() {
  return ['account', '/account/keys/:key_id', 'DELETE'] as const
}

export function useDeleteAccountKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.keys)[':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.keys)[':key_id']['$delete']> },
      ) => parseResponse(client.account.keys[':key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountKeysKeyIdRotateKey() {
  return ['account', '/account/keys/:key_id/rotate', 'PATCH'] as const
}

export function usePatchAccountKeysKeyIdRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountKeysKeyIdRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']> },
      ) => parseResponse(client.account.keys[':key_id'].rotate.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountLicenseKey() {
  return ['account', '/account/license'] as const
}

export function useGetAccountLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountLicenseKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountOrgsKey(args: InferRequestType<typeof client.account.orgs.$get>) {
  return ['account', '/account/orgs', args] as const
}

export function useGetAccountOrgs<TError = unknown>(
  args: InferRequestType<typeof client.account.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOrgs<TError = unknown>(
  args: InferRequestType<typeof client.account.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountOrgsKey() {
  return ['account', '/account/orgs', 'PUT'] as const
}

export function usePutAccountOrgs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.orgs.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountOrgsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.orgs.$put> }) =>
        parseResponse(client.account.orgs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountOrgsOrgIdKey(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
) {
  return ['account', '/account/orgs/:org_id', args] as const
}

export function useGetAccountOrgsOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
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
        ? getGetAccountOrgsOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.orgs[':org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOrgsOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
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
        ? getGetAccountOrgsOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.orgs[':org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountOrgsOrgIdKey() {
  return ['account', '/account/orgs/:org_id', 'DELETE'] as const
}

export function useDeleteAccountOrgsOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountOrgsOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']> },
      ) => parseResponse(client.account.orgs[':org_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountOrgsOrgIdKey() {
  return ['account', '/account/orgs/:org_id', 'PATCH'] as const
}

export function usePatchAccountOrgsOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountOrgsOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']> },
      ) => parseResponse(client.account.orgs[':org_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountOrgsOrgIdExportTokenKey() {
  return ['account', '/account/orgs/:org_id/exportToken', 'DELETE'] as const
}

export function useDeleteAccountOrgsOrgIdExportToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountOrgsOrgIdExportTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>
        },
      ) => parseResponse(client.account.orgs[':org_id'].exportToken.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountOrgsOrgIdExportTokenRotateKey() {
  return ['account', '/account/orgs/:org_id/exportToken/rotate', 'PATCH'] as const
}

export function usePatchAccountOrgsOrgIdExportTokenRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountOrgsOrgIdExportTokenRotateKey()
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
            (typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']
          >
        },
      ) =>
        parseResponse(client.account.orgs[':org_id'].exportToken.rotate.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSitesKey(args: InferRequestType<typeof client.account.sites.$get>) {
  return ['account', '/account/sites', args] as const
}

export function useGetAccountSites<TError = unknown>(
  args: InferRequestType<typeof client.account.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSites<TError = unknown>(
  args: InferRequestType<typeof client.account.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountSsoGroupsKey() {
  return ['account', '/account/sso/groups'] as const
}

export function useGetAccountSsoGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSsoGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sso.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSsoGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountSsoGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.sso.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountSsoGroupsKey() {
  return ['account', '/account/sso/groups', 'PUT'] as const
}

export function usePutAccountSsoGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.sso.groups.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSsoGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.sso.groups.$put> }) =>
        parseResponse(client.account.sso.groups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountSsoGroupsKey() {
  return ['account', '/account/sso/groups', 'POST'] as const
}

export function usePostAccountSsoGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.sso.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSsoGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.sso.groups.$post> }) =>
        parseResponse(client.account.sso.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSsoGroupsGroupMappingIdKey(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
) {
  return ['account', '/account/sso/groups/:group_mapping_id', args] as const
}

export function useGetAccountSsoGroupsGroupMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
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
        ? getGetAccountSsoGroupsGroupMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.sso.groups[':group_mapping_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSsoGroupsGroupMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
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
        ? getGetAccountSsoGroupsGroupMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.sso.groups[':group_mapping_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountSsoGroupsGroupMappingIdKey() {
  return ['account', '/account/sso/groups/:group_mapping_id', 'DELETE'] as const
}

export function useDeleteAccountSsoGroupsGroupMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountSsoGroupsGroupMappingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>
        },
      ) =>
        parseResponse(client.account.sso.groups[':group_mapping_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountTasksKey(args: InferRequestType<typeof client.account.tasks.$get>) {
  return ['account', '/account/tasks', args] as const
}

export function useGetAccountTasks<TError = unknown>(
  args: InferRequestType<typeof client.account.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTasks<TError = unknown>(
  args: InferRequestType<typeof client.account.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountTasksTemplatesKey(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
) {
  return ['account', '/account/tasks/templates', args] as const
}

export function useGetAccountTasksTemplates<TError = unknown>(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
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
        ? getGetAccountTasksTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.tasks.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTasksTemplates<TError = unknown>(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
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
        ? getGetAccountTasksTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.tasks.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountTasksTemplatesKey() {
  return ['account', '/account/tasks/templates', 'PUT'] as const
}

export function usePutAccountTasksTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.tasks.templates.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountTasksTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.tasks.templates.$put> },
      ) => parseResponse(client.account.tasks.templates.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountTasksTemplatesKey() {
  return ['account', '/account/tasks/templates', 'POST'] as const
}

export function usePostAccountTasksTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.tasks.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountTasksTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.tasks.templates.$post> },
      ) => parseResponse(client.account.tasks.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountTasksTemplatesScanTemplateIdKey(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
) {
  return ['account', '/account/tasks/templates/:scan_template_id', args] as const
}

export function useGetAccountTasksTemplatesScanTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
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
        ? getGetAccountTasksTemplatesScanTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.tasks.templates[':scan_template_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountTasksTemplatesScanTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
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
        ? getGetAccountTasksTemplatesScanTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.account.tasks.templates[':scan_template_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountTasksTemplatesScanTemplateIdKey() {
  return ['account', '/account/tasks/templates/:scan_template_id', 'DELETE'] as const
}

export function useDeleteAccountTasksTemplatesScanTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountTasksTemplatesScanTemplateIdKey()
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
            (typeof client.account.tasks.templates)[':scan_template_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account.tasks.templates[':scan_template_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountUsersKey() {
  return ['account', '/account/users'] as const
}

export function useGetAccountUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountUsersKey() {
  return ['account', '/account/users', 'PUT'] as const
}

export function usePutAccountUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.users.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.users.$put> }) =>
        parseResponse(client.account.users.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountUsersInviteKey() {
  return ['account', '/account/users/invite', 'PUT'] as const
}

export function usePutAccountUsersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.invite.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.users.invite.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountUsersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.users.invite.$put> }) =>
        parseResponse(client.account.users.invite.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountUsersUserIdKey(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
) {
  return ['account', '/account/users/:user_id', args] as const
}

export function useGetAccountUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
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
        ? getGetAccountUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
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
        ? getGetAccountUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountUsersUserIdKey() {
  return ['account', '/account/users/:user_id', 'DELETE'] as const
}

export function useDeleteAccountUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.users)[':user_id']['$delete']> },
      ) => parseResponse(client.account.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountUsersUserIdKey() {
  return ['account', '/account/users/:user_id', 'PATCH'] as const
}

export function usePatchAccountUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.users)[':user_id']['$patch']> },
      ) => parseResponse(client.account.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountUsersUserIdResetLockoutKey() {
  return ['account', '/account/users/:user_id/resetLockout', 'PATCH'] as const
}

export function usePatchAccountUsersUserIdResetLockout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountUsersUserIdResetLockoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>
        },
      ) => parseResponse(client.account.users[':user_id'].resetLockout.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountUsersUserIdResetMFAKey() {
  return ['account', '/account/users/:user_id/resetMFA', 'PATCH'] as const
}

export function usePatchAccountUsersUserIdResetMFA<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountUsersUserIdResetMFAKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>
        },
      ) => parseResponse(client.account.users[':user_id'].resetMFA.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountUsersUserIdResetPasswordKey() {
  return ['account', '/account/users/:user_id/resetPassword', 'PATCH'] as const
}

export function usePatchAccountUsersUserIdResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountUsersUserIdResetPasswordKey()
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
            (typeof client.account.users)[':user_id']['resetPassword']['$patch']
          >
        },
      ) => parseResponse(client.account.users[':user_id'].resetPassword.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportOrgAssetsCiscoCsvKey(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
) {
  return ['export', '/export/org/assets.cisco.csv', args] as const
}

export function useGetExportOrgAssetsCiscoCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
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
        ? getGetExportOrgAssetsCiscoCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.cisco.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsCiscoCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
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
        ? getGetExportOrgAssetsCiscoCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.cisco.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsCsvKey(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
) {
  return ['export', '/export/org/assets.csv', args] as const
}

export function useGetExportOrgAssetsCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
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
        ? getGetExportOrgAssetsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
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
        ? getGetExportOrgAssetsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsJsonKey(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets.json', args] as const
}

export function useGetExportOrgAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
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
        ? getGetExportOrgAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
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
        ? getGetExportOrgAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsJsonlKey(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
) {
  return ['export', '/export/org/assets.jsonl', args] as const
}

export function useGetExportOrgAssetsJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
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
        ? getGetExportOrgAssetsJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
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
        ? getGetExportOrgAssetsJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsNmapXmlKey(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
) {
  return ['export', '/export/org/assets.nmap.xml', args] as const
}

export function useGetExportOrgAssetsNmapXml<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
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
        ? getGetExportOrgAssetsNmapXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.nmap.xml'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsNmapXml<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
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
        ? getGetExportOrgAssetsNmapXmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['assets.nmap.xml'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsServicenowCsvKey() {
  return ['export', '/export/org/assets.servicenow.csv'] as const
}

export function useGetExportOrgAssetsServicenowCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
        >
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
        ? getGetExportOrgAssetsServicenowCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['assets.servicenow.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsServicenowCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
        >
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
        ? getGetExportOrgAssetsServicenowCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['assets.servicenow.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsServicenowJsonKey() {
  return ['export', '/export/org/assets.servicenow.json'] as const
}

export function useGetExportOrgAssetsServicenowJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
        >
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
        ? getGetExportOrgAssetsServicenowJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['assets.servicenow.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsServicenowJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
        >
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
        ? getGetExportOrgAssetsServicenowJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['assets.servicenow.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsSyncCreatedAssetsJsonKey(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets/sync/created/assets.json', args] as const
}

export function useGetExportOrgAssetsSyncCreatedAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
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
        ? getGetExportOrgAssetsSyncCreatedAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export.org.assets.sync.created['assets.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsSyncCreatedAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
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
        ? getGetExportOrgAssetsSyncCreatedAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export.org.assets.sync.created['assets.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgAssetsSyncUpdatedAssetsJsonKey(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets/sync/updated/assets.json', args] as const
}

export function useGetExportOrgAssetsSyncUpdatedAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
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
        ? getGetExportOrgAssetsSyncUpdatedAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export.org.assets.sync.updated['assets.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgAssetsSyncUpdatedAssetsJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
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
        ? getGetExportOrgAssetsSyncUpdatedAssetsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export.org.assets.sync.updated['assets.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgServicesCsvKey(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
) {
  return ['export', '/export/org/services.csv', args] as const
}

export function useGetExportOrgServicesCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
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
        ? getGetExportOrgServicesCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgServicesCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
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
        ? getGetExportOrgServicesCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgServicesJsonKey(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
) {
  return ['export', '/export/org/services.json', args] as const
}

export function useGetExportOrgServicesJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
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
        ? getGetExportOrgServicesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgServicesJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
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
        ? getGetExportOrgServicesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgServicesJsonlKey(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
) {
  return ['export', '/export/org/services.jsonl', args] as const
}

export function useGetExportOrgServicesJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
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
        ? getGetExportOrgServicesJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgServicesJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
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
        ? getGetExportOrgServicesJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['services.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgServicesServicenowCsvKey() {
  return ['export', '/export/org/services.servicenow.csv'] as const
}

export function useGetExportOrgServicesServicenowCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
        >
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
        ? getGetExportOrgServicesServicenowCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['services.servicenow.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgServicesServicenowCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
        >
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
        ? getGetExportOrgServicesServicenowCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.export.org['services.servicenow.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgSitesCsvKey() {
  return ['export', '/export/org/sites.csv'] as const
}

export function useGetExportOrgSitesCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportOrgSitesCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgSitesCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportOrgSitesCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgSitesJsonKey(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
) {
  return ['export', '/export/org/sites.json', args] as const
}

export function useGetExportOrgSitesJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
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
        ? getGetExportOrgSitesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgSitesJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
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
        ? getGetExportOrgSitesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgSitesJsonlKey(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
) {
  return ['export', '/export/org/sites.jsonl', args] as const
}

export function useGetExportOrgSitesJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
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
        ? getGetExportOrgSitesJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgSitesJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
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
        ? getGetExportOrgSitesJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['sites.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgWirelessCsvKey(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
) {
  return ['export', '/export/org/wireless.csv', args] as const
}

export function useGetExportOrgWirelessCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
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
        ? getGetExportOrgWirelessCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgWirelessCsv<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
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
        ? getGetExportOrgWirelessCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgWirelessJsonKey(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
) {
  return ['export', '/export/org/wireless.json', args] as const
}

export function useGetExportOrgWirelessJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
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
        ? getGetExportOrgWirelessJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgWirelessJson<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
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
        ? getGetExportOrgWirelessJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportOrgWirelessJsonlKey(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
) {
  return ['export', '/export/org/wireless.jsonl', args] as const
}

export function useGetExportOrgWirelessJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
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
        ? getGetExportOrgWirelessJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportOrgWirelessJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
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
        ? getGetExportOrgWirelessJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.org['wireless.jsonl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgKey() {
  return ['org', '/org'] as const
}

export function useGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPatchOrgKey() {
  return ['org', '/org', 'PATCH'] as const
}

export function usePatchOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.$patch> }) =>
        parseResponse(client.org.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgAgentsKey() {
  return ['org', '/org/agents'] as const
}

export function useGetOrgAgents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAgentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.agents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAgents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAgentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.agents.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgAgentsAgentIdKey(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
) {
  return ['org', '/org/agents/:agent_id', args] as const
}

export function useGetOrgAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
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
        ? getGetOrgAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
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
        ? getGetOrgAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgAgentsAgentIdKey() {
  return ['org', '/org/agents/:agent_id', 'DELETE'] as const
}

export function useDeleteOrgAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']> },
      ) => parseResponse(client.org.agents[':agent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgAgentsAgentIdKey() {
  return ['org', '/org/agents/:agent_id', 'PATCH'] as const
}

export function usePatchOrgAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']> },
      ) => parseResponse(client.org.agents[':agent_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgAgentsAgentIdUpdateKey() {
  return ['org', '/org/agents/:agent_id/update', 'POST'] as const
}

export function usePostOrgAgentsAgentIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['update']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgAgentsAgentIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']> },
      ) => parseResponse(client.org.agents[':agent_id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgAssetsKey(args: InferRequestType<typeof client.org.assets.$get>) {
  return ['org', '/org/assets', args] as const
}

export function useGetOrgAssets<TError = unknown>(
  args: InferRequestType<typeof client.org.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssets<TError = unknown>(
  args: InferRequestType<typeof client.org.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgAssetsBulkClearTagsKey() {
  return ['org', '/org/assets/bulk/clearTags', 'POST'] as const
}

export function usePostOrgAssetsBulkClearTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.clearTags.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.org.assets.bulk.clearTags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgAssetsBulkClearTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.org.assets.bulk.clearTags.$post> },
      ) => parseResponse(client.org.assets.bulk.clearTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgAssetsBulkTagsKey() {
  return ['org', '/org/assets/bulk/tags', 'PATCH'] as const
}

export function usePatchOrgAssetsBulkTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.tags.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.org.assets.bulk.tags.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgAssetsBulkTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.org.assets.bulk.tags.$patch> },
      ) => parseResponse(client.org.assets.bulk.tags.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgAssetsTopHwCsvKey() {
  return ['org', '/org/assets/top.hw.csv'] as const
}

export function useGetOrgAssetsTopHwCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsTopHwCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.hw.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssetsTopHwCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsTopHwCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.hw.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgAssetsTopOsCsvKey() {
  return ['org', '/org/assets/top.os.csv'] as const
}

export function useGetOrgAssetsTopOsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsTopOsCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.os.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssetsTopOsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgAssetsTopOsCsvKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.os.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgAssetsTopTagsCsvKey() {
  return ['org', '/org/assets/top.tags.csv'] as const
}

export function useGetOrgAssetsTopTagsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
        >
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
        ? getGetOrgAssetsTopTagsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.tags.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssetsTopTagsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
        >
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
        ? getGetOrgAssetsTopTagsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.tags.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgAssetsTopTypesCsvKey() {
  return ['org', '/org/assets/top.types.csv'] as const
}

export function useGetOrgAssetsTopTypesCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
        >
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
        ? getGetOrgAssetsTopTypesCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.types.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssetsTopTypesCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
        >
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
        ? getGetOrgAssetsTopTypesCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets['top.types.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgAssetsAssetIdKey(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
) {
  return ['org', '/org/assets/:asset_id', args] as const
}

export function useGetOrgAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
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
        ? getGetOrgAssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
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
        ? getGetOrgAssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgAssetsAssetIdKey() {
  return ['org', '/org/assets/:asset_id', 'DELETE'] as const
}

export function useDeleteOrgAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']> },
      ) => parseResponse(client.org.assets[':asset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgAssetsAssetIdCommentsKey() {
  return ['org', '/org/assets/:asset_id/comments', 'PATCH'] as const
}

export function usePatchOrgAssetsAssetIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgAssetsAssetIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']> },
      ) => parseResponse(client.org.assets[':asset_id'].comments.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgAssetsAssetIdTagsKey() {
  return ['org', '/org/assets/:asset_id/tags', 'PATCH'] as const
}

export function usePatchOrgAssetsAssetIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgAssetsAssetIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']> },
      ) => parseResponse(client.org.assets[':asset_id'].tags.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgKeyKey() {
  return ['org', '/org/key'] as const
}

export function useGetOrgKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.key.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgKeyKey() {
  return ['org', '/org/key', 'DELETE'] as const
}

export function useDeleteOrgKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.org.key.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgKeyRotateKey() {
  return ['org', '/org/key/rotate', 'PATCH'] as const
}

export function usePatchOrgKeyRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.rotate.$patch>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgKeyRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.org.key.rotate.$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgServicesKey(args: InferRequestType<typeof client.org.services.$get>) {
  return ['org', '/org/services', args] as const
}

export function useGetOrgServices<TError = unknown>(
  args: InferRequestType<typeof client.org.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServices<TError = unknown>(
  args: InferRequestType<typeof client.org.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesSubnetStatsCsvKey(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
) {
  return ['org', '/org/services/subnet.stats.csv', args] as const
}

export function useGetOrgServicesSubnetStatsCsv<TError = unknown>(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
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
        ? getGetOrgServicesSubnetStatsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['subnet.stats.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesSubnetStatsCsv<TError = unknown>(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
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
        ? getGetOrgServicesSubnetStatsCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['subnet.stats.csv'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesTopProductsCsvKey() {
  return ['org', '/org/services/top.products.csv'] as const
}

export function useGetOrgServicesTopProductsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopProductsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org.services['top.products.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesTopProductsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopProductsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org.services['top.products.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesTopProtocolsCsvKey() {
  return ['org', '/org/services/top.protocols.csv'] as const
}

export function useGetOrgServicesTopProtocolsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopProtocolsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org.services['top.protocols.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesTopProtocolsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopProtocolsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org.services['top.protocols.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesTopTcpCsvKey() {
  return ['org', '/org/services/top.tcp.csv'] as const
}

export function useGetOrgServicesTopTcpCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopTcpCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['top.tcp.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesTopTcpCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopTcpCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['top.tcp.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesTopUdpCsvKey() {
  return ['org', '/org/services/top.udp.csv'] as const
}

export function useGetOrgServicesTopUdpCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopUdpCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['top.udp.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesTopUdpCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
        >
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
        ? getGetOrgServicesTopUdpCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services['top.udp.csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgServicesServiceIdKey(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
) {
  return ['org', '/org/services/:service_id', args] as const
}

export function useGetOrgServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
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
        ? getGetOrgServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services[':service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgServicesServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
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
        ? getGetOrgServicesServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.services[':service_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgServicesServiceIdKey() {
  return ['org', '/org/services/:service_id', 'DELETE'] as const
}

export function useDeleteOrgServicesServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.services)[':service_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgServicesServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.services)[':service_id']['$delete']> },
      ) => parseResponse(client.org.services[':service_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgSitesKey() {
  return ['org', '/org/sites'] as const
}

export function useGetOrgSites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgSitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.sites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgSites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgSitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.sites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgSitesKey() {
  return ['org', '/org/sites', 'PUT'] as const
}

export function usePutOrgSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.sites.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.sites.$put> }) =>
        parseResponse(client.org.sites.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgSitesSiteIdKey(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
) {
  return ['org', '/org/sites/:site_id', args] as const
}

export function useGetOrgSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrgSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.sites[':site_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrgSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.sites[':site_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgSitesSiteIdKey() {
  return ['org', '/org/sites/:site_id', 'DELETE'] as const
}

export function useDeleteOrgSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.sites)[':site_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.sites)[':site_id']['$delete']> },
      ) => parseResponse(client.org.sites[':site_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgSitesSiteIdKey() {
  return ['org', '/org/sites/:site_id', 'PATCH'] as const
}

export function usePatchOrgSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.sites)[':site_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.sites)[':site_id']['$patch']> },
      ) => parseResponse(client.org.sites[':site_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgSitesSiteIdImportKey() {
  return ['org', '/org/sites/:site_id/import', 'PUT'] as const
}

export function usePutOrgSitesSiteIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['import']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgSitesSiteIdImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']> },
      ) => parseResponse(client.org.sites[':site_id'].import.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgSitesSiteIdImportNessusKey() {
  return ['org', '/org/sites/:site_id/import/nessus', 'PUT'] as const
}

export function usePutOrgSitesSiteIdImportNessus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgSitesSiteIdImportNessusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>
        },
      ) => parseResponse(client.org.sites[':site_id'].import.nessus.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgSitesSiteIdScanKey() {
  return ['org', '/org/sites/:site_id/scan', 'PUT'] as const
}

export function usePutOrgSitesSiteIdScan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['scan']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgSitesSiteIdScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']> },
      ) => parseResponse(client.org.sites[':site_id'].scan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgTasksKey(args: InferRequestType<typeof client.org.tasks.$get>) {
  return ['org', '/org/tasks', args] as const
}

export function useGetOrgTasks<TError = unknown>(
  args: InferRequestType<typeof client.org.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgTasks<TError = unknown>(
  args: InferRequestType<typeof client.org.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgTasksTaskIdKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
) {
  return ['org', '/org/tasks/:task_id', args] as const
}

export function useGetOrgTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrgTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrgTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOrgTasksTaskIdKey() {
  return ['org', '/org/tasks/:task_id', 'PATCH'] as const
}

export function usePatchOrgTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']> },
      ) => parseResponse(client.org.tasks[':task_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgTasksTaskIdChangesKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/changes', args] as const
}

export function useGetOrgTasksTaskIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
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
        ? getGetOrgTasksTaskIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgTasksTaskIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
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
        ? getGetOrgTasksTaskIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgTasksTaskIdDataKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/data', args] as const
}

export function useGetOrgTasksTaskIdData<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
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
        ? getGetOrgTasksTaskIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgTasksTaskIdData<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
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
        ? getGetOrgTasksTaskIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgTasksTaskIdHideKey() {
  return ['org', '/org/tasks/:task_id/hide', 'POST'] as const
}

export function usePostOrgTasksTaskIdHide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['hide']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgTasksTaskIdHideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']> },
      ) => parseResponse(client.org.tasks[':task_id'].hide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgTasksTaskIdLogKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/log', args] as const
}

export function useGetOrgTasksTaskIdLog<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
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
        ? getGetOrgTasksTaskIdLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgTasksTaskIdLog<TError = unknown>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
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
        ? getGetOrgTasksTaskIdLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.tasks[':task_id'].log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgTasksTaskIdStopKey() {
  return ['org', '/org/tasks/:task_id/stop', 'POST'] as const
}

export function usePostOrgTasksTaskIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgTasksTaskIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']> },
      ) => parseResponse(client.org.tasks[':task_id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgWirelessKey(args: InferRequestType<typeof client.org.wireless.$get>) {
  return ['org', '/org/wireless', args] as const
}

export function useGetOrgWireless<TError = unknown>(
  args: InferRequestType<typeof client.org.wireless.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgWirelessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.wireless.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgWireless<TError = unknown>(
  args: InferRequestType<typeof client.org.wireless.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgWirelessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.wireless.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgWirelessWirelessIdKey(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
) {
  return ['org', '/org/wireless/:wireless_id', args] as const
}

export function useGetOrgWirelessWirelessId<TError = unknown>(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
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
        ? getGetOrgWirelessWirelessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.wireless[':wireless_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgWirelessWirelessId<TError = unknown>(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
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
        ? getGetOrgWirelessWirelessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.wireless[':wireless_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgWirelessWirelessIdKey() {
  return ['org', '/org/wireless/:wireless_id', 'DELETE'] as const
}

export function useDeleteOrgWirelessWirelessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgWirelessWirelessIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']> },
      ) => parseResponse(client.org.wireless[':wireless_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReleasesAgentVersionKey() {
  return ['releases', '/releases/agent/version'] as const
}

export function useGetReleasesAgentVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
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
        ? getGetReleasesAgentVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.agent.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReleasesAgentVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
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
        ? getGetReleasesAgentVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.agent.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReleasesPlatformVersionKey() {
  return ['releases', '/releases/platform/version'] as const
}

export function useGetReleasesPlatformVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
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
        ? getGetReleasesPlatformVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.platform.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReleasesPlatformVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
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
        ? getGetReleasesPlatformVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.platform.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReleasesScannerVersionKey() {
  return ['releases', '/releases/scanner/version'] as const
}

export function useGetReleasesScannerVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
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
        ? getGetReleasesScannerVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.scanner.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReleasesScannerVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
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
        ? getGetReleasesScannerVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.releases.scanner.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
