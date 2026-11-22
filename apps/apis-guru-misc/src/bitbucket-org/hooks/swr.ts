import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddonKey() {
  return ['addon'] as const
}

export function getHookEventsKey() {
  return ['hook_events'] as const
}

export function getPullrequestsKey() {
  return ['pullrequests'] as const
}

export function getRepositoriesKey() {
  return ['repositories'] as const
}

export function getSnippetsKey() {
  return ['snippets'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getPutAddonKey() {
  return ['addon', '/addon', 'PUT'] as const
}

export function usePutAddon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$put>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAddonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.addon.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAddonKey() {
  return ['addon', '/addon', 'DELETE'] as const
}

export function useDeleteAddon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.addon.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddonLinkersKey() {
  return ['addon', '/addon/linkers'] as const
}

export function useGetAddonLinkers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.linkers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonLinkersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.linkers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addon.linkers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonLinkers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.linkers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddonLinkersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.linkers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addon.linkers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddonLinkersLinkerKeyKey(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['$get']>,
) {
  return ['addon', '/addon/linkers/:linker_key', args] as const
}

export function useGetAddonLinkersLinkerKey<TError = unknown>(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAddonLinkersLinkerKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addon.linkers[':linker_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonLinkersLinkerKey<TError = unknown>(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAddonLinkersLinkerKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addon.linkers[':linker_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddonLinkersLinkerKeyValuesKey(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>,
) {
  return ['addon', '/addon/linkers/:linker_key/values', args] as const
}

export function useGetAddonLinkersLinkerKeyValues<TError = unknown>(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAddonLinkersLinkerKeyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addon.linkers[':linker_key'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonLinkersLinkerKeyValues<TError = unknown>(
  args: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAddonLinkersLinkerKeyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addon.linkers[':linker_key'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAddonLinkersLinkerKeyValuesKey() {
  return ['addon', '/addon/linkers/:linker_key/values', 'PUT'] as const
}

export function usePutAddonLinkersLinkerKeyValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAddonLinkersLinkerKeyValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$put']>
        },
      ) => parseResponse(client.addon.linkers[':linker_key'].values.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAddonLinkersLinkerKeyValuesKey() {
  return ['addon', '/addon/linkers/:linker_key/values', 'POST'] as const
}

export function usePostAddonLinkersLinkerKeyValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddonLinkersLinkerKeyValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$post']>
        },
      ) => parseResponse(client.addon.linkers[':linker_key'].values.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAddonLinkersLinkerKeyValuesKey() {
  return ['addon', '/addon/linkers/:linker_key/values', 'DELETE'] as const
}

export function useDeleteAddonLinkersLinkerKeyValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addon.linkers)[':linker_key']['values']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddonLinkersLinkerKeyValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.addon.linkers)[':linker_key']['values']['$delete']>
        },
      ) => parseResponse(client.addon.linkers[':linker_key'].values.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddonLinkersLinkerKeyValuesValueIdKey(
  args: InferRequestType<
    (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
  >,
) {
  return ['addon', '/addon/linkers/:linker_key/values/:value_id', args] as const
}

export function useGetAddonLinkersLinkerKeyValuesValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
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
        ? getGetAddonLinkersLinkerKeyValuesValueIdKey(args)
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
                (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
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
          client.addon.linkers[':linker_key'].values[':value_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonLinkersLinkerKeyValuesValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
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
        ? getGetAddonLinkersLinkerKeyValuesValueIdKey(args)
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
                (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$get']
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
          client.addon.linkers[':linker_key'].values[':value_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAddonLinkersLinkerKeyValuesValueIdKey() {
  return ['addon', '/addon/linkers/:linker_key/values/:value_id', 'DELETE'] as const
}

export function useDeleteAddonLinkersLinkerKeyValuesValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAddonLinkersLinkerKeyValuesValueIdKey()
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
            (typeof client.addon.linkers)[':linker_key']['values'][':value_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.addon.linkers[':linker_key'].values[':value_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHookEventsKey() {
  return ['hook_events', '/hook_events'] as const
}

export function useGetHookEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHookEventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hook_events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHookEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHookEventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hook_events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHookEventsSubjectTypeKey(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
) {
  return ['hook_events', '/hook_events/:subject_type', args] as const
}

export function useGetHookEventsSubjectType<TError = unknown>(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHookEventsSubjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hook_events[':subject_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHookEventsSubjectType<TError = unknown>(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHookEventsSubjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hook_events[':subject_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPullrequestsSelectedUserKey(
  args: InferRequestType<(typeof client.pullrequests)[':selected_user']['$get']>,
) {
  return ['pullrequests', '/pullrequests/:selected_user', args] as const
}

export function useGetPullrequestsSelectedUser<TError = unknown>(
  args: InferRequestType<(typeof client.pullrequests)[':selected_user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pullrequests)[':selected_user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPullrequestsSelectedUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pullrequests)[':selected_user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pullrequests[':selected_user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPullrequestsSelectedUser<TError = unknown>(
  args: InferRequestType<(typeof client.pullrequests)[':selected_user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pullrequests)[':selected_user']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPullrequestsSelectedUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pullrequests)[':selected_user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pullrequests[':selected_user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesKey(args: InferRequestType<typeof client.repositories.$get>) {
  return ['repositories', '/repositories', args] as const
}

export function useGetRepositories<TError = unknown>(
  args: InferRequestType<typeof client.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRepositoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositories<TError = unknown>(
  args: InferRequestType<typeof client.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRepositoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceKey(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
) {
  return ['repositories', '/repositories/:workspace', args] as const
}

export function useGetRepositoriesWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoriesWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repositories[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoriesWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repositories[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlug<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoriesWorkspaceRepoSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repositories[':workspace'][':repo_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlug<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoriesWorkspaceRepoSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repositories[':workspace'][':repo_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>
        },
      ) => parseResponse(client.repositories[':workspace'][':repo_slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>
        },
      ) => parseResponse(client.repositories[':workspace'][':repo_slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'DELETE'] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>
        },
      ) =>
        parseResponse(client.repositories[':workspace'][':repo_slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/branch-restrictions', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugBranchRestrictions<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugBranchRestrictions<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugBranchRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugBranchRestrictionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugBranchRestrictionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugBranchingModelKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/branching-model', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugBranchingModel<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchingModelKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugBranchingModel<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchingModelKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugBranchingModelSettingsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model/settings',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugBranchingModelSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchingModelSettingsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugBranchingModelSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugBranchingModelSettingsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
          client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model/settings',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugBranchingModelSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commit/:commit', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommit<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommit<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/approve',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/approve',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitComments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
            ':comment_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
            ':comment_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
            ':property_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
            ':property_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
            ':property_name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
            ':property_name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/pullrequests',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitPullrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitPullrequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations[':annotationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations[':annotationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations[':annotationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations[':annotationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
            ':key'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
            ':key'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
            ':key'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommits<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommits<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugCommitsRevisionKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits/:revision', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugCommitsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitsRevisionKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugCommitsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugCommitsRevisionKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
          client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsRevisionKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits/:revision', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugCommitsRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugCommitsRevisionKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].commits[':revision'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugComponentsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/components', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugComponentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
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
          client.repositories[':workspace'][':repo_slug'].components.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugComponentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['components']['$get']
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
          client.repositories[':workspace'][':repo_slug'].components.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugComponentsComponentIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/components/:component_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugComponentsComponentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugComponentsComponentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].components[':component_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugComponentsComponentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugComponentsComponentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['components'][':component_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].components[':component_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDefaultReviewersKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/default-reviewers', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDefaultReviewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDefaultReviewersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
          client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDefaultReviewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDefaultReviewersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
          client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
          client.repositories[':workspace'][':repo_slug']['default-reviewers'][
            ':target_username'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
          client.repositories[':workspace'][':repo_slug']['default-reviewers'][
            ':target_username'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['default-reviewers'][
            ':target_username'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['default-reviewers'][
            ':target_username'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDeployKeysKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDeployKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeployKeysKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
          client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDeployKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeployKeysKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
          client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugDeployKeysKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugDeployKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugDeployKeysKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['deploy-keys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys/:key_id', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDeployKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDeployKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys/:key_id', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlugDeployKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deploy-keys/:key_id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDeploymentsIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deployments/', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDeploymentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDeploymentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments/:deployment_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables[':variable_uuid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables[':variable_uuid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDiffSpecKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/diff/:spec', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDiffSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDiffSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDiffSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDiffSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDiffstatSpecKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/diffstat/:spec', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDiffstatSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDiffstatSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDiffstatSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDiffstatSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDownloadsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDownloads<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDownloadsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
          client.repositories[':workspace'][':repo_slug'].downloads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDownloads<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDownloadsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
          client.repositories[':workspace'][':repo_slug'].downloads.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugDownloadsKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugDownloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugDownloadsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].downloads.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugDownloadsFilenameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads/:filename', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugDownloadsFilename<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDownloadsFilenameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
          client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugDownloadsFilename<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugDownloadsFilenameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
          client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/downloads/:filename',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugDownloadsFilename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-branching-model',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
          client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugEffectiveBranchingModel<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEffectiveBranchingModelKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
          client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-default-reviewers',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
          client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
          client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugEnvironmentsIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/environments/', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEnvironmentsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEnvironmentsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsIndexKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/environments/', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugEnvironmentsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugEnvironmentsIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['environments']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].environments.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndexKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid/changes/',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].environments[
            ':environment_uuid'
          ].changes.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/filehistory/:commit/:path',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugFilehistoryCommitPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugForksKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/forks', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugForks<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugForksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].forks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugForks<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugForksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].forks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugForksKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/forks', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugForks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugForksKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].forks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugHooksKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugHooks<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugHooks<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugHooksKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugHooksKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugHooksUidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugHooksUid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugHooksUidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugHooksUid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugHooksUidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugHooksUidKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlugHooksUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugHooksUidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugHooksUidKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', 'DELETE'] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugHooksUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugHooksUidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssues<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssues<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['issues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesExportKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/export', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssuesExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesExportKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues.export.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/export/:repo_name-issues-:task_id.zip',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues.export[
            ':repo_name-issues-:task_id.zip'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['export'][':repo_name-issues-:task_id.zip']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues.export[
            ':repo_name-issues-:task_id.zip'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesImportKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/import', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesImport<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesImportKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues.import.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesImport<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesImportKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues.import.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesImportKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/import', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssuesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesImportKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues.import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/:issue_id', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/:issue_id', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlugIssuesIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/issues/:issue_id', 'DELETE'] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugIssuesIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments/:path',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments[
            ':path'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments[
            ':path'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/attachments/:path',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['attachments'][':path']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].attachments[
            ':path'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/changes',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/changes',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/changes/:change_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes[
            ':change_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['changes'][':change_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].changes[
            ':change_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugIssuesIssueIdComments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments/:comment_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments/:comment_id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
            ':comment_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/comments/:comment_id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].comments[
            ':comment_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/vote',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdVote<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdVote<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/vote',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugIssuesIssueIdVote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/vote',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['vote']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].vote.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/watch',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$get']
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
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/watch',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/issues/:issue_id/watch',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['issues'][':issue_id']['watch']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].issues[':issue_id'].watch.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugMergeBaseRevspecKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/merge-base/:revspec', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugMergeBaseRevspec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMergeBaseRevspecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
          client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugMergeBaseRevspec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMergeBaseRevspecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
          client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugMilestonesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/milestones', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugMilestones<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMilestonesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
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
          client.repositories[':workspace'][':repo_slug'].milestones.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugMilestones<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMilestonesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones']['$get']
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
          client.repositories[':workspace'][':repo_slug'].milestones.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/milestones/:milestone_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugMilestonesMilestoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].milestones[':milestone_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugMilestonesMilestoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['milestones'][':milestone_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].milestones[':milestone_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugOverrideSettingsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/override-settings', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugOverrideSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugOverrideSettingsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
          client.repositories[':workspace'][':repo_slug']['override-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugOverrideSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugOverrideSettingsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
          client.repositories[':workspace'][':repo_slug']['override-settings'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugOverrideSettingsKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/override-settings', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlugOverrideSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugOverrideSettingsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['override-settings'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPatchSpecKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/patch/:spec', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPatchSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPatchSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPatchSpec<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPatchSpecKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
          client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
            ':group_slug'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
            ':group_slug'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
            ':group_slug'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
            ':group_slug'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
            ':selected_user_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
            ':selected_user_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
            ':selected_user_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
            ':selected_user_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCaches<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[
            ':cache_uuid'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid/content-uri',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUri<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
            'content-uri'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUri<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
            'content-uri'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines/', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesIndexKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines/', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugPipelinesIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[
            ':pipeline_uuid'
          ].steps.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[
            ':pipeline_uuid'
          ].steps.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/log',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLog<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLog<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/logs/:log_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].logs[':log_uuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].logs[':log_uuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases/:test_case_uuid/test_case_reasons',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/stopPipeline',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipeline<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[
            ':pipeline_uuid'
          ].stopPipeline.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines_config', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines_config', 'PUT'] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/build_number',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.build_number.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid/executions/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].executions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].executions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
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
          client.repositories[':workspace'][
            ':repo_slug'
          ].pipelines_config.ssh.known_hosts.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$get']
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
          client.repositories[':workspace'][
            ':repo_slug'
          ].pipelines_config.ssh.known_hosts.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][
            ':repo_slug'
          ].pipelines_config.ssh.known_hosts.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
            ':known_host_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
            ':known_host_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
            ':known_host_uuid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
            ':known_host_uuid'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
            ':variable_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
            ':variable_uuid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
            ':variable_uuid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
            ':variable_uuid'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
            ':property_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
            ':property_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
            ':property_name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
            ':property_name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pullrequests', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pullrequests', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsActivityKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/activity',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsActivityKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsActivityKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/activity',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/approve',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/approve',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].approve.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
            ':comment_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
            ':comment_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
            ':comment_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/commits',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/decline',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].decline.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diff',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diffstat',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diffstat.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diffstat.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].merge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge/task-status/:task_id',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
            'task-status'
          ][':task_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
            'task-status'
          ][':task_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/patch',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].patch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].patch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/request-changes',
    'POST',
  ] as const
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
            'request-changes'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/request-changes',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
            'request-changes'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/statuses',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    args,
  ] as const
}

export function useGetRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pullrequest_id'
          ].properties[':app_key'][':property_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey(
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
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pullrequest_id'
          ].properties[':app_key'][':property_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pullrequest_id'
          ].properties[':app_key'][':property_name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pullrequest_id'
          ].properties[':app_key'][':property_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugRefsKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugRefs<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugRefs<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugRefsBranchesKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugRefsBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsBranchesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugRefsBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsBranchesKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugRefsBranchesKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugRefsBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugRefsBranchesKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.branches.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugRefsBranchesNameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches/:name', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugRefsBranchesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsBranchesNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugRefsBranchesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsBranchesNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/refs/branches/:name',
    'DELETE',
  ] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugRefsBranchesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugRefsTagsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugRefsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsTagsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugRefsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsTagsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugRefsTagsKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugRefsTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugRefsTagsKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugRefsTagsNameKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags/:name', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugRefsTagsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsTagsNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugRefsTagsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugRefsTagsNameKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
          client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags/:name', 'DELETE'] as const
}

export function useDeleteRepositoriesWorkspaceRepoSlugRefsTagsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugSrcKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/src', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugSrc<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugSrcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].src.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugSrc<TError = unknown>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
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
        ? getGetRepositoriesWorkspaceRepoSlugSrcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].src.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRepositoriesWorkspaceRepoSlugSrcKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/src', 'POST'] as const
}

export function usePostRepositoriesWorkspaceRepoSlugSrc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepositoriesWorkspaceRepoSlugSrcKey()
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
            (typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']
          >
        },
      ) =>
        parseResponse(
          client.repositories[':workspace'][':repo_slug'].src.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugSrcCommitPathKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/src/:commit/:path', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugSrcCommitPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugSrcCommitPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugSrcCommitPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugSrcCommitPathKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
          client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugVersionsKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/versions', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugVersionsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
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
          client.repositories[':workspace'][':repo_slug'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugVersionsKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['versions']['$get']
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
          client.repositories[':workspace'][':repo_slug'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/versions/:version_id', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugVersionsVersionIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].versions[':version_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugVersionsVersionIdKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['versions'][':version_id']['$get']
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
          client.repositories[':workspace'][':repo_slug'].versions[':version_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositoriesWorkspaceRepoSlugWatchersKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/watchers', args] as const
}

export function useGetRepositoriesWorkspaceRepoSlugWatchers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugWatchersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
          client.repositories[':workspace'][':repo_slug'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoriesWorkspaceRepoSlugWatchers<TError = unknown>(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
        ? getGetRepositoriesWorkspaceRepoSlugWatchersKey(args)
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
                (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
          client.repositories[':workspace'][':repo_slug'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsKey(args: InferRequestType<typeof client.snippets.$get>) {
  return ['snippets', '/snippets', args] as const
}

export function useGetSnippets<TError = unknown>(
  args: InferRequestType<typeof client.snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnippetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.snippets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSnippets<TError = unknown>(
  args: InferRequestType<typeof client.snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnippetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.snippets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSnippetsKey() {
  return ['snippets', '/snippets', 'POST'] as const
}

export function usePostSnippets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snippets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnippetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snippets.$post> }) =>
        parseResponse(client.snippets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceKey(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
) {
  return ['snippets', '/snippets/:workspace', args] as const
}

export function useGetSnippetsWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnippetsWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snippets[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnippetsWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snippets[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnippetsWorkspaceKey() {
  return ['snippets', '/snippets/:workspace', 'POST'] as const
}

export function usePostSnippetsWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnippetsWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snippets)[':workspace']['$post']> },
      ) => parseResponse(client.snippets[':workspace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id', args] as const
}

export function useGetSnippetsWorkspaceEncodedId<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnippetsWorkspaceEncodedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snippets[':workspace'][':encoded_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedId<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnippetsWorkspaceEncodedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snippets[':workspace'][':encoded_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSnippetsWorkspaceEncodedIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id', 'PUT'] as const
}

export function usePutSnippetsWorkspaceEncodedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSnippetsWorkspaceEncodedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']> },
      ) => parseResponse(client.snippets[':workspace'][':encoded_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSnippetsWorkspaceEncodedIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id', 'DELETE'] as const
}

export function useDeleteSnippetsWorkspaceEncodedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnippetsWorkspaceEncodedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>
        },
      ) => parseResponse(client.snippets[':workspace'][':encoded_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdCommentsKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSnippetsWorkspaceEncodedIdCommentsKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments', 'POST'] as const
}

export function usePostSnippetsWorkspaceEncodedIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnippetsWorkspaceEncodedIdCommentsKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdCommentsCommentIdKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
          client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdCommentsCommentIdKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
          client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSnippetsWorkspaceEncodedIdCommentsCommentIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', 'PUT'] as const
}

export function usePutSnippetsWorkspaceEncodedIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSnippetsWorkspaceEncodedIdCommentsCommentIdKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteSnippetsWorkspaceEncodedIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdCommitsKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdCommits<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdCommitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdCommits<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdCommitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].commits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdCommitsRevisionKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits/:revision', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdCommitsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdCommitsRevisionKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
          client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdCommitsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdCommitsRevisionKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
          client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdFilesPathKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/files/:path', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdFilesPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdFilesPathKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
          client.snippets[':workspace'][':encoded_id'].files[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdFilesPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdFilesPathKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
          client.snippets[':workspace'][':encoded_id'].files[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdWatchKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdWatch<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdWatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdWatch<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdWatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSnippetsWorkspaceEncodedIdWatchKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', 'PUT'] as const
}

export function usePutSnippetsWorkspaceEncodedIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSnippetsWorkspaceEncodedIdWatchKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']
          >
        },
      ) =>
        parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSnippetsWorkspaceEncodedIdWatchKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', 'DELETE'] as const
}

export function useDeleteSnippetsWorkspaceEncodedIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnippetsWorkspaceEncodedIdWatchKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].watch.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdWatchersKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watchers', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdWatchers<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdWatchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdWatchers<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdWatchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdNodeIdKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
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
        ? getGetSnippetsWorkspaceEncodedIdNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSnippetsWorkspaceEncodedIdNodeIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', 'PUT'] as const
}

export function usePutSnippetsWorkspaceEncodedIdNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSnippetsWorkspaceEncodedIdNodeIdKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSnippetsWorkspaceEncodedIdNodeIdKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', 'DELETE'] as const
}

export function useDeleteSnippetsWorkspaceEncodedIdNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnippetsWorkspaceEncodedIdNodeIdKey()
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
            (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdNodeIdFilesPathKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id/files/:path', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdNodeIdFilesPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdNodeIdFilesPathKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdNodeIdFilesPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdNodeIdFilesPathKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdRevisionDiffKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/diff', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdRevisionDiff<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdRevisionDiffKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdRevisionDiff<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdRevisionDiffKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnippetsWorkspaceEncodedIdRevisionPatchKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/patch', args] as const
}

export function useGetSnippetsWorkspaceEncodedIdRevisionPatch<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdRevisionPatchKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnippetsWorkspaceEncodedIdRevisionPatch<TError = unknown>(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
        ? getGetSnippetsWorkspaceEncodedIdRevisionPatchKey(args)
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
                (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
          client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsUsernamePipelinesConfigVariablesIndexKey(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
  >,
) {
  return ['teams', '/teams/:username/pipelines_config/variables/', args] as const
}

export function useGetTeamsUsernamePipelinesConfigVariablesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
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
        ? getGetTeamsUsernamePipelinesConfigVariablesIndexKey(args)
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
                (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
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
          client.teams[':username'].pipelines_config.variables.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsUsernamePipelinesConfigVariablesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
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
        ? getGetTeamsUsernamePipelinesConfigVariablesIndexKey(args)
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
                (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$get']
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
          client.teams[':username'].pipelines_config.variables.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsUsernamePipelinesConfigVariablesIndexKey() {
  return ['teams', '/teams/:username/pipelines_config/variables/', 'POST'] as const
}

export function usePostTeamsUsernamePipelinesConfigVariablesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsUsernamePipelinesConfigVariablesIndexKey()
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
            (typeof client.teams)[':username']['pipelines_config']['variables']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.teams[':username'].pipelines_config.variables.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsUsernamePipelinesConfigVariablesVariableUuidKey(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', args] as const
}

export function useGetTeamsUsernamePipelinesConfigVariablesVariableUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetTeamsUsernamePipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsUsernamePipelinesConfigVariablesVariableUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetTeamsUsernamePipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsUsernamePipelinesConfigVariablesVariableUuidKey() {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', 'PUT'] as const
}

export function usePutTeamsUsernamePipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsUsernamePipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.teams[':username'].pipelines_config.variables[':variable_uuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidKey() {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', 'DELETE'] as const
}

export function useDeleteTeamsUsernamePipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams[':username'].pipelines_config.variables[':variable_uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsUsernameSearchCodeKey(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
) {
  return ['teams', '/teams/:username/search/code', args] as const
}

export function useGetTeamsUsernameSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsUsernameSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':username'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsUsernameSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsUsernameSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':username'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEmailsKey() {
  return ['user', '/user/emails'] as const
}

export function useGetUserEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEmailsEmailKey(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
) {
  return ['user', '/user/emails/:email', args] as const
}

export function useGetUserEmailsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserEmailsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.emails[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEmailsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserEmailsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.emails[':email'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserPermissionsRepositoriesKey(
  args: InferRequestType<typeof client.user.permissions.repositories.$get>,
) {
  return ['user', '/user/permissions/repositories', args] as const
}

export function useGetUserPermissionsRepositories<TError = unknown>(
  args: InferRequestType<typeof client.user.permissions.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.permissions.repositories.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserPermissionsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.permissions.repositories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.permissions.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserPermissionsRepositories<TError = unknown>(
  args: InferRequestType<typeof client.user.permissions.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.permissions.repositories.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserPermissionsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.permissions.repositories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.permissions.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserPermissionsWorkspacesKey(
  args: InferRequestType<typeof client.user.permissions.workspaces.$get>,
) {
  return ['user', '/user/permissions/workspaces', args] as const
}

export function useGetUserPermissionsWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.user.permissions.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.permissions.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserPermissionsWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.permissions.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.permissions.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserPermissionsWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.user.permissions.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.permissions.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserPermissionsWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user.permissions.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.permissions.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSelectedUserKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
) {
  return ['users', '/users/:selected_user', args] as const
}

export function useGetUsersSelectedUser<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':selected_user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUser<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':selected_user'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSelectedUserPipelinesConfigVariablesIndexKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
  >,
) {
  return ['users', '/users/:selected_user/pipelines_config/variables/', args] as const
}

export function useGetUsersSelectedUserPipelinesConfigVariablesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
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
        ? getGetUsersSelectedUserPipelinesConfigVariablesIndexKey(args)
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
                (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
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
          client.users[':selected_user'].pipelines_config.variables.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserPipelinesConfigVariablesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
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
        ? getGetUsersSelectedUserPipelinesConfigVariablesIndexKey(args)
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
                (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$get']
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
          client.users[':selected_user'].pipelines_config.variables.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersSelectedUserPipelinesConfigVariablesIndexKey() {
  return ['users', '/users/:selected_user/pipelines_config/variables/', 'POST'] as const
}

export function usePostUsersSelectedUserPipelinesConfigVariablesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSelectedUserPipelinesConfigVariablesIndexKey()
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
            (typeof client.users)[':selected_user']['pipelines_config']['variables']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user'].pipelines_config.variables.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSelectedUserPipelinesConfigVariablesVariableUuidKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return ['users', '/users/:selected_user/pipelines_config/variables/:variable_uuid', args] as const
}

export function useGetUsersSelectedUserPipelinesConfigVariablesVariableUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetUsersSelectedUserPipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
        ? getGetUsersSelectedUserPipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
          client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidKey() {
  return [
    'users',
    '/users/:selected_user/pipelines_config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function usePutUsersSelectedUserPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidKey() {
  return [
    'users',
    '/users/:selected_user/pipelines_config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function useDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSelectedUserPropertiesAppKeyPropertyNameKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', args] as const
}

export function useGetUsersSelectedUserPropertiesAppKeyPropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetUsersSelectedUserPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
          client.users[':selected_user'].properties[':app_key'][':property_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserPropertiesAppKeyPropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
        ? getGetUsersSelectedUserPropertiesAppKeyPropertyNameKey(args)
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
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
          client.users[':selected_user'].properties[':app_key'][':property_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersSelectedUserPropertiesAppKeyPropertyNameKey() {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', 'PUT'] as const
}

export function usePutUsersSelectedUserPropertiesAppKeyPropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersSelectedUserPropertiesAppKeyPropertyNameKey()
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
            (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user'].properties[':app_key'][':property_name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameKey() {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', 'DELETE'] as const
}

export function useDeleteUsersSelectedUserPropertiesAppKeyPropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameKey()
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
            (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user'].properties[':app_key'][':property_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSelectedUserSearchCodeKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
) {
  return ['users', '/users/:selected_user/search/code', args] as const
}

export function useGetUsersSelectedUserSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':selected_user'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':selected_user'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSelectedUserSshKeysKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
) {
  return ['users', '/users/:selected_user/ssh-keys', args] as const
}

export function useGetUsersSelectedUserSshKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserSshKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':selected_user']['ssh-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserSshKeys<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersSelectedUserSshKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':selected_user']['ssh-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersSelectedUserSshKeysKey() {
  return ['users', '/users/:selected_user/ssh-keys', 'POST'] as const
}

export function usePostUsersSelectedUserSshKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSelectedUserSshKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']> },
      ) => parseResponse(client.users[':selected_user']['ssh-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSelectedUserSshKeysKeyIdKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
) {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', args] as const
}

export function useGetUsersSelectedUserSshKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
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
        ? getGetUsersSelectedUserSshKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':selected_user']['ssh-keys'][':key_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSelectedUserSshKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
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
        ? getGetUsersSelectedUserSshKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':selected_user']['ssh-keys'][':key_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersSelectedUserSshKeysKeyIdKey() {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', 'PUT'] as const
}

export function usePutUsersSelectedUserSshKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersSelectedUserSshKeysKeyIdKey()
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
            (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user']['ssh-keys'][':key_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersSelectedUserSshKeysKeyIdKey() {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', 'DELETE'] as const
}

export function useDeleteUsersSelectedUserSshKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersSelectedUserSshKeysKeyIdKey()
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
            (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':selected_user']['ssh-keys'][':key_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesKey(args: InferRequestType<typeof client.workspaces.$get>) {
  return ['workspaces', '/workspaces', args] as const
}

export function useGetWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace', args] as const
}

export function useGetWorkspacesWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspace<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceHooksKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/hooks', args] as const
}

export function useGetWorkspacesWorkspaceHooks<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceHooks<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceHooksKey() {
  return ['workspaces', '/workspaces/:workspace/hooks', 'POST'] as const
}

export function usePostWorkspacesWorkspaceHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']> },
      ) => parseResponse(client.workspaces[':workspace'].hooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceHooksUidKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', args] as const
}

export function useGetWorkspacesWorkspaceHooksUid<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceHooksUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].hooks[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceHooksUid<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceHooksUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].hooks[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceHooksUidKey() {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', 'PUT'] as const
}

export function usePutWorkspacesWorkspaceHooksUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspaceHooksUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>
        },
      ) => parseResponse(client.workspaces[':workspace'].hooks[':uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspaceHooksUidKey() {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', 'DELETE'] as const
}

export function useDeleteWorkspacesWorkspaceHooksUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspacesWorkspaceHooksUidKey()
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
            (typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']
          >
        },
      ) => parseResponse(client.workspaces[':workspace'].hooks[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceMembersKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/members', args] as const
}

export function useGetWorkspacesWorkspaceMembers<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceMembers<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceMembersMemberKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/members/:member', args] as const
}

export function useGetWorkspacesWorkspaceMembersMember<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
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
        ? getGetWorkspacesWorkspaceMembersMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].members[':member'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceMembersMember<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
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
        ? getGetWorkspacesWorkspaceMembersMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].members[':member'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePermissionsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/permissions', args] as const
}

export function useGetWorkspacesWorkspacePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspacePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspacePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePermissionsRepositoriesKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions/repositories', args] as const
}

export function useGetWorkspacesWorkspacePermissionsRepositories<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
        ? getGetWorkspacesWorkspacePermissionsRepositoriesKey(args)
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
                (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
          client.workspaces[':workspace'].permissions.repositories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePermissionsRepositories<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
        ? getGetWorkspacesWorkspacePermissionsRepositoriesKey(args)
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
                (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
          client.workspaces[':workspace'].permissions.repositories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePermissionsRepositoriesRepoSlugKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions/repositories/:repo_slug', args] as const
}

export function useGetWorkspacesWorkspacePermissionsRepositoriesRepoSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
        ? getGetWorkspacesWorkspacePermissionsRepositoriesRepoSlugKey(args)
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
                (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
          client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePermissionsRepositoriesRepoSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
        ? getGetWorkspacesWorkspacePermissionsRepositoriesRepoSlugKey(args)
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
                (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
          client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/.well-known/openid-configuration',
    args,
  ] as const
}

export function useGetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
            'openid-configuration'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
            'openid-configuration'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/keys.json',
    args,
  ] as const
}

export function useGetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePipelinesConfigVariablesKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/variables', args] as const
}

export function useGetWorkspacesWorkspacePipelinesConfigVariables<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigVariablesKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].variables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePipelinesConfigVariables<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigVariablesKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].variables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspacePipelinesConfigVariablesKey() {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/variables', 'POST'] as const
}

export function usePostWorkspacesWorkspacePipelinesConfigVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspacePipelinesConfigVariablesKey()
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
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace']['pipelines-config'].variables.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    args,
  ] as const
}

export function useGetWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
        ? getGetWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey(args)
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
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
          client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function usePutWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function useDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidKey()
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
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/projects', args] as const
}

export function useGetWorkspacesWorkspaceProjects<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjects<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceProjectsKey() {
  return ['workspaces', '/workspaces/:workspace/projects', 'POST'] as const
}

export function usePostWorkspacesWorkspaceProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']> },
      ) => parseResponse(client.workspaces[':workspace'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', args] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
          client.workspaces[':workspace'].projects[':project_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
          client.workspaces[':workspace'].projects[':project_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', 'PUT'] as const
}

export function usePutWorkspacesWorkspaceProjectsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspaceProjectsProjectKeyKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', 'DELETE'] as const
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspacesWorkspaceProjectsProjectKeyKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model',
    args,
  ] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyBranchingModel<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyBranchingModel<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model/settings',
    args,
  ] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model/settings',
    'PUT',
  ] as const
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers',
    args,
  ] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    args,
  ] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
            ':selected_user'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
            ':selected_user'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    'PUT',
  ] as const
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
            ':selected_user'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    'DELETE',
  ] as const
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
            ':selected_user'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key/deploy-keys', args] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyDeployKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyDeployKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key/deploy-keys', 'POST'] as const
}

export function usePostWorkspacesWorkspaceProjectsProjectKeyDeployKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id',
    args,
  ] as const
}

export function useGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
        ? getGetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdKey(args)
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
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id',
    'DELETE',
  ] as const
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdKey()
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
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][
            ':key_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceSearchCodeKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/search/code', args] as const
}

export function useGetWorkspacesWorkspaceSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceSearchCode<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceSearchCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workspaces[':workspace'].search.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
