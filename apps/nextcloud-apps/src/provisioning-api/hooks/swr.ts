import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpCloudAppsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/apps', keyArgs] as const
}

export function useGetOcsV2PhpCloudApps<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudApps<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudAppsAppKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', keyArgs] as const
}

export function useGetOcsV2PhpCloudAppsApp<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudAppsAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudAppsApp<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudAppsAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudAppsAppKey() {
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', 'POST'] as const
}

export function usePostOcsV2PhpCloudAppsApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudAppsAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpCloudAppsAppKey() {
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', 'DELETE'] as const
}

export function useDeleteOcsV2PhpCloudAppsApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpCloudAppsAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsGroupIdSubadminsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/subadmins', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroupsGroupIdSubadmins<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdSubadminsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].subadmins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroupsGroupIdSubadmins<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdSubadminsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].subadmins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroups<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroups<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudGroupsKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups', 'POST'] as const
}

export function usePostOcsV2PhpCloudGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']> },
      ) => parseResponse(client.ocs['v2.php'].cloud.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsGroupIdKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
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
        ? getGetOcsV2PhpCloudGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
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
        ? getGetOcsV2PhpCloudGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpCloudGroupsGroupIdKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', 'PUT'] as const
}

export function usePutOcsV2PhpCloudGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpCloudGroupsGroupIdKey()
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
            (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpCloudGroupsGroupIdKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpCloudGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpCloudGroupsGroupIdKey()
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
            (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersRecentKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/recent', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersRecent<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersRecent<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersUserIdSubadminsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersUserIdSubadmins<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdSubadminsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersUserIdSubadmins<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdSubadminsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersUserIdSubadminsKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsersUserIdSubadmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersUserIdSubadminsKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpCloudUsersUserIdSubadminsKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', 'DELETE'] as const
}

export function useDeleteOcsV2PhpCloudUsersUserIdSubadmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpCloudUsersUserIdSubadminsKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps', keyArgs] as const
}

export function useGetOcsV2PhpAppsProvisioningApiApiV1ConfigApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsProvisioningApiApiV1ConfigApps<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app', keyArgs] as const
}

export function useGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsApp<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsApp<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key', keyArgs] as const
}

export function useGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
        ? getGetOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key', 'POST'] as const
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsDetailsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups/details', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroupsDetails<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudGroupsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.groups.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroupsDetails<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudGroupsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.groups.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsGroupIdUsersKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/users', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdUsersKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroupsGroupIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdUsersKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudGroupsGroupIdUsersDetailsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/users/details', keyArgs] as const
}

export function useGetOcsV2PhpCloudGroupsGroupIdUsersDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdUsersDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].users.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudGroupsGroupIdUsersDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
        ? getGetOcsV2PhpCloudGroupsGroupIdUsersDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
          client.ocs['v2.php'].cloud.groups[':groupId'].users.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsers<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsers<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersKey() {
  return ['ocs', '/ocs/v2.php/cloud/users', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']> },
      ) => parseResponse(client.ocs['v2.php'].cloud.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersDetailsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/details', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersDetails<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersDetails<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.users.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersDisabledKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/disabled', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersDisabled<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersDisabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users.disabled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersDisabled<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersDisabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users.disabled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersSearchByPhoneKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/search/by-phone', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsersSearchByPhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersSearchByPhoneKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users.search['by-phone'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersUserIdKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpCloudUsersUserIdKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'PUT'] as const
}

export function usePutOcsV2PhpCloudUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpCloudUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpCloudUsersUserIdKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpCloudUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpCloudUsersUserIdKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOcsV2PhpCloudUsersUserIdKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'PATCH'] as const
}

export function usePatchOcsV2PhpCloudUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOcsV2PhpCloudUsersUserIdKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUserKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/user', keyArgs] as const
}

export function useGetOcsV2PhpCloudUser<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUser<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUserFieldsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/user/fields', keyArgs] as const
}

export function useGetOcsV2PhpCloudUserFields<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUserFields<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUserFieldsUserIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/user/fields/:userId', keyArgs] as const
}

export function useGetOcsV2PhpCloudUserFieldsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
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
        ? getGetOcsV2PhpCloudUserFieldsUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.user.fields[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUserFieldsUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
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
        ? getGetOcsV2PhpCloudUserFieldsUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.user.fields[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUserAppsKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/user/apps', keyArgs] as const
}

export function useGetOcsV2PhpCloudUserApps<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUserApps<TError = unknown>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpCloudUserAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ocs['v2.php'].cloud.user.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpCloudUsersUserIdCollectionNameKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/:collectionName', 'PUT'] as const
}

export function usePutOcsV2PhpCloudUsersUserIdCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpCloudUsersUserIdCollectionNameKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'][':collectionName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersUserIdWipeKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/wipe', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsersUserIdWipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersUserIdWipeKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].wipe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpCloudUsersUserIdEnableKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/enable', 'PUT'] as const
}

export function usePutOcsV2PhpCloudUsersUserIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpCloudUsersUserIdEnableKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpCloudUsersUserIdDisableKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/disable', 'PUT'] as const
}

export function usePutOcsV2PhpCloudUsersUserIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpCloudUsersUserIdDisableKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersUserIdGroupsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdGroupsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersUserIdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdGroupsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersUserIdGroupsKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsersUserIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersUserIdGroupsKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.users[':userId'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpCloudUsersUserIdGroupsKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', 'DELETE'] as const
}

export function useDeleteOcsV2PhpCloudUsersUserIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpCloudUsersUserIdGroupsKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].groups.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersUserIdGroupsDetailsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups/details', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersUserIdGroupsDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdGroupsDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].groups.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersUserIdGroupsDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdGroupsDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].groups.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpCloudUsersUserIdSubadminsDetailsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins/details', keyArgs] as const
}

export function useGetOcsV2PhpCloudUsersUserIdSubadminsDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdSubadminsDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpCloudUsersUserIdSubadminsDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
        ? getGetOcsV2PhpCloudUsersUserIdSubadminsDetailsKey(args)
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
                (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudUsersUserIdWelcomeKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/welcome', 'POST'] as const
}

export function usePostOcsV2PhpCloudUsersUserIdWelcome<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudUsersUserIdWelcomeKey()
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
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].welcome.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId/:configKey',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][
            ':configKey'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId/:configKey',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][
            ':configKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId', 'POST'] as const
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
