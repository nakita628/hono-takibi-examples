import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeleteGroupKey() {
  return ['delete-group'] as const
}

export function getGetAccountSettingsKey() {
  return ['get-account-settings'] as const
}

export function getGetGroupKey() {
  return ['get-group'] as const
}

export function getGetGroupConfigurationKey() {
  return ['get-group-configuration'] as const
}

export function getGetGroupQueryKey() {
  return ['get-group-query'] as const
}

export function getGroupResourcesKey() {
  return ['group-resources'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getGroupsListKey() {
  return ['groups-list'] as const
}

export function getListGroupResourcesKey() {
  return ['list-group-resources'] as const
}

export function getPutGroupConfigurationKey() {
  return ['put-group-configuration'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getUngroupResourcesKey() {
  return ['ungroup-resources'] as const
}

export function getUpdateAccountSettingsKey() {
  return ['update-account-settings'] as const
}

export function getUpdateGroupKey() {
  return ['update-group'] as const
}

export function getUpdateGroupQueryKey() {
  return ['update-group-query'] as const
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteGroupKey() {
  return ['delete-group', '/delete-group', 'POST'] as const
}

export function usePostDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['delete-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['delete-group']['$post']> },
      ) => parseResponse(client['delete-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetAccountSettingsKey() {
  return ['get-account-settings', '/get-account-settings', 'POST'] as const
}

export function usePostGetAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['get-account-settings']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['get-account-settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['get-account-settings']['$post']> },
      ) => parseResponse(client['get-account-settings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGroupKey() {
  return ['get-group', '/get-group', 'POST'] as const
}

export function usePostGetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['get-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['get-group']['$post']> }) =>
        parseResponse(client['get-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGroupConfigurationKey() {
  return ['get-group-configuration', '/get-group-configuration', 'POST'] as const
}

export function usePostGetGroupConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['get-group-configuration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['get-group-configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGroupConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['get-group-configuration']['$post']> },
      ) => parseResponse(client['get-group-configuration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGroupQueryKey() {
  return ['get-group-query', '/get-group-query', 'POST'] as const
}

export function usePostGetGroupQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['get-group-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGroupQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['get-group-query']['$post']> },
      ) => parseResponse(client['get-group-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcesArnTagsKey(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:Arn/tags', keyArgs] as const
}

export function useGetResourcesArnTags<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesArnTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':Arn'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesArnTags<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResourcesArnTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':Arn'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutResourcesArnTagsKey() {
  return ['resources', '/resources/:Arn/tags', 'PUT'] as const
}

export function usePutResourcesArnTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResourcesArnTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']> },
      ) => parseResponse(client.resources[':Arn'].tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchResourcesArnTagsKey() {
  return ['resources', '/resources/:Arn/tags', 'PATCH'] as const
}

export function usePatchResourcesArnTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchResourcesArnTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']> },
      ) => parseResponse(client.resources[':Arn'].tags.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupResourcesKey() {
  return ['group-resources', '/group-resources', 'POST'] as const
}

export function usePostGroupResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['group-resources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['group-resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['group-resources']['$post']> },
      ) => parseResponse(client['group-resources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListGroupResourcesKey() {
  return ['list-group-resources', '/list-group-resources', 'POST'] as const
}

export function usePostListGroupResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-group-resources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['list-group-resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListGroupResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['list-group-resources']['$post']> },
      ) => parseResponse(client['list-group-resources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsListKey() {
  return ['groups-list', '/groups-list', 'POST'] as const
}

export function usePostGroupsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups-list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups-list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['groups-list']['$post']> }) =>
        parseResponse(client['groups-list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutGroupConfigurationKey() {
  return ['put-group-configuration', '/put-group-configuration', 'POST'] as const
}

export function usePostPutGroupConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['put-group-configuration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['put-group-configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutGroupConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['put-group-configuration']['$post']> },
      ) => parseResponse(client['put-group-configuration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourcesSearchKey() {
  return ['resources', '/resources/search', 'POST'] as const
}

export function usePostResourcesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.resources.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourcesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resources.search.$post> }) =>
        parseResponse(client.resources.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUngroupResourcesKey() {
  return ['ungroup-resources', '/ungroup-resources', 'POST'] as const
}

export function usePostUngroupResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ungroup-resources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ungroup-resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUngroupResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ungroup-resources']['$post']> },
      ) => parseResponse(client['ungroup-resources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAccountSettingsKey() {
  return ['update-account-settings', '/update-account-settings', 'POST'] as const
}

export function usePostUpdateAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-account-settings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-account-settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['update-account-settings']['$post']> },
      ) => parseResponse(client['update-account-settings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateGroupKey() {
  return ['update-group', '/update-group', 'POST'] as const
}

export function usePostUpdateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['update-group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['update-group']['$post']> },
      ) => parseResponse(client['update-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateGroupQueryKey() {
  return ['update-group-query', '/update-group-query', 'POST'] as const
}

export function usePostUpdateGroupQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['update-group-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-group-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateGroupQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['update-group-query']['$post']> },
      ) => parseResponse(client['update-group-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
