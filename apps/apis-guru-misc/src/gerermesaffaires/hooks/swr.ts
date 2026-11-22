import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBoxKey() {
  return ['box'] as const
}

export function getBusinessGroupsKey() {
  return ['business-groups'] as const
}

export function getHubKey() {
  return ['hub'] as const
}

export function getMenusKey() {
  return ['menus'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getRegistrationKey() {
  return ['registration'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getSpacesKey() {
  return ['spaces'] as const
}

export function getGetBoxMenusKey() {
  return ['box', '/box/menus'] as const
}

export function useGetBoxMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoxMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.box.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoxMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoxMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.box.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessGroupsKey(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
) {
  return ['business-groups', '/business-groups', args] as const
}

export function useGetBusinessGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBusinessGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBusinessGroupsKey() {
  return ['business-groups', '/business-groups', 'POST'] as const
}

export function usePostBusinessGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['business-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['business-groups']['$post']> },
      ) => parseResponse(client['business-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessGroupsKey() {
  return ['business-groups', '/business-groups', 'PATCH'] as const
}

export function usePatchBusinessGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['business-groups']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['business-groups']['$patch']> },
      ) => parseResponse(client['business-groups'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessGroupsAllKey(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
) {
  return ['business-groups', '/business-groups/all', args] as const
}

export function useGetBusinessGroupsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessGroupsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessGroupsIdKey(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
) {
  return ['business-groups', '/business-groups/:id', args] as const
}

export function useGetBusinessGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBusinessGroupsIdSpacesKey(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
) {
  return ['business-groups', '/business-groups/:id/spaces', args] as const
}

export function useGetBusinessGroupsIdSpaces<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsIdSpacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'][':id'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessGroupsIdSpaces<TError = unknown>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessGroupsIdSpacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-groups'][':id'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBusinessGroupsIdSpacesSpaceIdKey() {
  return ['business-groups', '/business-groups/:id/spaces/:spaceId', 'DELETE'] as const
}

export function useDeleteBusinessGroupsIdSpacesSpaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessGroupsIdSpacesSpaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['business-groups'][':id'].spaces[':spaceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceKey() {
  return [
    'business-groups',
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/guest-in-space',
    'POST',
  ] as const
}

export function usePostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
          >
        },
      ) =>
        parseResponse(
          client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][
            ':personId'
          ].customers[':folderId']['guest-in-space'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesKey() {
  return [
    'business-groups',
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/spaces',
    'POST',
  ] as const
}

export function usePostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][
            ':personId'
          ].customers[':folderId'].spaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHubBusinessGroupsIdMenusKey(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
) {
  return ['hub', '/hub/business-groups/:Id/menus', args] as const
}

export function useGetHubBusinessGroupsIdMenus<TError = unknown>(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHubBusinessGroupsIdMenusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hub['business-groups'][':Id'].menus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubBusinessGroupsIdMenus<TError = unknown>(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHubBusinessGroupsIdMenusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hub['business-groups'][':Id'].menus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHubDocumentsKey() {
  return ['hub', '/hub/documents', 'POST'] as const
}

export function usePostHubDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hub.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hub.documents.$post> }) =>
        parseResponse(client.hub.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHubMenusKey() {
  return ['hub', '/hub/menus'] as const
}

export function useGetHubMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHubMenusAllKey() {
  return ['hub', '/hub/menus/all'] as const
}

export function useGetHubMenusAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubMenusAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.menus.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubMenusAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubMenusAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.menus.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHubPayslipsKey() {
  return ['hub', '/hub/payslips', 'POST'] as const
}

export function usePostHubPayslips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.payslips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hub.payslips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubPayslipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hub.payslips.$post> }) =>
        parseResponse(client.hub.payslips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHubSpacesSpaceIdDocumentsKey() {
  return ['hub', '/hub/spaces/:spaceId/documents', 'POST'] as const
}

export function usePostHubSpacesSpaceIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubSpacesSpaceIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']> },
      ) => parseResponse(client.hub.spaces[':spaceId'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHubSpacesSpaceIdMenusKey(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
) {
  return ['hub', '/hub/spaces/:spaceId/menus', args] as const
}

export function useGetHubSpacesSpaceIdMenus<TError = unknown>(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHubSpacesSpaceIdMenusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.spaces[':spaceId'].menus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubSpacesSpaceIdMenus<TError = unknown>(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHubSpacesSpaceIdMenusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub.spaces[':spaceId'].menus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHubSpacesSpaceIdPayslipsKey() {
  return ['hub', '/hub/spaces/:spaceId/payslips', 'POST'] as const
}

export function usePostHubSpacesSpaceIdPayslips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubSpacesSpaceIdPayslipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']> },
      ) => parseResponse(client.hub.spaces[':spaceId'].payslips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMenusKey() {
  return ['menus', '/menus'] as const
}

export function useGetMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMenus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMenusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.menus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMenusMenuIdDocumentsKey() {
  return ['menus', '/menus/:menuId/documents', 'POST'] as const
}

export function usePostMenusMenuIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.menus)[':menuId']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMenusMenuIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']> },
      ) => parseResponse(client.menus[':menuId'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileKey(args: InferRequestType<typeof client.profile.$get>) {
  return ['profile', '/profile', args] as const
}

export function useGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.profile.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.profile.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProfileKey() {
  return ['profile', '/profile', 'POST'] as const
}

export function usePostProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.profile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.$post> }) =>
        parseResponse(client.profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProfileKey() {
  return ['profile', '/profile', 'PATCH'] as const
}

export function usePatchProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.profile.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.$patch> }) =>
        parseResponse(client.profile.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProfileEmailKey() {
  return ['profile', '/profile/email', 'PATCH'] as const
}

export function usePatchProfileEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.email.$patch>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.profile.email.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProfileEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.email.$patch> }) =>
        parseResponse(client.profile.email.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfileIdFileKey(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
) {
  return ['profile', '/profile/id-file', args] as const
}

export function useGetProfileIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile['id-file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile['id-file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchProfileMobileKey() {
  return ['profile', '/profile/mobile', 'PATCH'] as const
}

export function usePatchProfileMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.mobile.$patch>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.profile.mobile.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProfileMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile.mobile.$patch> }) =>
        parseResponse(client.profile.mobile.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrationKey(args: InferRequestType<typeof client.registration.$get>) {
  return ['registration', '/registration', args] as const
}

export function useGetRegistration<TError = unknown>(
  args: InferRequestType<typeof client.registration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistrationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistration<TError = unknown>(
  args: InferRequestType<typeof client.registration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistrationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistrationKey() {
  return ['registration', '/registration', 'POST'] as const
}

export function usePostRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registration.$post> }) =>
        parseResponse(client.registration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionKey() {
  return ['session', '/session'] as const
}

export function useGetSession<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSession<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesKey(args: InferRequestType<typeof client.spaces.$get>) {
  return ['spaces', '/spaces', args] as const
}

export function useGetSpaces<TError = unknown>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.spaces.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSpaces<TError = unknown>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.spaces.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSpacesKey() {
  return ['spaces', '/spaces', 'POST'] as const
}

export function usePostSpaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.spaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.spaces.$post> }) =>
        parseResponse(client.spaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesAllKey(args: InferRequestType<typeof client.spaces.all.$get>) {
  return ['spaces', '/spaces/all', args] as const
}

export function useGetSpacesAll<TError = unknown>(
  args: InferRequestType<typeof client.spaces.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesAll<TError = unknown>(
  args: InferRequestType<typeof client.spaces.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdKey(args: InferRequestType<(typeof client.spaces)[':id']['$get']>) {
  return ['spaces', '/spaces/:id', args] as const
}

export function useGetSpacesId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesIdKey() {
  return ['spaces', '/spaces/:id', 'DELETE'] as const
}

export function useDeleteSpacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['$delete']> },
      ) => parseResponse(client.spaces[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdKey() {
  return ['spaces', '/spaces/:id', 'PATCH'] as const
}

export function usePatchSpacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['$patch']> }) =>
        parseResponse(client.spaces[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdAccountingYearKey(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
) {
  return ['spaces', '/spaces/:id/accounting-year', args] as const
}

export function useGetSpacesIdAccountingYear<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdAccountingYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['accounting-year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdAccountingYear<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdAccountingYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['accounting-year'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdAccountingYearKey() {
  return ['spaces', '/spaces/:id/accounting-year', 'POST'] as const
}

export function usePostSpacesIdAccountingYear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdAccountingYearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']> },
      ) => parseResponse(client.spaces[':id']['accounting-year'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdCollectiveDecisionKey(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
) {
  return ['spaces', '/spaces/:id/collective-decision', args] as const
}

export function useGetSpacesIdCollectiveDecision<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCollectiveDecisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['collective-decision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdCollectiveDecision<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCollectiveDecisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['collective-decision'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdCollectiveDecisionKey() {
  return ['spaces', '/spaces/:id/collective-decision', 'POST'] as const
}

export function usePostSpacesIdCollectiveDecision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdCollectiveDecisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']> },
      ) => parseResponse(client.spaces[':id']['collective-decision'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdCompanyEntitiesKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities', args] as const
}

export function useGetSpacesIdCompanyEntities<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['company-entities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdCompanyEntities<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['company-entities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdCompanyEntitiesKey() {
  return ['spaces', '/spaces/:id/company-entities', 'POST'] as const
}

export function usePostSpacesIdCompanyEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdCompanyEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']> },
      ) => parseResponse(client.spaces[':id']['company-entities'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdCompanyEntitiesAllKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities/all', args] as const
}

export function useGetSpacesIdCompanyEntitiesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['company-entities'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdCompanyEntitiesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['company-entities'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdCompanyEntitiesCompanyIdKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities/:companyId', args] as const
}

export function useGetSpacesIdCompanyEntitiesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id']['company-entities'][':companyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdCompanyEntitiesCompanyId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesCompanyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id']['company-entities'][':companyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesIdCompanyEntitiesCompanyIdKey() {
  return ['spaces', '/spaces/:id/company-entities/:companyId', 'PATCH'] as const
}

export function usePatchSpacesIdCompanyEntitiesCompanyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdCompanyEntitiesCompanyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id']['company-entities'][':companyId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdCompanyEntitiesPersonIdDetailsKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/company-entities/:personId/details', args] as const
}

export function useGetSpacesIdCompanyEntitiesPersonIdDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesPersonIdDetailsKey(args)
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
                (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id']['company-entities'][':personId'].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdCompanyEntitiesPersonIdDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdCompanyEntitiesPersonIdDetailsKey(args)
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
                (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id']['company-entities'][':personId'].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdCompanyEntitiesPersonIdDetailsKey() {
  return ['spaces', '/spaces/:id/company-entities/:personId/details', 'POST'] as const
}

export function usePostSpacesIdCompanyEntitiesPersonIdDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdCompanyEntitiesPersonIdDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id']['company-entities'][':personId'].details.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationKey() {
  return [
    'spaces',
    '/spaces/:id/company-entities/:personId/details/:designation',
    'DELETE',
  ] as const
}

export function useDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id']['company-entities'][':personId'].details[':designation'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdDocumentsDownloadKey() {
  return ['spaces', '/spaces/:id/documents/download', 'POST'] as const
}

export function usePostSpacesIdDocumentsDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['documents']['download']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdDocumentsDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>
        },
      ) => parseResponse(client.spaces[':id'].documents.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdFoldersFolderIdPersonsMemberIdKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/folders/:folderId/persons/:memberId', args] as const
}

export function useGetSpacesIdFoldersFolderIdPersonsMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdFoldersFolderIdPersonsMemberIdKey(args)
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
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdFoldersFolderIdPersonsMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdFoldersFolderIdPersonsMemberIdKey(args)
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
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdKey() {
  return ['spaces', '/spaces/:id/folders/:folderId/persons/:memberId', 'PATCH'] as const
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdFoldersFolderIdPersonsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:memberId/activeaccess',
    'PATCH',
  ] as const
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].activeaccess.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:memberId/unactiveaccess',
    'PATCH',
  ] as const
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].unactiveaccess.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:personId/guest-in-space',
    'POST',
  ] as const
}

export function usePostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':personId']['guest-in-space'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdGroupsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups', args] as const
}

export function useGetSpacesIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdGroupsKey() {
  return ['spaces', '/spaces/:id/groups', 'POST'] as const
}

export function usePostSpacesIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['groups']['$post']> },
      ) => parseResponse(client.spaces[':id'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdGroupsAllKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups/all', args] as const
}

export function useGetSpacesIdGroupsAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdGroupsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdGroupsAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdGroupsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdGroupsGroupIdKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups/:groupId', args] as const
}

export function useGetSpacesIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesIdGroupsGroupIdKey() {
  return ['spaces', '/spaces/:id/groups/:groupId', 'PATCH'] as const
}

export function usePatchSpacesIdGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']> },
      ) => parseResponse(client.spaces[':id'].groups[':groupId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdGroupsGroupIdFoldersFolderIdKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/folders/:folderId', 'DELETE'] as const
}

export function useDeleteSpacesIdGroupsGroupIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdGroupsGroupIdFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].groups[':groupId'].folders[':folderId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdGroupsGroupIdFoldersFolderIdKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/folders/:folderId', 'PATCH'] as const
}

export function usePatchSpacesIdGroupsGroupIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdGroupsGroupIdFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].groups[':groupId'].folders[':folderId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdGroupsGroupIdPersonsMemberIdKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/persons/:memberId', 'DELETE'] as const
}

export function useDeleteSpacesIdGroupsGroupIdPersonsMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdGroupsGroupIdPersonsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].groups[':groupId'].persons[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdGroupsGroupIdPersonsMemberIdKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/persons/:memberId', 'PATCH'] as const
}

export function usePatchSpacesIdGroupsGroupIdPersonsMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdGroupsGroupIdPersonsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].groups[':groupId'].persons[':memberId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdLegalKey(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
) {
  return ['spaces', '/spaces/:id/legal', args] as const
}

export function useGetSpacesIdLegal<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdLegalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].legal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdLegal<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdLegalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].legal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesIdLegalKey() {
  return ['spaces', '/spaces/:id/legal', 'PATCH'] as const
}

export function usePatchSpacesIdLegal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdLegalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']> },
      ) => parseResponse(client.spaces[':id'].legal.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdLogoKey(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
) {
  return ['spaces', '/spaces/:id/logo', args] as const
}

export function useGetSpacesIdLogo<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdLogoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].logo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdLogo<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdLogoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].logo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdPersonsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons', args] as const
}

export function useGetSpacesIdPersons<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersons<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdPersonsKey() {
  return ['spaces', '/spaces/:id/persons', 'POST'] as const
}

export function usePostSpacesIdPersons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdPersonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['persons']['$post']> },
      ) => parseResponse(client.spaces[':id'].persons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdPersonsAllKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/all', args] as const
}

export function useGetSpacesIdPersonsAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].persons.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].persons.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesIdPersonsMemberIdPlayerKey() {
  return ['spaces', '/spaces/:id/persons/:memberId/player', 'PATCH'] as const
}

export function usePatchSpacesIdPersonsMemberIdPlayer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdPersonsMemberIdPlayerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']
          >
        },
      ) =>
        parseResponse(client.spaces[':id'].persons[':memberId'].player.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdPersonsPersonIdKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId', args] as const
}

export function useGetSpacesIdPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesIdPersonsPersonIdKey() {
  return ['spaces', '/spaces/:id/persons/:personId', 'DELETE'] as const
}

export function useDeleteSpacesIdPersonsPersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdPersonsPersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>
        },
      ) => parseResponse(client.spaces[':id'].persons[':personId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdPersonsPersonIdKey() {
  return ['spaces', '/spaces/:id/persons/:personId', 'PATCH'] as const
}

export function usePatchSpacesIdPersonsPersonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdPersonsPersonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>
        },
      ) => parseResponse(client.spaces[':id'].persons[':personId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdPersonsPersonIdDetailsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/details', args] as const
}

export function useGetSpacesIdPersonsPersonIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsPersonIdDetails<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdPersonsPersonIdDetailsKey() {
  return ['spaces', '/spaces/:id/persons/:personId/details', 'POST'] as const
}

export function usePostSpacesIdPersonsPersonIdDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdPersonsPersonIdDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['persons'][':personId']['details']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':id'].persons[':personId'].details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdPersonsPersonIdDetailsDesignationKey() {
  return ['spaces', '/spaces/:id/persons/:personId/details/:designation', 'DELETE'] as const
}

export function useDeleteSpacesIdPersonsPersonIdDetailsDesignation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdPersonsPersonIdDetailsDesignationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].persons[':personId'].details[':designation'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdPersonsPersonIdFoldersKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/folders', args] as const
}

export function useGetSpacesIdPersonsPersonIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsPersonIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdPersonsPersonIdGroupsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/groups', args] as const
}

export function useGetSpacesIdPersonsPersonIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsPersonIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id'].persons[':personId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesIdPersonsPersonIdPortfoliosKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/portfolios', args] as const
}

export function useGetSpacesIdPersonsPersonIdPortfolios<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdPortfoliosKey(args)
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
                (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id'].persons[':personId'].portfolios.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdPersonsPersonIdPortfolios<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdPersonsPersonIdPortfoliosKey(args)
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
                (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':id'].persons[':personId'].portfolios.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdPersonsPersonIdPortfoliosKey() {
  return ['spaces', '/spaces/:id/persons/:personId/portfolios', 'POST'] as const
}

export function usePostSpacesIdPersonsPersonIdPortfolios<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdPersonsPersonIdPortfoliosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].persons[':personId'].portfolios.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdKey() {
  return ['spaces', '/spaces/:id/portfolios/:portfolioId/persons/:memberId', 'PATCH'] as const
}

export function usePatchSpacesIdPortfoliosPortfolioIdPersonsMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':id'].portfolios[':portfolioId'].persons[':memberId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdProfessionalVehiclesKey(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
) {
  return ['spaces', '/spaces/:id/professional-vehicles', args] as const
}

export function useGetSpacesIdProfessionalVehicles<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdProfessionalVehiclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['professional-vehicles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdProfessionalVehicles<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdProfessionalVehiclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':id']['professional-vehicles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdProfessionalVehiclesKey() {
  return ['spaces', '/spaces/:id/professional-vehicles', 'POST'] as const
}

export function usePostSpacesIdProfessionalVehicles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdProfessionalVehiclesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>
        },
      ) => parseResponse(client.spaces[':id']['professional-vehicles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdSettingsNf203LogsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
) {
  return ['spaces', '/spaces/:id/settings/nf203/logs', args] as const
}

export function useGetSpacesIdSettingsNf203Logs<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdSettingsNf203LogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].settings.nf203.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdSettingsNf203Logs<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdSettingsNf203LogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].settings.nf203.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdSettingsNf203LogsKey() {
  return ['spaces', '/spaces/:id/settings/nf203/logs', 'POST'] as const
}

export function usePostSpacesIdSettingsNf203Logs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdSettingsNf203LogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>
        },
      ) => parseResponse(client.spaces[':id'].settings.nf203.logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdStatusKey(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
) {
  return ['spaces', '/spaces/:id/status', args] as const
}

export function useGetSpacesIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacesIdStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdStatusKey() {
  return ['spaces', '/spaces/:id/status', 'POST'] as const
}

export function usePostSpacesIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['status']['$post']> },
      ) => parseResponse(client.spaces[':id'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdStatusCodeKey() {
  return ['spaces', '/spaces/:id/status/:code', 'DELETE'] as const
}

export function useDeleteSpacesIdStatusCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['status'][':code']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdStatusCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']> },
      ) => parseResponse(client.spaces[':id'].status[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdTaxContractsKey(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
) {
  return ['spaces', '/spaces/:id/tax-contracts', args] as const
}

export function useGetSpacesIdTaxContracts<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdTaxContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['tax-contracts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdTaxContracts<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdTaxContractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id']['tax-contracts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdTaxContractsKey() {
  return ['spaces', '/spaces/:id/tax-contracts', 'POST'] as const
}

export function usePostSpacesIdTaxContracts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdTaxContractsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']> },
      ) => parseResponse(client.spaces[':id']['tax-contracts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesIdTriggersKey(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
) {
  return ['spaces', '/spaces/:id/triggers', args] as const
}

export function useGetSpacesIdTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesIdTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesIdTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':id'].triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesIdTriggersNameKey() {
  return ['spaces', '/spaces/:id/triggers/:name', 'POST'] as const
}

export function usePostSpacesIdTriggersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesIdTriggersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']> },
      ) => parseResponse(client.spaces[':id'].triggers[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesIdTriggersNameKey() {
  return ['spaces', '/spaces/:id/triggers/:name', 'DELETE'] as const
}

export function useDeleteSpacesIdTriggersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesIdTriggersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']> },
      ) => parseResponse(client.spaces[':id'].triggers[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdCommonFoldersIdKey() {
  return ['spaces', '/spaces/:spaceId/common-folders/:id', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdCommonFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdCommonFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['common-folders'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdCommonFoldersIdKey() {
  return ['spaces', '/spaces/:spaceId/common-folders/:id', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdCommonFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdCommonFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['common-folders'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdCompanyEntitiesIdFollowUpsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/company-entities/:id/follow-ups', args] as const
}

export function useGetSpacesSpaceIdCompanyEntitiesIdFollowUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCompanyEntitiesIdFollowUpsKey(args)
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
                (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdCompanyEntitiesIdFollowUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCompanyEntitiesIdFollowUpsKey(args)
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
                (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdCustomersKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/customers', args] as const
}

export function useGetSpacesSpaceIdCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdCustomersAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/customers/all', args] as const
}

export function useGetSpacesSpaceIdCustomersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCustomersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].customers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdCustomersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdCustomersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].customers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/documents', args] as const
}

export function useGetSpacesSpaceIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdDocumentsDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsDocumentIdExtendKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/extend', args] as const
}

export function useGetSpacesSpaceIdDocumentsDocumentIdExtend<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdExtendKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].extend.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsDocumentIdExtend<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdExtendKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].extend.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdDocumentsDocumentIdExtendKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/extend', 'POST'] as const
}

export function usePostSpacesSpaceIdDocumentsDocumentIdExtend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdDocumentsDocumentIdExtendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].extend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsDocumentIdFoldersKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/folders', args] as const
}

export function useGetSpacesSpaceIdDocumentsDocumentIdFolders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdFoldersKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsDocumentIdFolders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdFoldersKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdDocumentsDocumentIdMailingKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/mailing', 'POST'] as const
}

export function usePostSpacesSpaceIdDocumentsDocumentIdMailing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdDocumentsDocumentIdMailingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].mailing.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsDocumentIdMailingpriceKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/mailingprice', args] as const
}

export function useGetSpacesSpaceIdDocumentsDocumentIdMailingprice<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdMailingpriceKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsDocumentIdMailingprice<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdMailingpriceKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsDocumentIdVersionsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions', args] as const
}

export function useGetSpacesSpaceIdDocumentsDocumentIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdVersionsKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsDocumentIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdVersionsKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdDocumentsDocumentIdVersionsKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions', 'POST'] as const
}

export function usePostSpacesSpaceIdDocumentsDocumentIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdDocumentsDocumentIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions/current', args] as const
}

export function useGetSpacesSpaceIdDocumentsDocumentIdVersionsCurrent<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsDocumentIdVersionsCurrent<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsDocumentIdVersionsCurrentKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsIdAccessKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/access', args] as const
}

export function useGetSpacesSpaceIdDocumentsIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].documents[':id'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].documents[':id'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsIdAccountingKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/accounting', args] as const
}

export function useGetSpacesSpaceIdDocumentsIdAccounting<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdAccountingKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':id'].accounting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsIdAccounting<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdAccountingKey(args)
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
                (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':id'].accounting.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdDocumentsIdDownloadKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/download', args] as const
}

export function useGetSpacesSpaceIdDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':id'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].documents[':id'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdEmployeesKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employees', args] as const
}

export function useGetSpacesSpaceIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdEmployeesAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employees/all', args] as const
}

export function useGetSpacesSpaceIdEmployeesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployeesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employees.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdEmployeesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployeesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employees.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdEmployersKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employers', args] as const
}

export function useGetSpacesSpaceIdEmployers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdEmployers<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdEmployersAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employers/all', args] as const
}

export function useGetSpacesSpaceIdEmployersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdEmployersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdEmployersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].employers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdExtendKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/extend', args] as const
}

export function useGetSpacesSpaceIdExtend<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdExtendKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].extend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdExtend<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdExtendKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].extend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdExtendKey() {
  return ['spaces', '/spaces/:spaceId/extend', 'POST'] as const
}

export function usePostSpacesSpaceIdExtend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdExtendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']> },
      ) => parseResponse(client.spaces[':spaceId'].extend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders', args] as const
}

export function useGetSpacesSpaceIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/all', args] as const
}

export function useGetSpacesSpaceIdFoldersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/bank-statements/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/bank-statements/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/contractual-documents/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][
            ':documentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/contractual-documents/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][
            ':documentId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/corporate-tax-declarations/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
            ':documentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/corporate-tax-declarations/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
            ':documentId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-proofs/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-proofs/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-reports/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-reports/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/invoices/:documentId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/invoices/:documentId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/nominative-social-declarations/:documentId',
    args,
  ] as const
}

export function useGetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
            ':documentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/other-taxes/:documentId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/other-taxes/:documentId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payrolls/:documentId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payrolls/:documentId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/payrolls/:documentId/refresh',
    'POST',
  ] as const
}

export function usePostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].refresh.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payslips/:documentId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payslips/:documentId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-contracts/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-contracts/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-declarations/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['social-declarations'][
            ':documentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-declarations/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['social-declarations'][
            ':documentId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/vat-declarations/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/vat-declarations/:documentId',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id', args] as const
}

export function useGetSpacesSpaceIdFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersId<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].folders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>
        },
      ) => parseResponse(client.spaces[':spaceId'].folders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdAccountingYearKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/accounting-year', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdAccountingYear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdAccountingYearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['accounting-year'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdAccountingYearKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/accounting-year', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdAccountingYear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdAccountingYearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['accounting-year'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdAccountingsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings', args] as const
}

export function useGetSpacesSpaceIdFoldersIdAccountings<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdAccountingsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].accountings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdAccountings<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdAccountingsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].accountings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdAccountingsJournalKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings-journal', args] as const
}

export function useGetSpacesSpaceIdFoldersIdAccountingsJournal<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdAccountingsJournalKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdAccountingsJournal<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdAccountingsJournalKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdBankKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', args] as const
}

export function useGetSpacesSpaceIdFoldersIdBank<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdBankKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdBank<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdBankKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdBankKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdBank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdBankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdBankKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdBank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdBankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdBankStatementsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank-statements', args] as const
}

export function useGetSpacesSpaceIdFoldersIdBankStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdBankStatementsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdBankStatements<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdBankStatementsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdBankStatementsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank-statements', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdBankStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdBankStatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['bank-statements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdCollectiveDecisionKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/collective-decision', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdCollectiveDecision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdCollectiveDecisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['collective-decision'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdCommonFoldersKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders', args] as const
}

export function useGetSpacesSpaceIdFoldersIdCommonFolders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCommonFoldersKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdCommonFolders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCommonFoldersKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdCommonFoldersKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdCommonFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdCommonFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdCommonFoldersAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders/all', args] as const
}

export function useGetSpacesSpaceIdFoldersIdCommonFoldersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCommonFoldersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdCommonFoldersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCommonFoldersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdContractingPartnerKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contracting-partner', args] as const
}

export function useGetSpacesSpaceIdFoldersIdContractingPartner<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractingPartnerKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdContractingPartner<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractingPartnerKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdContractingPartnerSpaceKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contracting-partner/space', args] as const
}

export function useGetSpacesSpaceIdFoldersIdContractingPartnerSpace<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractingPartnerSpaceKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdContractingPartnerSpace<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractingPartnerSpaceKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdContractualDocumentsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-documents', args] as const
}

export function useGetSpacesSpaceIdFoldersIdContractualDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractualDocumentsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdContractualDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractualDocumentsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdContractualDocumentsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-documents', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdContractualDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdContractualDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-documents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdContractualRelationshipKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-relationship', args] as const
}

export function useGetSpacesSpaceIdFoldersIdContractualRelationship<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractualRelationshipKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdContractualRelationship<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdContractualRelationshipKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdCoporateTaxDeclarationsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/coporate-tax-declarations', args] as const
}

export function useGetSpacesSpaceIdFoldersIdCoporateTaxDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCoporateTaxDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdCoporateTaxDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCoporateTaxDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/coporate-tax-declarations', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdCoporateTaxDeclarations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdCustomerKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', args] as const
}

export function useGetSpacesSpaceIdFoldersIdCustomer<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdCustomer<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdCustomerKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].customer.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdCustomerKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdDeliveriesJournalKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/deliveries-journal', args] as const
}

export function useGetSpacesSpaceIdFoldersIdDeliveriesJournal<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDeliveriesJournalKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdDeliveriesJournal<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDeliveriesJournalKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdDocumentsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents', args] as const
}

export function useGetSpacesSpaceIdFoldersIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdDocumentsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents/:documentId/detach', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetach<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].documents[':documentId'].detach.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdEmployeeKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', args] as const
}

export function useGetSpacesSpaceIdFoldersIdEmployee<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdEmployeeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdEmployee<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdEmployeeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdEmployeeKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdEmployee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdEmployeeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].employee.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdEmployeeKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdEmployee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdEmployeeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdExpenseProofsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-proofs', args] as const
}

export function useGetSpacesSpaceIdFoldersIdExpenseProofs<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseProofsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdExpenseProofs<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseProofsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdExpenseProofsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-proofs', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdExpenseProofs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdExpenseProofsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-proofs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdExpenseReportsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-reports', args] as const
}

export function useGetSpacesSpaceIdFoldersIdExpenseReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseReportsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdExpenseReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseReportsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdExpenseReportsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-reports', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdExpenseReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdExpenseReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/expense-reports/:expenseReportId/expense-proofs',
    args,
  ] as const
}

export function useGetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
            'expense-proofs'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
            'expense-proofs'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdInsuranceKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', args] as const
}

export function useGetSpacesSpaceIdFoldersIdInsurance<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdInsuranceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].insurance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdInsurance<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdInsuranceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].insurance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdInsuranceKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdInsurance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdInsuranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].insurance.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdInsuranceKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdInsurance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdInsuranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].insurance.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdInvoicesKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/invoices', args] as const
}

export function useGetSpacesSpaceIdFoldersIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdInvoicesKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/invoices', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdLegalEntityKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/legal-entity', args] as const
}

export function useGetSpacesSpaceIdFoldersIdLegalEntity<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdLegalEntityKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdLegalEntity<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdLegalEntityKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdLoanKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', args] as const
}

export function useGetSpacesSpaceIdFoldersIdLoan<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdLoanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdLoan<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdLoanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdLoanKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdLoan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdLoanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdLoanKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdLoan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdLoanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']
          >
        },
      ) => parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdMessagesKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages', args] as const
}

export function useGetSpacesSpaceIdFoldersIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdMessagesKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdMessagesMessageIdKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages/:messageId', args] as const
}

export function useGetSpacesSpaceIdFoldersIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdMessagesMessageIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdMessagesMessageIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdMessagesMessageIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages/:messageId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/nominative-social-declarations', args] as const
}

export function useGetSpacesSpaceIdFoldersIdNominativeSocialDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdNominativeSocialDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdOtherTaxesKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/other-taxes', args] as const
}

export function useGetSpacesSpaceIdFoldersIdOtherTaxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdOtherTaxesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdOtherTaxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdOtherTaxesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdOtherTaxesKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/other-taxes', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdOtherTaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdOtherTaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['other-taxes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdPasswordsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords', args] as const
}

export function useGetSpacesSpaceIdFoldersIdPasswords<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdPasswords<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPasswordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].passwords.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdPasswordsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdPasswords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdPasswordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].passwords.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdPasswordsPasswordIdKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', args] as const
}

export function useGetSpacesSpaceIdFoldersIdPasswordsPasswordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPasswordsPasswordIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdPasswordsPasswordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPasswordsPasswordIdKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdPasswordsPasswordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdPasswordsPasswordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdPayrollsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payrolls', args] as const
}

export function useGetSpacesSpaceIdFoldersIdPayrolls<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPayrollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdPayrolls<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPayrollsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdPayrollsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/payrolls', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdPayrolls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdPayrollsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/payrolls/:payrollId/nominative-social-declaration',
    'POST',
  ] as const
}

export function usePostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
            'nominative-social-declaration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/payrolls/:payrollId/nominative-social-declaration',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
            'nominative-social-declaration'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdPayslipsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payslips', args] as const
}

export function useGetSpacesSpaceIdFoldersIdPayslips<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPayslipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdPayslips<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdPayslipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdPayslipsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/payslips', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdPayslips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdPayslipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/portfolio/:portfolioId', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].portfolio[':portfolioId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/professional-vehicle', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdProfessionalVehicle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdProfessionalVehicleKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/professional-vehicle', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdProfessionalVehicle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdProfessionalVehicleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdProviderKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', args] as const
}

export function useGetSpacesSpaceIdFoldersIdProvider<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdProvider<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdProviderKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'].provider.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdProviderKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdRequiredDocumentsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/required-documents', args] as const
}

export function useGetSpacesSpaceIdFoldersIdRequiredDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdRequiredDocumentsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdRequiredDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdRequiredDocumentsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid',
    'POST',
  ] as const
}

export function usePostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'][
            ':requireddocumentid'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid',
    'PATCH',
  ] as const
}

export function usePatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'][
            ':requireddocumentid'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid/documents/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'][
            ':requireddocumentid'
          ].documents[':documentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdSectionsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sections', args] as const
}

export function useGetSpacesSpaceIdFoldersIdSections<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdSections<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].folders[':id'].sections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdSocialContractsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-contracts', args] as const
}

export function useGetSpacesSpaceIdFoldersIdSocialContracts<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialContractsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdSocialContracts<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialContractsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdSocialContractsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-contracts', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdSocialContracts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdSocialContractsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-contracts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdSocialDeclarationsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-declarations', args] as const
}

export function useGetSpacesSpaceIdFoldersIdSocialDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdSocialDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdSocialDeclarationsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-declarations', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdSocialDeclarations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdSocialDeclarationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-declarations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdSocialRegimesKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', args] as const
}

export function useGetSpacesSpaceIdFoldersIdSocialRegimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialRegimesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdSocialRegimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSocialRegimesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdSocialRegimesKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdSocialRegimes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdSocialRegimesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-regimes'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdSocialRegimesKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdSocialRegimes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdSocialRegimesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-regimes'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdSumInvoicesKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sum-invoices', args] as const
}

export function useGetSpacesSpaceIdFoldersIdSumInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSumInvoicesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdSumInvoices<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdSumInvoicesKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdTaxContractKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/tax-contract', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdTaxContract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdTaxContractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['tax-contract'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdFoldersIdTaxContractKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/tax-contract', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdFoldersIdTaxContract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdFoldersIdTaxContractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['tax-contract'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdVatDeclarationsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/vat-declarations', args] as const
}

export function useGetSpacesSpaceIdFoldersIdVatDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdVatDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdVatDeclarations<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdVatDeclarationsKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdVatDeclarationsKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/vat-declarations', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdVatDeclarations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdVatDeclarationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id']['vat-declarations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdFoldersIdDocumentClassKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', args] as const
}

export function useGetSpacesSpaceIdFoldersIdDocumentClass<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDocumentClassKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdFoldersIdDocumentClass<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdFoldersIdDocumentClassKey(args)
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
                (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdFoldersIdDocumentClassKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', 'POST'] as const
}

export function usePostSpacesSpaceIdFoldersIdDocumentClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdFoldersIdDocumentClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'][':documentClass'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdFoldersIdDocumentClassKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdFoldersIdDocumentClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdFoldersIdDocumentClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].folders[':id'][':documentClass'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdBanksKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdBanks<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdBanksKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdBanks<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdBanksKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdBanksKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdBanks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdBanksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdBanksAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdBanksAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdBanksAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdBanksAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdBanksAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdContractsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/contracts', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdContracts<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractsKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdContracts<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractsKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/contractual-relationships', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdContractualRelationships<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdContractualRelationships<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/legal-entities/:id/contractual-relationships/all',
    args,
  ] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdCustomersKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdCustomers<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdCustomersKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdCustomers<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdCustomersKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdCustomersKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdCustomersAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdCustomersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdCustomersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdCustomersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdCustomersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdInsurancesKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdInsurances<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdInsurancesKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdInsurances<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdInsurancesKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdInsurancesKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdInsurances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdInsurancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdInsurancesAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdInsurancesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdInsurancesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdInsurancesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdInsurancesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdLoansKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdLoans<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdLoansKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdLoans<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdLoansKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdLoansKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdLoans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdLoansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdLoansAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdLoansAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdLoansAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdLoansAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdLoansAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdProvidersKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdProvidersKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdProvidersKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdProvidersKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdProvidersAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdProvidersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdProvidersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdProvidersAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdProvidersAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdSocialRegimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdSocialRegimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes', 'POST'] as const
}

export function usePostSpacesSpaceIdLegalEntitiesIdSocialRegimes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes/all', args] as const
}

export function useGetSpacesSpaceIdLegalEntitiesIdSocialRegimesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLegalEntitiesIdSocialRegimesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLegalEntitiesIdSocialRegimesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLoansKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/loans', args] as const
}

export function useGetSpacesSpaceIdLoans<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLoans<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].loans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdLoansAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/loans/all', args] as const
}

export function useGetSpacesSpaceIdLoansAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLoansAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].loans.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdLoansAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdLoansAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].loans.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdPersonsIdCallForDocumentKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/call-for-document', 'POST'] as const
}

export function usePostSpacesSpaceIdPersonsIdCallForDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdPersonsIdCallForDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['call-for-document'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdPersonsIdCallForDocumentKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/call-for-document', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdPersonsIdCallForDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdPersonsIdCallForDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['call-for-document'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsIdEmployeesKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees', args] as const
}

export function useGetSpacesSpaceIdPersonsIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].persons[':id'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].persons[':id'].employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdPersonsIdEmployeesKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees', 'POST'] as const
}

export function usePostSpacesSpaceIdPersonsIdEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdPersonsIdEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']
          >
        },
      ) =>
        parseResponse(client.spaces[':spaceId'].persons[':id'].employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsIdEmployeesAllKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees/all', args] as const
}

export function useGetSpacesSpaceIdPersonsIdEmployeesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdEmployeesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].employees.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsIdEmployeesAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdEmployeesAllKey(args)
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
                (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].employees.all.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsIdExchangeKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/exchange', args] as const
}

export function useGetSpacesSpaceIdPersonsIdExchange<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].persons[':id'].exchange.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsIdExchange<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId'].persons[':id'].exchange.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsIdFollowUpsKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/follow-ups', args] as const
}

export function useGetSpacesSpaceIdPersonsIdFollowUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdFollowUpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsIdFollowUps<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdFollowUpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdPersonsIdGuestInSpaceKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'POST'] as const
}

export function usePostSpacesSpaceIdPersonsIdGuestInSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdPersonsIdGuestInSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['guest-in-space'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdPersonsIdGuestInSpaceKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdPersonsIdGuestInSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdPersonsIdGuestInSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['guest-in-space'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdPersonsIdGuestInSpaceKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdPersonsIdGuestInSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdPersonsIdGuestInSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id']['guest-in-space'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsIdInvitationKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', args] as const
}

export function useGetSpacesSpaceIdPersonsIdInvitation<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsIdInvitation<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsIdInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSpacesSpaceIdPersonsIdInvitationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'POST'] as const
}

export function usePostSpacesSpaceIdPersonsIdInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdPersonsIdInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSpacesSpaceIdPersonsIdInvitationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'DELETE'] as const
}

export function useDeleteSpacesSpaceIdPersonsIdInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSpacesSpaceIdPersonsIdInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdPersonsIdInvitationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdPersonsIdInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdPersonsIdInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation/:invitationId/send', 'POST'] as const
}

export function usePostSpacesSpaceIdPersonsIdInvitationInvitationIdSend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation[':invitationId'].send.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdPersonsMemberIdFoldersIdKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:memberId/folders/:id', args] as const
}

export function useGetSpacesSpaceIdPersonsMemberIdFoldersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsMemberIdFoldersIdKey(args)
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
                (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdPersonsMemberIdFoldersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdPersonsMemberIdFoldersIdKey(args)
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
                (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSpacesSpaceIdPersonsMemberIdFoldersIdKey() {
  return ['spaces', '/spaces/:spaceId/persons/:memberId/folders/:id', 'PATCH'] as const
}

export function usePatchSpacesSpaceIdPersonsMemberIdFoldersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSpacesSpaceIdPersonsMemberIdFoldersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesSpaceIdProvidersKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/providers', args] as const
}

export function useGetSpacesSpaceIdProviders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdProviders<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdProvidersAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/providers/all', args] as const
}

export function useGetSpacesSpaceIdProvidersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdProvidersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].providers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdProvidersAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdProvidersAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].providers.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdSearchKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/search', args] as const
}

export function useGetSpacesSpaceIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spaces[':spaceId'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdSocialRegimesKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes', args] as const
}

export function useGetSpacesSpaceIdSocialRegimes<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSocialRegimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['social-regimes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdSocialRegimes<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSocialRegimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['social-regimes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdSocialRegimesAllKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes/all', args] as const
}

export function useGetSpacesSpaceIdSocialRegimesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSocialRegimesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['social-regimes'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdSocialRegimesAll<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSocialRegimesAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['social-regimes'].all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacesSpaceIdSpacesInvoicingsKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/spaces-invoicings', args] as const
}

export function useGetSpacesSpaceIdSpacesInvoicings<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSpacesInvoicingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['spaces-invoicings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesSpaceIdSpacesInvoicings<TError = unknown>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesSpaceIdSpacesInvoicingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.spaces[':spaceId']['spaces-invoicings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
