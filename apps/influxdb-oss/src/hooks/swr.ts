import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthorizationsKey() {
  return ['authorizations'] as const
}

export function getBackupKey() {
  return ['backup'] as const
}

export function getBucketsKey() {
  return ['buckets'] as const
}

export function getChecksKey() {
  return ['checks'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDbrpsKey() {
  return ['dbrps'] as const
}

export function getDebugKey() {
  return ['debug'] as const
}

export function getDeleteKey() {
  return ['delete'] as const
}

export function getFlagsKey() {
  return ['flags'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getNotificationEndpointsKey() {
  return ['notificationEndpoints'] as const
}

export function getNotificationRulesKey() {
  return ['notificationRules'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getRemotesKey() {
  return ['remotes'] as const
}

export function getReplicationsKey() {
  return ['replications'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getRestoreKey() {
  return ['restore'] as const
}

export function getScrapersKey() {
  return ['scrapers'] as const
}

export function getSetupKey() {
  return ['setup'] as const
}

export function getSigninKey() {
  return ['signin'] as const
}

export function getSignoutKey() {
  return ['signout'] as const
}

export function getSourcesKey() {
  return ['sources'] as const
}

export function getStacksKey() {
  return ['stacks'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getTelegrafKey() {
  return ['telegraf'] as const
}

export function getTelegrafsKey() {
  return ['telegrafs'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVariablesKey() {
  return ['variables'] as const
}

export function getWriteKey() {
  return ['write'] as const
}

export function getPostSigninKey() {
  return ['signin', '/signin', 'POST'] as const
}

export function usePostSignin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.signin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSigninKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signin.$post> }) =>
        parseResponse(client.signin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignoutKey() {
  return ['signout', '/signout', 'POST'] as const
}

export function usePostSignout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signout.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.signout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signout.$post> }) =>
        parseResponse(client.signout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPingKey() {
  return ['ping', '/ping'] as const
}

export function useGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadPingKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function useHeadPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.ping.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDbrpsKey(args: InferRequestType<typeof client.dbrps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dbrps', '/dbrps', keyArgs] as const
}

export function useGetDbrps<TError = unknown>(
  args: InferRequestType<typeof client.dbrps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbrpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dbrps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDbrps<TError = unknown>(
  args: InferRequestType<typeof client.dbrps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbrpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dbrps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDbrpsKey() {
  return ['dbrps', '/dbrps', 'POST'] as const
}

export function usePostDbrps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.dbrps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbrpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dbrps.$post> }) =>
        parseResponse(client.dbrps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbrpsDbrpIDKey(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dbrps', '/dbrps/:dbrpID', keyArgs] as const
}

export function useGetDbrpsDbrpID<TError = unknown>(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbrpsDbrpIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dbrps[':dbrpID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbrpsDbrpID<TError = unknown>(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbrpsDbrpIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dbrps[':dbrpID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDbrpsDbrpIDKey() {
  return ['dbrps', '/dbrps/:dbrpID', 'DELETE'] as const
}

export function useDeleteDbrpsDbrpID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbrpsDbrpIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']> },
      ) => parseResponse(client.dbrps[':dbrpID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDbrpsDbrpIDKey() {
  return ['dbrps', '/dbrps/:dbrpID', 'PATCH'] as const
}

export function usePatchDbrpsDbrpID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDbrpsDbrpIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']> },
      ) => parseResponse(client.dbrps[':dbrpID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelegrafPluginsKey(
  args: InferRequestType<typeof client.telegraf.plugins.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegraf', '/telegraf/plugins', keyArgs] as const
}

export function useGetTelegrafPlugins<TError = unknown>(
  args: InferRequestType<typeof client.telegraf.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelegrafPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegraf.plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafPlugins<TError = unknown>(
  args: InferRequestType<typeof client.telegraf.plugins.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTelegrafPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegraf.plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTelegrafsKey(args: InferRequestType<typeof client.telegrafs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs', keyArgs] as const
}

export function useGetTelegrafs<TError = unknown>(
  args: InferRequestType<typeof client.telegrafs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTelegrafsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafs<TError = unknown>(
  args: InferRequestType<typeof client.telegrafs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTelegrafsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTelegrafsKey() {
  return ['telegrafs', '/telegrafs', 'POST'] as const
}

export function usePostTelegrafs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.telegrafs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelegrafsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.telegrafs.$post> }) =>
        parseResponse(client.telegrafs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelegrafsTelegrafIDKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID', keyArgs] as const
}

export function useGetTelegrafsTelegrafID<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
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
        ? getGetTelegrafsTelegrafIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafsTelegrafID<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
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
        ? getGetTelegrafsTelegrafIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTelegrafsTelegrafIDKey() {
  return ['telegrafs', '/telegrafs/:telegrafID', 'PUT'] as const
}

export function usePutTelegrafsTelegrafID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTelegrafsTelegrafIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']> },
      ) => parseResponse(client.telegrafs[':telegrafID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTelegrafsTelegrafIDKey() {
  return ['telegrafs', '/telegrafs/:telegrafID', 'DELETE'] as const
}

export function useDeleteTelegrafsTelegrafID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTelegrafsTelegrafIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']> },
      ) => parseResponse(client.telegrafs[':telegrafID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTelegrafsTelegrafIDLabelsKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/labels', keyArgs] as const
}

export function useGetTelegrafsTelegrafIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
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
        ? getGetTelegrafsTelegrafIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafsTelegrafIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
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
        ? getGetTelegrafsTelegrafIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTelegrafsTelegrafIDLabelsKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/labels', 'POST'] as const
}

export function usePostTelegrafsTelegrafIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelegrafsTelegrafIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']> },
      ) => parseResponse(client.telegrafs[':telegrafID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTelegrafsTelegrafIDLabelsLabelIDKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteTelegrafsTelegrafIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTelegrafsTelegrafIDLabelsLabelIDKey()
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
            (typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.telegrafs[':telegrafID'].labels[':labelID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTelegrafsTelegrafIDMembersKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/members', keyArgs] as const
}

export function useGetTelegrafsTelegrafIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
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
        ? getGetTelegrafsTelegrafIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafsTelegrafIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
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
        ? getGetTelegrafsTelegrafIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTelegrafsTelegrafIDMembersKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/members', 'POST'] as const
}

export function usePostTelegrafsTelegrafIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelegrafsTelegrafIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']> },
      ) => parseResponse(client.telegrafs[':telegrafID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTelegrafsTelegrafIDMembersUserIDKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/members/:userID', 'DELETE'] as const
}

export function useDeleteTelegrafsTelegrafIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTelegrafsTelegrafIDMembersUserIDKey()
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
            (typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.telegrafs[':telegrafID'].members[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTelegrafsTelegrafIDOwnersKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/owners', keyArgs] as const
}

export function useGetTelegrafsTelegrafIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
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
        ? getGetTelegrafsTelegrafIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTelegrafsTelegrafIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
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
        ? getGetTelegrafsTelegrafIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.telegrafs[':telegrafID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTelegrafsTelegrafIDOwnersKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/owners', 'POST'] as const
}

export function usePostTelegrafsTelegrafIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelegrafsTelegrafIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']> },
      ) => parseResponse(client.telegrafs[':telegrafID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTelegrafsTelegrafIDOwnersUserIDKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/owners/:userID', 'DELETE'] as const
}

export function useDeleteTelegrafsTelegrafIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTelegrafsTelegrafIDOwnersUserIDKey()
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
            (typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.telegrafs[':telegrafID'].owners[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVariablesVariableIDLabelsKey(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables/:variableID/labels', keyArgs] as const
}

export function useGetVariablesVariableIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
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
        ? getGetVariablesVariableIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables[':variableID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariablesVariableIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
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
        ? getGetVariablesVariableIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables[':variableID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVariablesVariableIDLabelsKey() {
  return ['variables', '/variables/:variableID/labels', 'POST'] as const
}

export function usePostVariablesVariableIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVariablesVariableIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']> },
      ) => parseResponse(client.variables[':variableID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVariablesVariableIDLabelsLabelIDKey() {
  return ['variables', '/variables/:variableID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteVariablesVariableIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVariablesVariableIDLabelsLabelIDKey()
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
            (typeof client.variables)[':variableID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.variables[':variableID'].labels[':labelID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWriteKey() {
  return ['write', '/write', 'POST'] as const
}

export function usePostWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.write.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.write.$post> }) =>
        parseResponse(client.write.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteKey() {
  return ['delete', '/delete', 'POST'] as const
}

export function usePostDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delete.$post> }) =>
        parseResponse(client.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsKey(args: InferRequestType<typeof client.labels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels', keyArgs] as const
}

export function useGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLabelsKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function usePostLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.labels.$post> }) =>
        parseResponse(client.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsLabelIDKey(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/:labelID', keyArgs] as const
}

export function useGetLabelsLabelID<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsLabelIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':labelID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsLabelID<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsLabelIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':labelID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLabelsLabelIDKey() {
  return ['labels', '/labels/:labelID', 'DELETE'] as const
}

export function useDeleteLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsLabelIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':labelID']['$delete']> },
      ) => parseResponse(client.labels[':labelID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLabelsLabelIDKey() {
  return ['labels', '/labels/:labelID', 'PATCH'] as const
}

export function usePatchLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':labelID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLabelsLabelIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':labelID']['$patch']> },
      ) => parseResponse(client.labels[':labelID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIDKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID', keyArgs] as const
}

export function useGetDashboardsDashboardID<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
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
        ? getGetDashboardsDashboardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardID<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
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
        ? getGetDashboardsDashboardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIDKey() {
  return ['dashboards', '/dashboards/:dashboardID', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']> },
      ) => parseResponse(client.dashboards[':dashboardID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDashboardsDashboardIDKey() {
  return ['dashboards', '/dashboards/:dashboardID', 'PATCH'] as const
}

export function usePatchDashboardsDashboardID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDashboardsDashboardIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']> },
      ) => parseResponse(client.dashboards[':dashboardID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDashboardsDashboardIDCellsKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells', 'PUT'] as const
}

export function usePutDashboardsDashboardIDCells<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDashboardsDashboardIDCellsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']> },
      ) => parseResponse(client.dashboards[':dashboardID'].cells.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardsDashboardIDCellsKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells', 'POST'] as const
}

export function usePostDashboardsDashboardIDCells<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsDashboardIDCellsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']> },
      ) => parseResponse(client.dashboards[':dashboardID'].cells.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIDCellsCellIDKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardIDCellsCellID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIDCellsCellIDKey()
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
            (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].cells[':cellID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDashboardsDashboardIDCellsCellIDKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID', 'PATCH'] as const
}

export function usePatchDashboardsDashboardIDCellsCellID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDashboardsDashboardIDCellsCellIDKey()
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
            (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].cells[':cellID'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIDCellsCellIDViewKey(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID/view', keyArgs] as const
}

export function useGetDashboardsDashboardIDCellsCellIDView<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
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
        ? getGetDashboardsDashboardIDCellsCellIDViewKey(args)
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
                (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
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
          client.dashboards[':dashboardID'].cells[':cellID'].view.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardIDCellsCellIDView<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
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
        ? getGetDashboardsDashboardIDCellsCellIDViewKey(args)
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
                (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
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
          client.dashboards[':dashboardID'].cells[':cellID'].view.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDashboardsDashboardIDCellsCellIDViewKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID/view', 'PATCH'] as const
}

export function usePatchDashboardsDashboardIDCellsCellIDView<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDashboardsDashboardIDCellsCellIDViewKey()
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
            (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].cells[':cellID'].view.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIDLabelsKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/labels', keyArgs] as const
}

export function useGetDashboardsDashboardIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
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
        ? getGetDashboardsDashboardIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
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
        ? getGetDashboardsDashboardIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsDashboardIDLabelsKey() {
  return ['dashboards', '/dashboards/:dashboardID/labels', 'POST'] as const
}

export function usePostDashboardsDashboardIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsDashboardIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']> },
      ) => parseResponse(client.dashboards[':dashboardID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIDLabelsLabelIDKey() {
  return ['dashboards', '/dashboards/:dashboardID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIDLabelsLabelIDKey()
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
            (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].labels[':labelID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIDMembersKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/members', keyArgs] as const
}

export function useGetDashboardsDashboardIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
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
        ? getGetDashboardsDashboardIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards[':dashboardID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
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
        ? getGetDashboardsDashboardIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards[':dashboardID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsDashboardIDMembersKey() {
  return ['dashboards', '/dashboards/:dashboardID/members', 'POST'] as const
}

export function usePostDashboardsDashboardIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsDashboardIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>
        },
      ) => parseResponse(client.dashboards[':dashboardID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIDMembersUserIDKey() {
  return ['dashboards', '/dashboards/:dashboardID/members/:userID', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIDMembersUserIDKey()
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
            (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].members[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIDOwnersKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/owners', keyArgs] as const
}

export function useGetDashboardsDashboardIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
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
        ? getGetDashboardsDashboardIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
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
        ? getGetDashboardsDashboardIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsDashboardIDOwnersKey() {
  return ['dashboards', '/dashboards/:dashboardID/owners', 'POST'] as const
}

export function usePostDashboardsDashboardIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsDashboardIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']> },
      ) => parseResponse(client.dashboards[':dashboardID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIDOwnersUserIDKey() {
  return ['dashboards', '/dashboards/:dashboardID/owners/:userID', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIDOwnersUserIDKey()
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
            (typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dashboards[':dashboardID'].owners[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueryAstKey() {
  return ['query', '/query/ast', 'POST'] as const
}

export function usePostQueryAst<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.ast.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.ast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryAstKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.ast.$post> }) =>
        parseResponse(client.query.ast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuerySuggestionsKey(
  args: InferRequestType<typeof client.query.suggestions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/suggestions', keyArgs] as const
}

export function useGetQuerySuggestions<TError = unknown>(
  args: InferRequestType<typeof client.query.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuerySuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuerySuggestions<TError = unknown>(
  args: InferRequestType<typeof client.query.suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuerySuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuerySuggestionsNameKey(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/suggestions/:name', keyArgs] as const
}

export function useGetQuerySuggestionsName<TError = unknown>(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
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
        ? getGetQuerySuggestionsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.suggestions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuerySuggestionsName<TError = unknown>(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
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
        ? getGetQuerySuggestionsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.suggestions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryAnalyzeKey() {
  return ['query', '/query/analyze', 'POST'] as const
}

export function usePostQueryAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.analyze.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.query.analyze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.analyze.$post> }) =>
        parseResponse(client.query.analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryKey() {
  return ['query', '/query', 'POST'] as const
}

export function usePostQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.$post> }) =>
        parseResponse(client.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketsKey(args: InferRequestType<typeof client.buckets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets', keyArgs] as const
}

export function useGetBuckets<TError = unknown>(
  args: InferRequestType<typeof client.buckets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.buckets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBuckets<TError = unknown>(
  args: InferRequestType<typeof client.buckets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBucketsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.buckets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBucketsKey() {
  return ['buckets', '/buckets', 'POST'] as const
}

export function usePostBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.buckets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.buckets.$post> }) =>
        parseResponse(client.buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketsBucketIDKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID', keyArgs] as const
}

export function useGetBucketsBucketID<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketsBucketIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketsBucketID<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketsBucketIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBucketsBucketIDKey() {
  return ['buckets', '/buckets/:bucketID', 'DELETE'] as const
}

export function useDeleteBucketsBucketID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketsBucketIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckets)[':bucketID']['$delete']> },
      ) => parseResponse(client.buckets[':bucketID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBucketsBucketIDKey() {
  return ['buckets', '/buckets/:bucketID', 'PATCH'] as const
}

export function usePatchBucketsBucketID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBucketsBucketIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckets)[':bucketID']['$patch']> },
      ) => parseResponse(client.buckets[':bucketID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketsBucketIDLabelsKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/labels', keyArgs] as const
}

export function useGetBucketsBucketIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
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
        ? getGetBucketsBucketIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketsBucketIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
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
        ? getGetBucketsBucketIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBucketsBucketIDLabelsKey() {
  return ['buckets', '/buckets/:bucketID/labels', 'POST'] as const
}

export function usePostBucketsBucketIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketsBucketIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']> },
      ) => parseResponse(client.buckets[':bucketID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketsBucketIDLabelsLabelIDKey() {
  return ['buckets', '/buckets/:bucketID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteBucketsBucketIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketsBucketIDLabelsLabelIDKey()
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
            (typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(client.buckets[':bucketID'].labels[':labelID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketsBucketIDMembersKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/members', keyArgs] as const
}

export function useGetBucketsBucketIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
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
        ? getGetBucketsBucketIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketsBucketIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
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
        ? getGetBucketsBucketIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBucketsBucketIDMembersKey() {
  return ['buckets', '/buckets/:bucketID/members', 'POST'] as const
}

export function usePostBucketsBucketIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketsBucketIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']> },
      ) => parseResponse(client.buckets[':bucketID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketsBucketIDMembersUserIDKey() {
  return ['buckets', '/buckets/:bucketID/members/:userID', 'DELETE'] as const
}

export function useDeleteBucketsBucketIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketsBucketIDMembersUserIDKey()
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
            (typeof client.buckets)[':bucketID']['members'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(client.buckets[':bucketID'].members[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBucketsBucketIDOwnersKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/owners', keyArgs] as const
}

export function useGetBucketsBucketIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
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
        ? getGetBucketsBucketIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketsBucketIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
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
        ? getGetBucketsBucketIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.buckets[':bucketID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBucketsBucketIDOwnersKey() {
  return ['buckets', '/buckets/:bucketID/owners', 'POST'] as const
}

export function usePostBucketsBucketIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBucketsBucketIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']> },
      ) => parseResponse(client.buckets[':bucketID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBucketsBucketIDOwnersUserIDKey() {
  return ['buckets', '/buckets/:bucketID/owners/:userID', 'DELETE'] as const
}

export function useDeleteBucketsBucketIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBucketsBucketIDOwnersUserIDKey()
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
            (typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']
          >
        },
      ) => parseResponse(client.buckets[':bucketID'].owners[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsKey(args: InferRequestType<typeof client.orgs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs', keyArgs] as const
}

export function useGetOrgs<TError = unknown>(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orgs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrgs<TError = unknown>(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orgs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOrgsKey() {
  return ['orgs', '/orgs', 'POST'] as const
}

export function usePostOrgs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.orgs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orgs.$post> }) =>
        parseResponse(client.orgs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIDKey(args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID', keyArgs] as const
}

export function useGetOrgsOrgID<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgID<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgsOrgIDKey() {
  return ['orgs', '/orgs/:orgID', 'DELETE'] as const
}

export function useDeleteOrgsOrgID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['$delete']> },
      ) => parseResponse(client.orgs[':orgID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgsOrgIDKey() {
  return ['orgs', '/orgs/:orgID', 'PATCH'] as const
}

export function usePatchOrgsOrgID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgsOrgIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['$patch']> },
      ) => parseResponse(client.orgs[':orgID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIDSecretsKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/secrets', keyArgs] as const
}

export function useGetOrgsOrgIDSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
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
        ? getGetOrgsOrgIDSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIDSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
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
        ? getGetOrgsOrgIDSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOrgsOrgIDSecretsKey() {
  return ['orgs', '/orgs/:orgID/secrets', 'PATCH'] as const
}

export function usePatchOrgsOrgIDSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgsOrgIDSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']> },
      ) => parseResponse(client.orgs[':orgID'].secrets.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIDMembersKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/members', keyArgs] as const
}

export function useGetOrgsOrgIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
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
        ? getGetOrgsOrgIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
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
        ? getGetOrgsOrgIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsOrgIDMembersKey() {
  return ['orgs', '/orgs/:orgID/members', 'POST'] as const
}

export function usePostOrgsOrgIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsOrgIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']> },
      ) => parseResponse(client.orgs[':orgID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgsOrgIDMembersUserIDKey() {
  return ['orgs', '/orgs/:orgID/members/:userID', 'DELETE'] as const
}

export function useDeleteOrgsOrgIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIDMembersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>
        },
      ) => parseResponse(client.orgs[':orgID'].members[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIDOwnersKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/owners', keyArgs] as const
}

export function useGetOrgsOrgIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
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
        ? getGetOrgsOrgIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
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
        ? getGetOrgsOrgIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsOrgIDOwnersKey() {
  return ['orgs', '/orgs/:orgID/owners', 'POST'] as const
}

export function usePostOrgsOrgIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsOrgIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']> },
      ) => parseResponse(client.orgs[':orgID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgsOrgIDOwnersUserIDKey() {
  return ['orgs', '/orgs/:orgID/owners/:userID', 'DELETE'] as const
}

export function useDeleteOrgsOrgIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIDOwnersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>
        },
      ) => parseResponse(client.orgs[':orgID'].owners[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgsOrgIDSecretsDeleteKey() {
  return ['orgs', '/orgs/:orgID/secrets/delete', 'POST'] as const
}

export function usePostOrgsOrgIDSecretsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsOrgIDSecretsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']> },
      ) => parseResponse(client.orgs[':orgID'].secrets.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgsOrgIDSecretsSecretIDKey() {
  return ['orgs', '/orgs/:orgID/secrets/:secretID', 'DELETE'] as const
}

export function useDeleteOrgsOrgIDSecretsSecretID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIDSecretsSecretIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>
        },
      ) => parseResponse(client.orgs[':orgID'].secrets[':secretID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcesKey(args: InferRequestType<typeof client.resources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources', keyArgs] as const
}

export function useGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResources<TError = unknown>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStacksKey(args: InferRequestType<typeof client.stacks.$get>) {
  return ['stacks', '/stacks', args] as const
}

export function useGetStacks<TError = unknown>(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stacks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStacks<TError = unknown>(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stacks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostStacksKey() {
  return ['stacks', '/stacks', 'POST'] as const
}

export function usePostStacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.stacks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stacks.$post> }) =>
        parseResponse(client.stacks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStacksStackIdKey(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
) {
  return ['stacks', '/stacks/:stack_id', args] as const
}

export function useGetStacksStackId<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksStackIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':stack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStacksStackId<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksStackIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':stack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStacksStackIdKey() {
  return ['stacks', '/stacks/:stack_id', 'DELETE'] as const
}

export function useDeleteStacksStackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':stack_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStacksStackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':stack_id']['$delete']> },
      ) => parseResponse(client.stacks[':stack_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStacksStackIdKey() {
  return ['stacks', '/stacks/:stack_id', 'PATCH'] as const
}

export function usePatchStacksStackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStacksStackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':stack_id']['$patch']> },
      ) => parseResponse(client.stacks[':stack_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksStackIdUninstallKey() {
  return ['stacks', '/stacks/:stack_id/uninstall', 'POST'] as const
}

export function usePostStacksStackIdUninstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksStackIdUninstallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']> },
      ) => parseResponse(client.stacks[':stack_id'].uninstall.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesApplyKey() {
  return ['templates', '/templates/apply', 'POST'] as const
}

export function usePostTemplatesApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.apply.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.apply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.apply.$post> }) =>
        parseResponse(client.templates.apply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesExportKey() {
  return ['templates', '/templates/export', 'POST'] as const
}

export function usePostTemplatesExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.export.$post> }) =>
        parseResponse(client.templates.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDRunsKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs', keyArgs] as const
}

export function useGetTasksTaskIDRuns<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
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
        ? getGetTasksTaskIDRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDRuns<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
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
        ? getGetTasksTaskIDRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIDRunsKey() {
  return ['tasks', '/tasks/:taskID/runs', 'POST'] as const
}

export function usePostTasksTaskIDRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIDRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']> },
      ) => parseResponse(client.tasks[':taskID'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDRunsRunIDKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs/:runID', keyArgs] as const
}

export function useGetTasksTaskIDRunsRunID<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
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
        ? getGetTasksTaskIDRunsRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].runs[':runID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDRunsRunID<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
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
        ? getGetTasksTaskIDRunsRunIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].runs[':runID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTasksTaskIDRunsRunIDKey() {
  return ['tasks', '/tasks/:taskID/runs/:runID', 'DELETE'] as const
}

export function useDeleteTasksTaskIDRunsRunID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIDRunsRunIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']> },
      ) => parseResponse(client.tasks[':taskID'].runs[':runID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskIDRunsRunIDRetryKey() {
  return ['tasks', '/tasks/:taskID/runs/:runID/retry', 'POST'] as const
}

export function usePostTasksTaskIDRunsRunIDRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIDRunsRunIDRetryKey()
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
            (typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']
          >
        },
      ) => parseResponse(client.tasks[':taskID'].runs[':runID'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDLogsKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/logs', keyArgs] as const
}

export function useGetTasksTaskIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
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
        ? getGetTasksTaskIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
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
        ? getGetTasksTaskIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksTaskIDRunsRunIDLogsKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs/:runID/logs', keyArgs] as const
}

export function useGetTasksTaskIDRunsRunIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
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
        ? getGetTasksTaskIDRunsRunIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks[':taskID'].runs[':runID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDRunsRunIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
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
        ? getGetTasksTaskIDRunsRunIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks[':taskID'].runs[':runID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksTaskIDLabelsKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/labels', keyArgs] as const
}

export function useGetTasksTaskIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
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
        ? getGetTasksTaskIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
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
        ? getGetTasksTaskIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIDLabelsKey() {
  return ['tasks', '/tasks/:taskID/labels', 'POST'] as const
}

export function usePostTasksTaskIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']> },
      ) => parseResponse(client.tasks[':taskID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskIDLabelsLabelIDKey() {
  return ['tasks', '/tasks/:taskID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteTasksTaskIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIDLabelsLabelIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>
        },
      ) => parseResponse(client.tasks[':taskID'].labels[':labelID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFlagsKey(args: InferRequestType<typeof client.flags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['flags', '/flags', keyArgs] as const
}

export function useGetFlags<TError = unknown>(
  args: InferRequestType<typeof client.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.flags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFlags<TError = unknown>(
  args: InferRequestType<typeof client.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.flags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMeKey(args: InferRequestType<typeof client.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['me', '/me', keyArgs] as const
}

export function useGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutMePasswordKey() {
  return ['me', '/me/password', 'PUT'] as const
}

export function usePutMePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.password.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.me.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.password.$put> }) =>
        parseResponse(client.me.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDMembersKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/members', keyArgs] as const
}

export function useGetTasksTaskIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
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
        ? getGetTasksTaskIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
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
        ? getGetTasksTaskIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIDMembersKey() {
  return ['tasks', '/tasks/:taskID/members', 'POST'] as const
}

export function usePostTasksTaskIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']> },
      ) => parseResponse(client.tasks[':taskID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskIDMembersUserIDKey() {
  return ['tasks', '/tasks/:taskID/members/:userID', 'DELETE'] as const
}

export function useDeleteTasksTaskIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIDMembersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>
        },
      ) => parseResponse(client.tasks[':taskID'].members[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDOwnersKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/owners', keyArgs] as const
}

export function useGetTasksTaskIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
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
        ? getGetTasksTaskIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
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
        ? getGetTasksTaskIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksTaskIDOwnersKey() {
  return ['tasks', '/tasks/:taskID/owners', 'POST'] as const
}

export function usePostTasksTaskIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']> },
      ) => parseResponse(client.tasks[':taskID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksTaskIDOwnersUserIDKey() {
  return ['tasks', '/tasks/:taskID/owners/:userID', 'DELETE'] as const
}

export function useDeleteTasksTaskIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIDOwnersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>
        },
      ) => parseResponse(client.tasks[':taskID'].owners[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUserIDPasswordKey() {
  return ['users', '/users/:userID/password', 'PUT'] as const
}

export function usePutUsersUserIDPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userID']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userID']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIDPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userID']['password']['$put']> },
      ) => parseResponse(client.users[':userID'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIDPasswordKey() {
  return ['users', '/users/:userID/password', 'POST'] as const
}

export function usePostUsersUserIDPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userID']['password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userID']['password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIDPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userID']['password']['$post']> },
      ) => parseResponse(client.users[':userID'].password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksKey(args: InferRequestType<typeof client.checks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks', keyArgs] as const
}

export function useGetChecks<TError = unknown>(
  args: InferRequestType<typeof client.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.checks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChecks<TError = unknown>(
  args: InferRequestType<typeof client.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.checks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChecksKey() {
  return ['checks', '/checks', 'POST'] as const
}

export function usePostChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checks.$post> }) =>
        parseResponse(client.checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksCheckIDKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID', keyArgs] as const
}

export function useGetChecksCheckID<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksCheckIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksCheckID<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksCheckIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChecksCheckIDKey() {
  return ['checks', '/checks/:checkID', 'PUT'] as const
}

export function usePutChecksCheckID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':checkID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecksCheckIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checks)[':checkID']['$put']> },
      ) => parseResponse(client.checks[':checkID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChecksCheckIDKey() {
  return ['checks', '/checks/:checkID', 'DELETE'] as const
}

export function useDeleteChecksCheckID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':checkID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecksCheckIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checks)[':checkID']['$delete']> },
      ) => parseResponse(client.checks[':checkID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChecksCheckIDKey() {
  return ['checks', '/checks/:checkID', 'PATCH'] as const
}

export function usePatchChecksCheckID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':checkID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChecksCheckIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checks)[':checkID']['$patch']> },
      ) => parseResponse(client.checks[':checkID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksCheckIDLabelsKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID/labels', keyArgs] as const
}

export function useGetChecksCheckIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
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
        ? getGetChecksCheckIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksCheckIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
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
        ? getGetChecksCheckIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChecksCheckIDLabelsKey() {
  return ['checks', '/checks/:checkID/labels', 'POST'] as const
}

export function usePostChecksCheckIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecksCheckIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']> },
      ) => parseResponse(client.checks[':checkID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChecksCheckIDLabelsLabelIDKey() {
  return ['checks', '/checks/:checkID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteChecksCheckIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecksCheckIDLabelsLabelIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>
        },
      ) => parseResponse(client.checks[':checkID'].labels[':labelID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationRulesKey(
  args: InferRequestType<typeof client.notificationRules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules', keyArgs] as const
}

export function useGetNotificationRules<TError = unknown>(
  args: InferRequestType<typeof client.notificationRules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationRules<TError = unknown>(
  args: InferRequestType<typeof client.notificationRules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationRules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationRulesKey() {
  return ['notificationRules', '/notificationRules', 'POST'] as const
}

export function usePostNotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.notificationRules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notificationRules.$post> }) =>
        parseResponse(client.notificationRules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecksCheckIDQueryKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID/query', keyArgs] as const
}

export function useGetChecksCheckIDQuery<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
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
        ? getGetChecksCheckIDQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksCheckIDQuery<TError = unknown>(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
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
        ? getGetChecksCheckIDQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checks[':checkID'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationRulesRuleIDKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID', keyArgs] as const
}

export function useGetNotificationRulesRuleID<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
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
        ? getGetNotificationRulesRuleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationRules[':ruleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationRulesRuleID<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
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
        ? getGetNotificationRulesRuleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationRules[':ruleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationRulesRuleIDKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'PUT'] as const
}

export function usePutNotificationRulesRuleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationRulesRuleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']> },
      ) => parseResponse(client.notificationRules[':ruleID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationRulesRuleIDKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'DELETE'] as const
}

export function useDeleteNotificationRulesRuleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationRulesRuleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']> },
      ) => parseResponse(client.notificationRules[':ruleID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationRulesRuleIDKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'PATCH'] as const
}

export function usePatchNotificationRulesRuleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationRulesRuleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']> },
      ) => parseResponse(client.notificationRules[':ruleID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationRulesRuleIDLabelsKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID/labels', keyArgs] as const
}

export function useGetNotificationRulesRuleIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
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
        ? getGetNotificationRulesRuleIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationRules[':ruleID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationRulesRuleIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
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
        ? getGetNotificationRulesRuleIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationRules[':ruleID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationRulesRuleIDLabelsKey() {
  return ['notificationRules', '/notificationRules/:ruleID/labels', 'POST'] as const
}

export function usePostNotificationRulesRuleIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationRulesRuleIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>
        },
      ) => parseResponse(client.notificationRules[':ruleID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationRulesRuleIDLabelsLabelIDKey() {
  return ['notificationRules', '/notificationRules/:ruleID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteNotificationRulesRuleIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationRulesRuleIDLabelsLabelIDKey()
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
            (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.notificationRules[':ruleID'].labels[':labelID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationRulesRuleIDQueryKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID/query', keyArgs] as const
}

export function useGetNotificationRulesRuleIDQuery<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
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
        ? getGetNotificationRulesRuleIDQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationRules[':ruleID'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationRulesRuleIDQuery<TError = unknown>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
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
        ? getGetNotificationRulesRuleIDQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationRules[':ruleID'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationEndpointsKey(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints', keyArgs] as const
}

export function useGetNotificationEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notificationEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationEndpointsKey() {
  return ['notificationEndpoints', '/notificationEndpoints', 'POST'] as const
}

export function usePostNotificationEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notificationEndpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notificationEndpoints.$post> },
      ) => parseResponse(client.notificationEndpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationEndpointsEndpointIDKey(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', keyArgs] as const
}

export function useGetNotificationEndpointsEndpointID<TError = unknown>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
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
        ? getGetNotificationEndpointsEndpointIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationEndpoints[':endpointID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationEndpointsEndpointID<TError = unknown>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
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
        ? getGetNotificationEndpointsEndpointIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationEndpoints[':endpointID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationEndpointsEndpointIDKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'PUT'] as const
}

export function usePutNotificationEndpointsEndpointID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationEndpointsEndpointIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']> },
      ) => parseResponse(client.notificationEndpoints[':endpointID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationEndpointsEndpointIDKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'DELETE'] as const
}

export function useDeleteNotificationEndpointsEndpointID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationEndpointsEndpointIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>
        },
      ) => parseResponse(client.notificationEndpoints[':endpointID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNotificationEndpointsEndpointIDKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'PATCH'] as const
}

export function usePatchNotificationEndpointsEndpointID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNotificationEndpointsEndpointIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>
        },
      ) => parseResponse(client.notificationEndpoints[':endpointID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationEndpointsEndpointIDLabelsKey(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID/labels', keyArgs] as const
}

export function useGetNotificationEndpointsEndpointIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
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
        ? getGetNotificationEndpointsEndpointIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationEndpoints[':endpointID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationEndpointsEndpointIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
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
        ? getGetNotificationEndpointsEndpointIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notificationEndpoints[':endpointID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationEndpointsEndpointIDLabelsKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID/labels', 'POST'] as const
}

export function usePostNotificationEndpointsEndpointIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationEndpointsEndpointIDLabelsKey()
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
            (typeof client.notificationEndpoints)[':endpointID']['labels']['$post']
          >
        },
      ) =>
        parseResponse(client.notificationEndpoints[':endpointID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationEndpointsEndpointIDLabelsLabelIDKey() {
  return [
    'notificationEndpoints',
    '/notificationEndpoints/:endpointID/labels/:labelID',
    'DELETE',
  ] as const
}

export function useDeleteNotificationEndpointsEndpointIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationEndpointsEndpointIDLabelsLabelIDKey()
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
            (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.notificationEndpoints[':endpointID'].labels[':labelID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationsKey(args: InferRequestType<typeof client.authorizations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['authorizations', '/authorizations', keyArgs] as const
}

export function useGetAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthorizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthorizationsKey() {
  return ['authorizations', '/authorizations', 'POST'] as const
}

export function usePostAuthorizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorizations.$post> }) =>
        parseResponse(client.authorizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizationsAuthIDKey(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizations', '/authorizations/:authID', keyArgs] as const
}

export function useGetAuthorizationsAuthID<TError = unknown>(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
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
        ? getGetAuthorizationsAuthIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizations[':authID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizationsAuthID<TError = unknown>(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
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
        ? getGetAuthorizationsAuthIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizations[':authID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthorizationsAuthIDKey() {
  return ['authorizations', '/authorizations/:authID', 'DELETE'] as const
}

export function useDeleteAuthorizationsAuthID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.authorizations)[':authID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationsAuthIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authorizations)[':authID']['$delete']> },
      ) => parseResponse(client.authorizations[':authID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthorizationsAuthIDKey() {
  return ['authorizations', '/authorizations/:authID', 'PATCH'] as const
}

export function usePatchAuthorizationsAuthID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizations)[':authID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorizations)[':authID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthorizationsAuthIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authorizations)[':authID']['$patch']> },
      ) => parseResponse(client.authorizations[':authID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDebugPprofAllKey(args: InferRequestType<typeof client.debug.pprof.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/all', keyArgs] as const
}

export function useGetDebugPprofAll<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugPprofAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofAll<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugPprofAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofAllocsKey(
  args: InferRequestType<typeof client.debug.pprof.allocs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/allocs', keyArgs] as const
}

export function useGetDebugPprofAllocs<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.allocs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofAllocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.allocs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofAllocs<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.allocs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofAllocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.allocs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofBlockKey(
  args: InferRequestType<typeof client.debug.pprof.block.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/block', keyArgs] as const
}

export function useGetDebugPprofBlock<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.block.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofBlockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.block.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofBlock<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.block.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofBlockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.block.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofCmdlineKey(
  args: InferRequestType<typeof client.debug.pprof.cmdline.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/cmdline', keyArgs] as const
}

export function useGetDebugPprofCmdline<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.cmdline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofCmdlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.cmdline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofCmdline<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.cmdline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofCmdlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.cmdline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofGoroutineKey(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/goroutine', keyArgs] as const
}

export function useGetDebugPprofGoroutine<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofGoroutineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.goroutine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofGoroutine<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofGoroutineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.goroutine.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofHeapKey(
  args: InferRequestType<typeof client.debug.pprof.heap.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/heap', keyArgs] as const
}

export function useGetDebugPprofHeap<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.heap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugPprofHeapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.heap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofHeap<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.heap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugPprofHeapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.heap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofMutexKey(
  args: InferRequestType<typeof client.debug.pprof.mutex.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/mutex', keyArgs] as const
}

export function useGetDebugPprofMutex<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.mutex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofMutexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.mutex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofMutex<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.mutex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofMutexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.mutex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofProfileKey(
  args: InferRequestType<typeof client.debug.pprof.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/profile', keyArgs] as const
}

export function useGetDebugPprofProfile<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofProfile<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofThreadcreateKey(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/threadcreate', keyArgs] as const
}

export function useGetDebugPprofThreadcreate<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofThreadcreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.threadcreate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofThreadcreate<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofThreadcreateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.threadcreate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDebugPprofTraceKey(
  args: InferRequestType<typeof client.debug.pprof.trace.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/trace', keyArgs] as const
}

export function useGetDebugPprofTrace<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.trace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugPprofTrace<TError = unknown>(
  args: InferRequestType<typeof client.debug.pprof.trace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDebugPprofTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug.pprof.trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthKey(args: InferRequestType<typeof client.health.$get>) {
  const { header: _, ...keyArgs } = args
  return ['health', '/health', keyArgs] as const
}

export function useGetHealth<TError = unknown>(
  args: InferRequestType<typeof client.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.health.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHealth<TError = unknown>(
  args: InferRequestType<typeof client.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.health.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMetricsKey(args: InferRequestType<typeof client.metrics.$get>) {
  const { header: _, ...keyArgs } = args
  return ['metrics', '/metrics', keyArgs] as const
}

export function useGetMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metrics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMetrics<TError = unknown>(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.metrics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetReadyKey(args: InferRequestType<typeof client.ready.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ready', '/ready', keyArgs] as const
}

export function useGetReady<TError = unknown>(
  args: InferRequestType<typeof client.ready.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ready.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReady<TError = unknown>(
  args: InferRequestType<typeof client.ready.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ready.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users', keyArgs] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIDKey(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:userID', keyArgs] as const
}

export function useGetUsersUserID<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserID<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIDKey() {
  return ['users', '/users/:userID', 'DELETE'] as const
}

export function useDeleteUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userID']['$delete']> },
      ) => parseResponse(client.users[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIDKey() {
  return ['users', '/users/:userID', 'PATCH'] as const
}

export function usePatchUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userID']['$patch']> },
      ) => parseResponse(client.users[':userID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupKey(args: InferRequestType<typeof client.setup.$get>) {
  const { header: _, ...keyArgs } = args
  return ['setup', '/setup', keyArgs] as const
}

export function useGetSetup<TError = unknown>(
  args: InferRequestType<typeof client.setup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setup.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSetup<TError = unknown>(
  args: InferRequestType<typeof client.setup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setup.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSetupKey() {
  return ['setup', '/setup', 'POST'] as const
}

export function usePostSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.setup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.$post> }) =>
        parseResponse(client.setup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVariablesKey(args: InferRequestType<typeof client.variables.$get>) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables', keyArgs] as const
}

export function useGetVariables<TError = unknown>(
  args: InferRequestType<typeof client.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariables<TError = unknown>(
  args: InferRequestType<typeof client.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVariablesKey() {
  return ['variables', '/variables', 'POST'] as const
}

export function usePostVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.variables.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.variables.$post> }) =>
        parseResponse(client.variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVariablesVariableIDKey(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables/:variableID', keyArgs] as const
}

export function useGetVariablesVariableID<TError = unknown>(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
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
        ? getGetVariablesVariableIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables[':variableID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariablesVariableID<TError = unknown>(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
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
        ? getGetVariablesVariableIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variables[':variableID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVariablesVariableIDKey() {
  return ['variables', '/variables/:variableID', 'PUT'] as const
}

export function usePutVariablesVariableID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.variables)[':variableID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVariablesVariableIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.variables)[':variableID']['$put']> },
      ) => parseResponse(client.variables[':variableID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVariablesVariableIDKey() {
  return ['variables', '/variables/:variableID', 'DELETE'] as const
}

export function useDeleteVariablesVariableID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.variables)[':variableID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVariablesVariableIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.variables)[':variableID']['$delete']> },
      ) => parseResponse(client.variables[':variableID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVariablesVariableIDKey() {
  return ['variables', '/variables/:variableID', 'PATCH'] as const
}

export function usePatchVariablesVariableID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variableID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.variables)[':variableID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVariablesVariableIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.variables)[':variableID']['$patch']> },
      ) => parseResponse(client.variables[':variableID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourcesKey(args: InferRequestType<typeof client.sources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources', keyArgs] as const
}

export function useGetSources<TError = unknown>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sources.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSources<TError = unknown>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sources.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSourcesKey() {
  return ['sources', '/sources', 'POST'] as const
}

export function usePostSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sources.$post> }) =>
        parseResponse(client.sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourcesSourceIDKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID', keyArgs] as const
}

export function useGetSourcesSourceID<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSourcesSourceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourcesSourceID<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSourcesSourceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSourcesSourceIDKey() {
  return ['sources', '/sources/:sourceID', 'DELETE'] as const
}

export function useDeleteSourcesSourceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':sourceID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSourcesSourceIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':sourceID']['$delete']> },
      ) => parseResponse(client.sources[':sourceID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSourcesSourceIDKey() {
  return ['sources', '/sources/:sourceID', 'PATCH'] as const
}

export function usePatchSourcesSourceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':sourceID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSourcesSourceIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':sourceID']['$patch']> },
      ) => parseResponse(client.sources[':sourceID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourcesSourceIDHealthKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID/health', keyArgs] as const
}

export function useGetSourcesSourceIDHealth<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
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
        ? getGetSourcesSourceIDHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourcesSourceIDHealth<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
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
        ? getGetSourcesSourceIDHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSourcesSourceIDBucketsKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID/buckets', keyArgs] as const
}

export function useGetSourcesSourceIDBuckets<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
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
        ? getGetSourcesSourceIDBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourcesSourceIDBuckets<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
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
        ? getGetSourcesSourceIDBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':sourceID'].buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScrapersKey(args: InferRequestType<typeof client.scrapers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers', keyArgs] as const
}

export function useGetScrapers<TError = unknown>(
  args: InferRequestType<typeof client.scrapers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScrapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scrapers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetScrapers<TError = unknown>(
  args: InferRequestType<typeof client.scrapers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScrapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scrapers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostScrapersKey() {
  return ['scrapers', '/scrapers', 'POST'] as const
}

export function usePostScrapers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.scrapers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrapers.$post> }) =>
        parseResponse(client.scrapers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScrapersScraperTargetIDKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID', keyArgs] as const
}

export function useGetScrapersScraperTargetID<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
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
        ? getGetScrapersScraperTargetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrapers[':scraperTargetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapersScraperTargetID<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
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
        ? getGetScrapersScraperTargetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrapers[':scraperTargetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteScrapersScraperTargetIDKey() {
  return ['scrapers', '/scrapers/:scraperTargetID', 'DELETE'] as const
}

export function useDeleteScrapersScraperTargetID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScrapersScraperTargetIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']> },
      ) => parseResponse(client.scrapers[':scraperTargetID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchScrapersScraperTargetIDKey() {
  return ['scrapers', '/scrapers/:scraperTargetID', 'PATCH'] as const
}

export function usePatchScrapersScraperTargetID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchScrapersScraperTargetIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']> },
      ) => parseResponse(client.scrapers[':scraperTargetID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScrapersScraperTargetIDLabelsKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/labels', keyArgs] as const
}

export function useGetScrapersScraperTargetIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
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
        ? getGetScrapersScraperTargetIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapersScraperTargetIDLabels<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
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
        ? getGetScrapersScraperTargetIDLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScrapersScraperTargetIDLabelsKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/labels', 'POST'] as const
}

export function usePostScrapersScraperTargetIDLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapersScraperTargetIDLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>
        },
      ) => parseResponse(client.scrapers[':scraperTargetID'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScrapersScraperTargetIDLabelsLabelIDKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/labels/:labelID', 'DELETE'] as const
}

export function useDeleteScrapersScraperTargetIDLabelsLabelID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScrapersScraperTargetIDLabelsLabelIDKey()
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
            (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scrapers[':scraperTargetID'].labels[':labelID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetScrapersScraperTargetIDMembersKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/members', keyArgs] as const
}

export function useGetScrapersScraperTargetIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
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
        ? getGetScrapersScraperTargetIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapersScraperTargetIDMembers<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
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
        ? getGetScrapersScraperTargetIDMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScrapersScraperTargetIDMembersKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/members', 'POST'] as const
}

export function usePostScrapersScraperTargetIDMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapersScraperTargetIDMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>
        },
      ) => parseResponse(client.scrapers[':scraperTargetID'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScrapersScraperTargetIDMembersUserIDKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/members/:userID', 'DELETE'] as const
}

export function useDeleteScrapersScraperTargetIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScrapersScraperTargetIDMembersUserIDKey()
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
            (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scrapers[':scraperTargetID'].members[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetScrapersScraperTargetIDOwnersKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/owners', keyArgs] as const
}

export function useGetScrapersScraperTargetIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
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
        ? getGetScrapersScraperTargetIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapersScraperTargetIDOwners<TError = unknown>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
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
        ? getGetScrapersScraperTargetIDOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.scrapers[':scraperTargetID'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScrapersScraperTargetIDOwnersKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/owners', 'POST'] as const
}

export function usePostScrapersScraperTargetIDOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapersScraperTargetIDOwnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>
        },
      ) => parseResponse(client.scrapers[':scraperTargetID'].owners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScrapersScraperTargetIDOwnersUserIDKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/owners/:userID', 'DELETE'] as const
}

export function useDeleteScrapersScraperTargetIDOwnersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScrapersScraperTargetIDOwnersUserIDKey()
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
            (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.scrapers[':scraperTargetID'].owners[':userID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupKvKey(args: InferRequestType<typeof client.backup.kv.$get>) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/kv', keyArgs] as const
}

export function useGetBackupKv<TError = unknown>(
  args: InferRequestType<typeof client.backup.kv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupKvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.kv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupKv<TError = unknown>(
  args: InferRequestType<typeof client.backup.kv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupKvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.kv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupMetadataKey(
  args: InferRequestType<typeof client.backup.metadata.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/metadata', keyArgs] as const
}

export function useGetBackupMetadata<TError = unknown>(
  args: InferRequestType<typeof client.backup.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupMetadata<TError = unknown>(
  args: InferRequestType<typeof client.backup.metadata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupMetadataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupShardsShardIDKey(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/shards/:shardID', keyArgs] as const
}

export function useGetBackupShardsShardID<TError = unknown>(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>
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
        ? getGetBackupShardsShardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.shards[':shardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupShardsShardID<TError = unknown>(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>
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
        ? getGetBackupShardsShardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.shards[':shardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestoreKvKey() {
  return ['restore', '/restore/kv', 'POST'] as const
}

export function usePostRestoreKv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.kv.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.restore.kv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreKvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restore.kv.$post> }) =>
        parseResponse(client.restore.kv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreSqlKey() {
  return ['restore', '/restore/sql', 'POST'] as const
}

export function usePostRestoreSql<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.sql.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.restore.sql.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreSqlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restore.sql.$post> }) =>
        parseResponse(client.restore.sql.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreBucketBucketIDKey() {
  return ['restore', '/restore/bucket/:bucketID', 'POST'] as const
}

export function usePostRestoreBucketBucketID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restore.bucket)[':bucketID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreBucketBucketIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']> },
      ) => parseResponse(client.restore.bucket[':bucketID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreBucketMetadataKey() {
  return ['restore', '/restore/bucketMetadata', 'POST'] as const
}

export function usePostRestoreBucketMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restore.bucketMetadata.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.restore.bucketMetadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreBucketMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.restore.bucketMetadata.$post> },
      ) => parseResponse(client.restore.bucketMetadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreShardsShardIDKey() {
  return ['restore', '/restore/shards/:shardID', 'POST'] as const
}

export function usePostRestoreShardsShardID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restore.shards)[':shardID']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.restore.shards)[':shardID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreShardsShardIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.restore.shards)[':shardID']['$post']> },
      ) => parseResponse(client.restore.shards[':shardID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRemotesKey(args: InferRequestType<typeof client.remotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['remotes', '/remotes', keyArgs] as const
}

export function useGetRemotes<TError = unknown>(
  args: InferRequestType<typeof client.remotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.remotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRemotes<TError = unknown>(
  args: InferRequestType<typeof client.remotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRemotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.remotes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRemotesKey() {
  return ['remotes', '/remotes', 'POST'] as const
}

export function usePostRemotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.remotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.remotes.$post> }) =>
        parseResponse(client.remotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemotesRemoteIDKey(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['remotes', '/remotes/:remoteID', keyArgs] as const
}

export function useGetRemotesRemoteID<TError = unknown>(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemotesRemoteIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remotes[':remoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemotesRemoteID<TError = unknown>(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemotesRemoteIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.remotes[':remoteID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRemotesRemoteIDKey() {
  return ['remotes', '/remotes/:remoteID', 'DELETE'] as const
}

export function useDeleteRemotesRemoteID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.remotes)[':remoteID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRemotesRemoteIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.remotes)[':remoteID']['$delete']> },
      ) => parseResponse(client.remotes[':remoteID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRemotesRemoteIDKey() {
  return ['remotes', '/remotes/:remoteID', 'PATCH'] as const
}

export function usePatchRemotesRemoteID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.remotes)[':remoteID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRemotesRemoteIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.remotes)[':remoteID']['$patch']> },
      ) => parseResponse(client.remotes[':remoteID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReplicationsKey(args: InferRequestType<typeof client.replications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['replications', '/replications', keyArgs] as const
}

export function useGetReplications<TError = unknown>(
  args: InferRequestType<typeof client.replications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReplicationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReplications<TError = unknown>(
  args: InferRequestType<typeof client.replications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReplicationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReplicationsKey() {
  return ['replications', '/replications', 'POST'] as const
}

export function usePostReplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.replications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.replications.$post> }) =>
        parseResponse(client.replications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReplicationsReplicationIDKey(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['replications', '/replications/:replicationID', keyArgs] as const
}

export function useGetReplicationsReplicationID<TError = unknown>(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
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
        ? getGetReplicationsReplicationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replications[':replicationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReplicationsReplicationID<TError = unknown>(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
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
        ? getGetReplicationsReplicationIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replications[':replicationID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReplicationsReplicationIDKey() {
  return ['replications', '/replications/:replicationID', 'DELETE'] as const
}

export function useDeleteReplicationsReplicationID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.replications)[':replicationID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReplicationsReplicationIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.replications)[':replicationID']['$delete']> },
      ) => parseResponse(client.replications[':replicationID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchReplicationsReplicationIDKey() {
  return ['replications', '/replications/:replicationID', 'PATCH'] as const
}

export function usePatchReplicationsReplicationID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.replications)[':replicationID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchReplicationsReplicationIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.replications)[':replicationID']['$patch']> },
      ) => parseResponse(client.replications[':replicationID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReplicationsReplicationIDValidateKey() {
  return ['replications', '/replications/:replicationID/validate', 'POST'] as const
}

export function usePostReplicationsReplicationIDValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['validate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplicationsReplicationIDValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>
        },
      ) => parseResponse(client.replications[':replicationID'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsKey(args: InferRequestType<typeof client.dashboards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards', keyArgs] as const
}

export function useGetDashboards<TError = unknown>(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboards<TError = unknown>(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsKey() {
  return ['dashboards', '/dashboards', 'POST'] as const
}

export function usePostDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboards.$post> }) =>
        parseResponse(client.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksKey(args: InferRequestType<typeof client.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks', keyArgs] as const
}

export function useGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTasksKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function usePostTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.$post> }) =>
        parseResponse(client.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIDKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID', keyArgs] as const
}

export function useGetTasksTaskID<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskID<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTasksTaskIDKey() {
  return ['tasks', '/tasks/:taskID', 'DELETE'] as const
}

export function useDeleteTasksTaskID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksTaskIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['$delete']> },
      ) => parseResponse(client.tasks[':taskID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTasksTaskIDKey() {
  return ['tasks', '/tasks/:taskID', 'PATCH'] as const
}

export function usePatchTasksTaskID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTasksTaskIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskID']['$patch']> },
      ) => parseResponse(client.tasks[':taskID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
