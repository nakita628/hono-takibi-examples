import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getBoxMenusQueryKey() {
  return ['box', '/box/menus'] as const
}

export function getBoxMenusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBoxMenusQueryKey>
  >({
    queryKey: getBoxMenusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.box.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoxMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBoxMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoxMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoxMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBoxMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoxMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBusinessGroupsQueryKey(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
) {
  return ['business-groups', '/business-groups', args] as const
}

export function getBusinessGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsQueryKey>
  >({
    queryKey: getBusinessGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBusinessGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBusinessGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBusinessGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBusinessGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBusinessGroupsMutationKey() {
  return ['business-groups', '/business-groups', 'POST'] as const
}

export function getPostBusinessGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['business-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['business-groups']['$post']>) {
      return parseResponse(client['business-groups'].$post(args, options))
    },
  })
}

export function usePostBusinessGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['business-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBusinessGroupsMutationKey() {
  return ['business-groups', '/business-groups', 'PATCH'] as const
}

export function getPatchBusinessGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['business-groups']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['business-groups']['$patch']>) {
      return parseResponse(client['business-groups'].$patch(args, options))
    },
  })
}

export function usePatchBusinessGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['business-groups']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['business-groups']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getBusinessGroupsAllQueryKey(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
) {
  return ['business-groups', '/business-groups/all', args] as const
}

export function getBusinessGroupsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsAllQueryKey>
  >({
    queryKey: getBusinessGroupsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-groups'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBusinessGroupsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBusinessGroupsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBusinessGroupsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBusinessGroupsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBusinessGroupsIdQueryKey(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
) {
  return ['business-groups', '/business-groups/:id', args] as const
}

export function getBusinessGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsIdQueryKey>
  >({
    queryKey: getBusinessGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBusinessGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBusinessGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBusinessGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBusinessGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBusinessGroupsIdSpacesQueryKey(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
) {
  return ['business-groups', '/business-groups/:id/spaces', args] as const
}

export function getBusinessGroupsIdSpacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsIdSpacesQueryKey>
  >({
    queryKey: getBusinessGroupsIdSpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['business-groups'][':id'].spaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBusinessGroupsIdSpaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsIdSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getBusinessGroupsIdSpacesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBusinessGroupsIdSpaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessGroupsIdSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getBusinessGroupsIdSpacesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteBusinessGroupsIdSpacesSpaceIdMutationKey() {
  return ['business-groups', '/business-groups/:id/spaces/:spaceId', 'DELETE'] as const
}

export function getDeleteBusinessGroupsIdSpacesSpaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessGroupsIdSpacesSpaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['business-groups'][':id'].spaces[':spaceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBusinessGroupsIdSpacesSpaceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBusinessGroupsIdSpacesSpaceIdMutationOptions<
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

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceMutationKey() {
  return [
    'business-groups',
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/guest-in-space',
    'POST',
  ] as const
}

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
      >,
    ) {
      return parseResponse(
        client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][
          ':personId'
        ].customers[':folderId']['guest-in-space'].$post(args, options),
      )
    },
  })
}

export function usePostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpaceMutationOptions<
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

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesMutationKey() {
  return [
    'business-groups',
    '/business-groups/:id/spaces/:spaceId/legal-entities/:personId/customers/:folderId/spaces',
    'POST',
  ] as const
}

export function getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
      >,
    ) {
      return parseResponse(
        client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][
          ':personId'
        ].customers[':folderId'].spaces.$post(args, options),
      )
    },
  })
}

export function usePostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpacesMutationOptions<
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

export function getHubBusinessGroupsIdMenusQueryKey(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
) {
  return ['hub', '/hub/business-groups/:Id/menus', args] as const
}

export function getHubBusinessGroupsIdMenusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHubBusinessGroupsIdMenusQueryKey>
  >({
    queryKey: getHubBusinessGroupsIdMenusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub['business-groups'][':Id'].menus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHubBusinessGroupsIdMenus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubBusinessGroupsIdMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHubBusinessGroupsIdMenusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHubBusinessGroupsIdMenus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubBusinessGroupsIdMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHubBusinessGroupsIdMenusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHubDocumentsMutationKey() {
  return ['hub', '/hub/documents', 'POST'] as const
}

export function getPostHubDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hub.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHubDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hub.documents.$post>) {
      return parseResponse(client.hub.documents.$post(args, options))
    },
  })
}

export function usePostHubDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.hub.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getHubMenusQueryKey() {
  return ['hub', '/hub/menus'] as const
}

export function getHubMenusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHubMenusQueryKey>
  >({
    queryKey: getHubMenusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hub.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHubMenusAllQueryKey() {
  return ['hub', '/hub/menus/all'] as const
}

export function getHubMenusAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubMenusAllQueryKey>
  >({
    queryKey: getHubMenusAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hub.menus.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHubMenusAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubMenusAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHubMenusAllQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHubMenusAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHubMenusAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHubMenusAllQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostHubPayslipsMutationKey() {
  return ['hub', '/hub/payslips', 'POST'] as const
}

export function getPostHubPayslipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.payslips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hub.payslips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHubPayslipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hub.payslips.$post>) {
      return parseResponse(client.hub.payslips.$post(args, options))
    },
  })
}

export function usePostHubPayslips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.payslips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.hub.payslips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubPayslipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostHubSpacesSpaceIdDocumentsMutationKey() {
  return ['hub', '/hub/spaces/:spaceId/documents', 'POST'] as const
}

export function getPostHubSpacesSpaceIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHubSpacesSpaceIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>,
    ) {
      return parseResponse(client.hub.spaces[':spaceId'].documents.$post(args, options))
    },
  })
}

export function usePostHubSpacesSpaceIdDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubSpacesSpaceIdDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getHubSpacesSpaceIdMenusQueryKey(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
) {
  return ['hub', '/hub/spaces/:spaceId/menus', args] as const
}

export function getHubSpacesSpaceIdMenusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHubSpacesSpaceIdMenusQueryKey>
  >({
    queryKey: getHubSpacesSpaceIdMenusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hub.spaces[':spaceId'].menus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHubSpacesSpaceIdMenus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubSpacesSpaceIdMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHubSpacesSpaceIdMenusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHubSpacesSpaceIdMenus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHubSpacesSpaceIdMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHubSpacesSpaceIdMenusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHubSpacesSpaceIdPayslipsMutationKey() {
  return ['hub', '/hub/spaces/:spaceId/payslips', 'POST'] as const
}

export function getPostHubSpacesSpaceIdPayslipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHubSpacesSpaceIdPayslipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>,
    ) {
      return parseResponse(client.hub.spaces[':spaceId'].payslips.$post(args, options))
    },
  })
}

export function usePostHubSpacesSpaceIdPayslips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHubSpacesSpaceIdPayslipsMutationOptions<TError, TOnMutateResult>(
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

export function getMenusQueryKey() {
  return ['menus', '/menus'] as const
}

export function getMenusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMenusQueryKey>
  >({
    queryKey: getMenusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMenus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMenus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMenusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMenusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMenusMenuIdDocumentsMutationKey() {
  return ['menus', '/menus/:menuId/documents', 'POST'] as const
}

export function getPostMenusMenuIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.menus)[':menuId']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMenusMenuIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']>,
    ) {
      return parseResponse(client.menus[':menuId'].documents.$post(args, options))
    },
  })
}

export function usePostMenusMenuIdDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.menus)[':menuId']['documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMenusMenuIdDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getProfileQueryKey(args: InferRequestType<typeof client.profile.$get>) {
  return ['profile', '/profile', args] as const
}

export function getProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >({
    queryKey: getProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfileMutationKey() {
  return ['profile', '/profile', 'POST'] as const
}

export function getPostProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.$post>) {
      return parseResponse(client.profile.$post(args, options))
    },
  })
}

export function usePostProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.profile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchProfileMutationKey() {
  return ['profile', '/profile', 'PATCH'] as const
}

export function getPatchProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.profile.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.$patch>) {
      return parseResponse(client.profile.$patch(args, options))
    },
  })
}

export function usePatchProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$patch>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.profile.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchProfileEmailMutationKey() {
  return ['profile', '/profile/email', 'PATCH'] as const
}

export function getPatchProfileEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.email.$patch>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.profile.email.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchProfileEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.email.$patch>) {
      return parseResponse(client.profile.email.$patch(args, options))
    },
  })
}

export function usePatchProfileEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.email.$patch>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.profile.email.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProfileEmailMutationOptions<TError, TOnMutateResult>(
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

export function getProfileIdFileQueryKey(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
) {
  return ['profile', '/profile/id-file', args] as const
}

export function getProfileIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileIdFileQueryKey>
  >({
    queryKey: getProfileIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile['id-file'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileIdFileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileIdFileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchProfileMobileMutationKey() {
  return ['profile', '/profile/mobile', 'PATCH'] as const
}

export function getPatchProfileMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.mobile.$patch>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.profile.mobile.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchProfileMobileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.mobile.$patch>) {
      return parseResponse(client.profile.mobile.$patch(args, options))
    },
  })
}

export function usePatchProfileMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile.mobile.$patch>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.profile.mobile.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProfileMobileMutationOptions<TError, TOnMutateResult>(
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

export function getRegistrationQueryKey(args: InferRequestType<typeof client.registration.$get>) {
  return ['registration', '/registration', args] as const
}

export function getRegistrationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistrationQueryKey>
  >({
    queryKey: getRegistrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegistration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegistrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegistration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegistrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRegistrationMutationKey() {
  return ['registration', '/registration', 'POST'] as const
}

export function getPostRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registration.$post>) {
      return parseResponse(client.registration.$post(args, options))
    },
  })
}

export function usePostRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getSessionQueryKey() {
  return ['session', '/session'] as const
}

export function getSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionQueryKey>
  >({
    queryKey: getSessionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.session.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSessionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSessionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesQueryKey(args: InferRequestType<typeof client.spaces.$get>) {
  return ['spaces', '/spaces', args] as const
}

export function getSpacesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesQueryKey>
  >({
    queryKey: getSpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesMutationKey() {
  return ['spaces', '/spaces', 'POST'] as const
}

export function getPostSpacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.spaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spaces.$post>) {
      return parseResponse(client.spaces.$post(args, options))
    },
  })
}

export function usePostSpaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$post>>>>>,
        TError,
        InferRequestType<typeof client.spaces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpacesAllQueryKey(args: InferRequestType<typeof client.spaces.all.$get>) {
  return ['spaces', '/spaces/all', args] as const
}

export function getSpacesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spaces.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesAllQueryKey>
  >({
    queryKey: getSpacesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spaces.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdQueryKey(args: InferRequestType<(typeof client.spaces)[':id']['$get']>) {
  return ['spaces', '/spaces/:id', args] as const
}

export function getSpacesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.spaces)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdQueryKey>
  >({
    queryKey: getSpacesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSpacesIdMutationKey() {
  return ['spaces', '/spaces/:id', 'DELETE'] as const
}

export function getDeleteSpacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['$delete']>) {
      return parseResponse(client.spaces[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSpacesIdMutationKey() {
  return ['spaces', '/spaces/:id', 'PATCH'] as const
}

export function getPatchSpacesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['$patch']>) {
      return parseResponse(client.spaces[':id'].$patch(args, options))
    },
  })
}

export function usePatchSpacesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$patch']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpacesIdAccountingYearQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
) {
  return ['spaces', '/spaces/:id/accounting-year', args] as const
}

export function getSpacesIdAccountingYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdAccountingYearQueryKey>
  >({
    queryKey: getSpacesIdAccountingYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['accounting-year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdAccountingYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdAccountingYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdAccountingYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdAccountingYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdAccountingYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdAccountingYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdAccountingYearMutationKey() {
  return ['spaces', '/spaces/:id/accounting-year', 'POST'] as const
}

export function getPostSpacesIdAccountingYearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdAccountingYearMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']>,
    ) {
      return parseResponse(client.spaces[':id']['accounting-year'].$post(args, options))
    },
  })
}

export function usePostSpacesIdAccountingYear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdAccountingYearMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdCollectiveDecisionQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
) {
  return ['spaces', '/spaces/:id/collective-decision', args] as const
}

export function getSpacesIdCollectiveDecisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdCollectiveDecisionQueryKey>
  >({
    queryKey: getSpacesIdCollectiveDecisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['collective-decision'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdCollectiveDecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCollectiveDecisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdCollectiveDecisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdCollectiveDecision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCollectiveDecisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdCollectiveDecisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdCollectiveDecisionMutationKey() {
  return ['spaces', '/spaces/:id/collective-decision', 'POST'] as const
}

export function getPostSpacesIdCollectiveDecisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdCollectiveDecisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']>,
    ) {
      return parseResponse(client.spaces[':id']['collective-decision'].$post(args, options))
    },
  })
}

export function usePostSpacesIdCollectiveDecision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdCollectiveDecisionMutationOptions<
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

export function getSpacesIdCompanyEntitiesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities', args] as const
}

export function getSpacesIdCompanyEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdCompanyEntitiesQueryKey>
  >({
    queryKey: getSpacesIdCompanyEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['company-entities'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdCompanyEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdCompanyEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdCompanyEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdCompanyEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdCompanyEntitiesMutationKey() {
  return ['spaces', '/spaces/:id/company-entities', 'POST'] as const
}

export function getPostSpacesIdCompanyEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdCompanyEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']>,
    ) {
      return parseResponse(client.spaces[':id']['company-entities'].$post(args, options))
    },
  })
}

export function usePostSpacesIdCompanyEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdCompanyEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdCompanyEntitiesAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities/all', args] as const
}

export function getSpacesIdCompanyEntitiesAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdCompanyEntitiesAllQueryKey>
  >({
    queryKey: getSpacesIdCompanyEntitiesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['company-entities'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdCompanyEntitiesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdCompanyEntitiesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdCompanyEntitiesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdCompanyEntitiesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesIdCompanyEntitiesCompanyIdQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
) {
  return ['spaces', '/spaces/:id/company-entities/:companyId', args] as const
}

export function getSpacesIdCompanyEntitiesCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdCompanyEntitiesCompanyIdQueryKey>
  >({
    queryKey: getSpacesIdCompanyEntitiesCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':companyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdCompanyEntitiesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdCompanyEntitiesCompanyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdCompanyEntitiesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdCompanyEntitiesCompanyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesIdCompanyEntitiesCompanyIdMutationKey() {
  return ['spaces', '/spaces/:id/company-entities/:companyId', 'PATCH'] as const
}

export function getPatchSpacesIdCompanyEntitiesCompanyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdCompanyEntitiesCompanyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':companyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesIdCompanyEntitiesCompanyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdCompanyEntitiesCompanyIdMutationOptions<
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

export function getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/company-entities/:personId/details', args] as const
}

export function getSpacesIdCompanyEntitiesPersonIdDetailsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey>
  >({
    queryKey: getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':personId'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdCompanyEntitiesPersonIdDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdCompanyEntitiesPersonIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdCompanyEntitiesPersonIdDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdCompanyEntitiesPersonIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdCompanyEntitiesPersonIdDetailsMutationKey() {
  return ['spaces', '/spaces/:id/company-entities/:personId/details', 'POST'] as const
}

export function getPostSpacesIdCompanyEntitiesPersonIdDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdCompanyEntitiesPersonIdDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':personId'].details.$post(args, options),
      )
    },
  })
}

export function usePostSpacesIdCompanyEntitiesPersonIdDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdCompanyEntitiesPersonIdDetailsMutationOptions<
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

export function getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationMutationKey() {
  return [
    'spaces',
    '/spaces/:id/company-entities/:personId/details/:designation',
    'DELETE',
  ] as const
}

export function getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':personId'].details[':designation'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesIdCompanyEntitiesPersonIdDetailsDesignationMutationOptions<
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

export function getPostSpacesIdDocumentsDownloadMutationKey() {
  return ['spaces', '/spaces/:id/documents/download', 'POST'] as const
}

export function getPostSpacesIdDocumentsDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['documents']['download']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdDocumentsDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].documents.download.$post(args, options))
    },
  })
}

export function usePostSpacesIdDocumentsDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['documents']['download']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdDocumentsDownloadMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/folders/:folderId/persons/:memberId', args] as const
}

export function getSpacesIdFoldersFolderIdPersonsMemberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey>
  >({
    queryKey: getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdFoldersFolderIdPersonsMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdFoldersFolderIdPersonsMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdFoldersFolderIdPersonsMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdFoldersFolderIdPersonsMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdMutationKey() {
  return ['spaces', '/spaces/:id/folders/:folderId/persons/:memberId', 'PATCH'] as const
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdFoldersFolderIdPersonsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':memberId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdFoldersFolderIdPersonsMemberIdMutationOptions<
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

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessMutationKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:memberId/activeaccess',
    'PATCH',
  ] as const
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':memberId'].activeaccess.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccessMutationOptions<
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

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessMutationKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:memberId/unactiveaccess',
    'PATCH',
  ] as const
}

export function getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':memberId'].unactiveaccess.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccessMutationOptions<
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

export function getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceMutationKey() {
  return [
    'spaces',
    '/spaces/:id/folders/:folderId/persons/:personId/guest-in-space',
    'POST',
  ] as const
}

export function getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':personId']['guest-in-space'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpaceMutationOptions<
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

export function getSpacesIdGroupsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups', args] as const
}

export function getSpacesIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdGroupsQueryKey>
  >({
    queryKey: getSpacesIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesIdGroupsMutationKey() {
  return ['spaces', '/spaces/:id/groups', 'POST'] as const
}

export function getPostSpacesIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['groups']['$post']>) {
      return parseResponse(client.spaces[':id'].groups.$post(args, options))
    },
  })
}

export function usePostSpacesIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdGroupsAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups/all', args] as const
}

export function getSpacesIdGroupsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdGroupsAllQueryKey>
  >({
    queryKey: getSpacesIdGroupsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].groups.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdGroupsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdGroupsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdGroupsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdGroupsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
) {
  return ['spaces', '/spaces/:id/groups/:groupId', args] as const
}

export function getSpacesIdGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdGroupsGroupIdQueryKey>
  >({
    queryKey: getSpacesIdGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesIdGroupsGroupIdMutationKey() {
  return ['spaces', '/spaces/:id/groups/:groupId', 'PATCH'] as const
}

export function getPatchSpacesIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>,
    ) {
      return parseResponse(client.spaces[':id'].groups[':groupId'].$patch(args, options))
    },
  })
}

export function usePatchSpacesIdGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesIdGroupsGroupIdFoldersFolderIdMutationKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/folders/:folderId', 'DELETE'] as const
}

export function getDeleteSpacesIdGroupsGroupIdFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdGroupsGroupIdFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].folders[':folderId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesIdGroupsGroupIdFoldersFolderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdGroupsGroupIdFoldersFolderIdMutationOptions<
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

export function getPatchSpacesIdGroupsGroupIdFoldersFolderIdMutationKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/folders/:folderId', 'PATCH'] as const
}

export function getPatchSpacesIdGroupsGroupIdFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdGroupsGroupIdFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].folders[':folderId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesIdGroupsGroupIdFoldersFolderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdGroupsGroupIdFoldersFolderIdMutationOptions<
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

export function getDeleteSpacesIdGroupsGroupIdPersonsMemberIdMutationKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/persons/:memberId', 'DELETE'] as const
}

export function getDeleteSpacesIdGroupsGroupIdPersonsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdGroupsGroupIdPersonsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].persons[':memberId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesIdGroupsGroupIdPersonsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdGroupsGroupIdPersonsMemberIdMutationOptions<
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

export function getPatchSpacesIdGroupsGroupIdPersonsMemberIdMutationKey() {
  return ['spaces', '/spaces/:id/groups/:groupId/persons/:memberId', 'PATCH'] as const
}

export function getPatchSpacesIdGroupsGroupIdPersonsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdGroupsGroupIdPersonsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].persons[':memberId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesIdGroupsGroupIdPersonsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdGroupsGroupIdPersonsMemberIdMutationOptions<
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

export function getSpacesIdLegalQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
) {
  return ['spaces', '/spaces/:id/legal', args] as const
}

export function getSpacesIdLegalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdLegalQueryKey>
  >({
    queryKey: getSpacesIdLegalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].legal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIdLegal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdLegalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdLegalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdLegal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdLegalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdLegalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSpacesIdLegalMutationKey() {
  return ['spaces', '/spaces/:id/legal', 'PATCH'] as const
}

export function getPatchSpacesIdLegalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdLegalMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']>) {
      return parseResponse(client.spaces[':id'].legal.$patch(args, options))
    },
  })
}

export function usePatchSpacesIdLegal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdLegalMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdLogoQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
) {
  return ['spaces', '/spaces/:id/logo', args] as const
}

export function getSpacesIdLogoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdLogoQueryKey>
  >({
    queryKey: getSpacesIdLogoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].logo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdLogoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdLogoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdLogoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdLogoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesIdPersonsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons', args] as const
}

export function getSpacesIdPersonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsQueryKey>
  >({
    queryKey: getSpacesIdPersonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdPersonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdPersonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesIdPersonsMutationKey() {
  return ['spaces', '/spaces/:id/persons', 'POST'] as const
}

export function getPostSpacesIdPersonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['persons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdPersonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['persons']['$post']>) {
      return parseResponse(client.spaces[':id'].persons.$post(args, options))
    },
  })
}

export function usePostSpacesIdPersons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['persons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdPersonsMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdPersonsAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/all', args] as const
}

export function getSpacesIdPersonsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsAllQueryKey>
  >({
    queryKey: getSpacesIdPersonsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdPersonsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdPersonsAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchSpacesIdPersonsMemberIdPlayerMutationKey() {
  return ['spaces', '/spaces/:id/persons/:memberId/player', 'PATCH'] as const
}

export function getPatchSpacesIdPersonsMemberIdPlayerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdPersonsMemberIdPlayerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':id'].persons[':memberId'].player.$patch(args, options))
    },
  })
}

export function usePatchSpacesIdPersonsMemberIdPlayer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdPersonsMemberIdPlayerMutationOptions<
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

export function getSpacesIdPersonsPersonIdQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId', args] as const
}

export function getSpacesIdPersonsPersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsPersonIdQueryKey>
  >({
    queryKey: getSpacesIdPersonsPersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdPersonsPersonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdPersonsPersonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesIdPersonsPersonIdMutationKey() {
  return ['spaces', '/spaces/:id/persons/:personId', 'DELETE'] as const
}

export function getDeleteSpacesIdPersonsPersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdPersonsPersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>,
    ) {
      return parseResponse(client.spaces[':id'].persons[':personId'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesIdPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdPersonsPersonIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSpacesIdPersonsPersonIdMutationKey() {
  return ['spaces', '/spaces/:id/persons/:personId', 'PATCH'] as const
}

export function getPatchSpacesIdPersonsPersonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdPersonsPersonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>,
    ) {
      return parseResponse(client.spaces[':id'].persons[':personId'].$patch(args, options))
    },
  })
}

export function usePatchSpacesIdPersonsPersonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdPersonsPersonIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdPersonsPersonIdDetailsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/details', args] as const
}

export function getSpacesIdPersonsPersonIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsPersonIdDetailsQueryKey>
  >({
    queryKey: getSpacesIdPersonsPersonIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsPersonIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdPersonsPersonIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsPersonIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdPersonsPersonIdDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdPersonsPersonIdDetailsMutationKey() {
  return ['spaces', '/spaces/:id/persons/:personId/details', 'POST'] as const
}

export function getPostSpacesIdPersonsPersonIdDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdPersonsPersonIdDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['persons'][':personId']['details']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':id'].persons[':personId'].details.$post(args, options))
    },
  })
}

export function usePostSpacesIdPersonsPersonIdDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['details']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdPersonsPersonIdDetailsMutationOptions<
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

export function getDeleteSpacesIdPersonsPersonIdDetailsDesignationMutationKey() {
  return ['spaces', '/spaces/:id/persons/:personId/details/:designation', 'DELETE'] as const
}

export function getDeleteSpacesIdPersonsPersonIdDetailsDesignationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdPersonsPersonIdDetailsDesignationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].details[':designation'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesIdPersonsPersonIdDetailsDesignation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdPersonsPersonIdDetailsDesignationMutationOptions<
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

export function getSpacesIdPersonsPersonIdFoldersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/folders', args] as const
}

export function getSpacesIdPersonsPersonIdFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsPersonIdFoldersQueryKey>
  >({
    queryKey: getSpacesIdPersonsPersonIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsPersonIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdPersonsPersonIdFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsPersonIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdPersonsPersonIdFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesIdPersonsPersonIdGroupsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
) {
  return ['spaces', '/spaces/:id/persons/:personId/groups', args] as const
}

export function getSpacesIdPersonsPersonIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsPersonIdGroupsQueryKey>
  >({
    queryKey: getSpacesIdPersonsPersonIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsPersonIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdPersonsPersonIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsPersonIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdPersonsPersonIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesIdPersonsPersonIdPortfoliosQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/portfolios', args] as const
}

export function getSpacesIdPersonsPersonIdPortfoliosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsPersonIdPortfoliosQueryKey>
  >({
    queryKey: getSpacesIdPersonsPersonIdPortfoliosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].portfolios.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdPersonsPersonIdPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdPortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdPersonsPersonIdPortfoliosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdPersonsPersonIdPortfolios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesIdPersonsPersonIdPortfoliosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdPersonsPersonIdPortfoliosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdPersonsPersonIdPortfoliosMutationKey() {
  return ['spaces', '/spaces/:id/persons/:personId/portfolios', 'POST'] as const
}

export function getPostSpacesIdPersonsPersonIdPortfoliosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdPersonsPersonIdPortfoliosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].portfolios.$post(args, options),
      )
    },
  })
}

export function usePostSpacesIdPersonsPersonIdPortfolios<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdPersonsPersonIdPortfoliosMutationOptions<
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

export function getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdMutationKey() {
  return ['spaces', '/spaces/:id/portfolios/:portfolioId/persons/:memberId', 'PATCH'] as const
}

export function getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':id'].portfolios[':portfolioId'].persons[':memberId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesIdPortfoliosPortfolioIdPersonsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdMutationOptions<
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

export function getSpacesIdProfessionalVehiclesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
) {
  return ['spaces', '/spaces/:id/professional-vehicles', args] as const
}

export function getSpacesIdProfessionalVehiclesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdProfessionalVehiclesQueryKey>
  >({
    queryKey: getSpacesIdProfessionalVehiclesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['professional-vehicles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdProfessionalVehicles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdProfessionalVehiclesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdProfessionalVehiclesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdProfessionalVehicles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdProfessionalVehiclesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdProfessionalVehiclesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdProfessionalVehiclesMutationKey() {
  return ['spaces', '/spaces/:id/professional-vehicles', 'POST'] as const
}

export function getPostSpacesIdProfessionalVehiclesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdProfessionalVehiclesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>,
    ) {
      return parseResponse(client.spaces[':id']['professional-vehicles'].$post(args, options))
    },
  })
}

export function usePostSpacesIdProfessionalVehicles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdProfessionalVehiclesMutationOptions<
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

export function getSpacesIdSettingsNf203LogsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
) {
  return ['spaces', '/spaces/:id/settings/nf203/logs', args] as const
}

export function getSpacesIdSettingsNf203LogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdSettingsNf203LogsQueryKey>
  >({
    queryKey: getSpacesIdSettingsNf203LogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].settings.nf203.logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdSettingsNf203Logs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdSettingsNf203LogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesIdSettingsNf203LogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesIdSettingsNf203Logs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdSettingsNf203LogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesIdSettingsNf203LogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesIdSettingsNf203LogsMutationKey() {
  return ['spaces', '/spaces/:id/settings/nf203/logs', 'POST'] as const
}

export function getPostSpacesIdSettingsNf203LogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdSettingsNf203LogsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].settings.nf203.logs.$post(args, options))
    },
  })
}

export function usePostSpacesIdSettingsNf203Logs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdSettingsNf203LogsMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdStatusQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
) {
  return ['spaces', '/spaces/:id/status', args] as const
}

export function getSpacesIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdStatusQueryKey>
  >({
    queryKey: getSpacesIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesIdStatusMutationKey() {
  return ['spaces', '/spaces/:id/status', 'POST'] as const
}

export function getPostSpacesIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spaces)[':id']['status']['$post']>) {
      return parseResponse(client.spaces[':id'].status.$post(args, options))
    },
  })
}

export function usePostSpacesIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesIdStatusCodeMutationKey() {
  return ['spaces', '/spaces/:id/status/:code', 'DELETE'] as const
}

export function getDeleteSpacesIdStatusCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['status'][':code']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdStatusCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']>,
    ) {
      return parseResponse(client.spaces[':id'].status[':code'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesIdStatusCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['status'][':code']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdStatusCodeMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdTaxContractsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
) {
  return ['spaces', '/spaces/:id/tax-contracts', args] as const
}

export function getSpacesIdTaxContractsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdTaxContractsQueryKey>
  >({
    queryKey: getSpacesIdTaxContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id']['tax-contracts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdTaxContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdTaxContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdTaxContractsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdTaxContracts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdTaxContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdTaxContractsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesIdTaxContractsMutationKey() {
  return ['spaces', '/spaces/:id/tax-contracts', 'POST'] as const
}

export function getPostSpacesIdTaxContractsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdTaxContractsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']>,
    ) {
      return parseResponse(client.spaces[':id']['tax-contracts'].$post(args, options))
    },
  })
}

export function usePostSpacesIdTaxContracts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdTaxContractsMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesIdTriggersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
) {
  return ['spaces', '/spaces/:id/triggers', args] as const
}

export function getSpacesIdTriggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdTriggersQueryKey>
  >({
    queryKey: getSpacesIdTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':id'].triggers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdTriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesIdTriggersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesIdTriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesIdTriggersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesIdTriggersNameMutationKey() {
  return ['spaces', '/spaces/:id/triggers/:name', 'POST'] as const
}

export function getPostSpacesIdTriggersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesIdTriggersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>,
    ) {
      return parseResponse(client.spaces[':id'].triggers[':name'].$post(args, options))
    },
  })
}

export function usePostSpacesIdTriggersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesIdTriggersNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesIdTriggersNameMutationKey() {
  return ['spaces', '/spaces/:id/triggers/:name', 'DELETE'] as const
}

export function getDeleteSpacesIdTriggersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesIdTriggersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>,
    ) {
      return parseResponse(client.spaces[':id'].triggers[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSpacesIdTriggersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesIdTriggersNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesSpaceIdCommonFoldersIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/common-folders/:id', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdCommonFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdCommonFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['common-folders'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdCommonFoldersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdCommonFoldersIdMutationOptions<
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

export function getPatchSpacesSpaceIdCommonFoldersIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/common-folders/:id', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdCommonFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdCommonFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>,
    ) {
      return parseResponse(client.spaces[':spaceId']['common-folders'][':id'].$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdCommonFoldersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdCommonFoldersIdMutationOptions<
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

export function getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/company-entities/:id/follow-ups', args] as const
}

export function getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey>
  >({
    queryKey: getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdCompanyEntitiesIdFollowUps<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdCompanyEntitiesIdFollowUps<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdCustomersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/customers', args] as const
}

export function getSpacesSpaceIdCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdCustomersQueryKey>
  >({
    queryKey: getSpacesSpaceIdCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdCustomersAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/customers/all', args] as const
}

export function getSpacesSpaceIdCustomersAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdCustomersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdCustomersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].customers.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdCustomersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCustomersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdCustomersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdCustomersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdCustomersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdCustomersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/documents', args] as const
}

export function getSpacesSpaceIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesSpaceIdDocumentsDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].documents[':documentId'].$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdDocumentsDocumentIdMutationOptions<
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

export function getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/extend', args] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdExtendQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].extend.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsDocumentIdExtend<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdExtendQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsDocumentIdExtend<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdExtendQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdDocumentsDocumentIdExtendMutationKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/extend', 'POST'] as const
}

export function getPostSpacesSpaceIdDocumentsDocumentIdExtendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdDocumentsDocumentIdExtendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].extend.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdDocumentsDocumentIdExtend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdDocumentsDocumentIdExtendMutationOptions<
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

export function getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/folders', args] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdFoldersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsDocumentIdFolders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsDocumentIdFolders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdDocumentsDocumentIdMailingMutationKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/mailing', 'POST'] as const
}

export function getPostSpacesSpaceIdDocumentsDocumentIdMailingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdDocumentsDocumentIdMailingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].mailing.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdDocumentsDocumentIdMailing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdDocumentsDocumentIdMailingMutationOptions<
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

export function getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/mailingprice', args] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsDocumentIdMailingprice<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsDocumentIdMailingprice<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions', args] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsDocumentIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsDocumentIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdDocumentsDocumentIdVersionsMutationKey() {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions', 'POST'] as const
}

export function getPostSpacesSpaceIdDocumentsDocumentIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdDocumentsDocumentIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].versions.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdDocumentsDocumentIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdDocumentsDocumentIdVersionsMutationOptions<
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

export function getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions/current', args] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsDocumentIdVersionsCurrent<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsDocumentIdVersionsCurrent<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdAccessQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/access', args] as const
}

export function getSpacesSpaceIdDocumentsIdAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsIdAccessQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsIdAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsIdAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdAccountingQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/accounting', args] as const
}

export function getSpacesSpaceIdDocumentsIdAccountingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsIdAccountingQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsIdAccountingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].accounting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsIdAccounting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdAccountingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsIdAccountingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsIdAccounting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdAccountingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsIdAccountingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/download', args] as const
}

export function getSpacesSpaceIdDocumentsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdDocumentsIdDownloadQueryKey>
  >({
    queryKey: getSpacesSpaceIdDocumentsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdDocumentsIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdDocumentsIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployeesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employees', args] as const
}

export function getSpacesSpaceIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdEmployeesQueryKey>
  >({
    queryKey: getSpacesSpaceIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdEmployeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdEmployeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployeesAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employees/all', args] as const
}

export function getSpacesSpaceIdEmployeesAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdEmployeesAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdEmployeesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].employees.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdEmployeesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployeesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdEmployeesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdEmployeesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployeesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdEmployeesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employers', args] as const
}

export function getSpacesSpaceIdEmployersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdEmployersQueryKey>
  >({
    queryKey: getSpacesSpaceIdEmployersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].employers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdEmployers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdEmployersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdEmployers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdEmployersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployersAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/employers/all', args] as const
}

export function getSpacesSpaceIdEmployersAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdEmployersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdEmployersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].employers.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdEmployersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdEmployersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdEmployersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdEmployersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdEmployersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdExtendQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/extend', args] as const
}

export function getSpacesSpaceIdExtendQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdExtendQueryKey>
  >({
    queryKey: getSpacesSpaceIdExtendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].extend.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdExtend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdExtendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSpaceIdExtendQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdExtend<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdExtendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSpaceIdExtendQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSpacesSpaceIdExtendMutationKey() {
  return ['spaces', '/spaces/:spaceId/extend', 'POST'] as const
}

export function getPostSpacesSpaceIdExtendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdExtendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].extend.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdExtend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdExtendMutationOptions<TError, TOnMutateResult>(
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

export function getSpacesSpaceIdFoldersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders', args] as const
}

export function getSpacesSpaceIdFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSpaceIdFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSpaceIdFoldersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/all', args] as const
}

export function getSpacesSpaceIdFoldersAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/bank-statements/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/bank-statements/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/contractual-documents/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][
          ':documentId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/contractual-documents/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][
          ':documentId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/corporate-tax-declarations/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
          ':documentId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/corporate-tax-declarations/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
          ':documentId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-proofs/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-proofs/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-reports/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/expense-reports/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/invoices/:documentId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/invoices/:documentId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersFolderIdInvoicesDocumentIdMutationOptions<
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

export function getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey(
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

export function getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
          ':documentId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/other-taxes/:documentId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/other-taxes/:documentId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payrolls/:documentId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payrolls/:documentId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdMutationOptions<
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

export function getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/payrolls/:documentId/refresh',
    'POST',
  ] as const
}

export function getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].refresh.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payslips/:documentId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:folderId/payslips/:documentId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-contracts/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-contracts/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-declarations/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['social-declarations'][
          ':documentId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/social-declarations/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['social-declarations'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/vat-declarations/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/vat-declarations/:documentId',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentIdMutationOptions<
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

export function getSpacesSpaceIdFoldersIdQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id', args] as const
}

export function getSpacesSpaceIdFoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesSpaceIdFoldersIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSpacesSpaceIdFoldersIdAccountingYearMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/accounting-year', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdAccountingYearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdAccountingYearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['accounting-year'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdAccountingYear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdAccountingYearMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdAccountingYearMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/accounting-year', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdAccountingYearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdAccountingYearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['accounting-year'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdAccountingYear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdAccountingYearMutationOptions<
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

export function getSpacesSpaceIdFoldersIdAccountingsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings', args] as const
}

export function getSpacesSpaceIdFoldersIdAccountingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdAccountingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].accountings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdAccountings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdAccountingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdAccountings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdAccountingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings-journal', args] as const
}

export function getSpacesSpaceIdFoldersIdAccountingsJournalQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdAccountingsJournal<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdAccountingsJournalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdAccountingsJournal<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdAccountingsJournalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdBankQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', args] as const
}

export function getSpacesSpaceIdFoldersIdBankQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdBankQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdBankQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].bank.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdBank<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdBankQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdBankQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdBank<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdBankQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdBankQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdBankMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdBankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdBankMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$delete(args, options))
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdBank<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdBankMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdBankMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdBankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdBankMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdBank<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdBankMutationOptions<
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

export function getSpacesSpaceIdFoldersIdBankStatementsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank-statements', args] as const
}

export function getSpacesSpaceIdFoldersIdBankStatementsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdBankStatementsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdBankStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdBankStatements<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdBankStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdBankStatementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdBankStatements<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdBankStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdBankStatementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdBankStatementsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank-statements', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdBankStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdBankStatementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['bank-statements'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdBankStatements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdBankStatementsMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdCollectiveDecisionMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/collective-decision', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdCollectiveDecisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdCollectiveDecisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['collective-decision'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdCollectiveDecision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdCollectiveDecisionMutationOptions<
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

export function getSpacesSpaceIdFoldersIdCommonFoldersQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders', args] as const
}

export function getSpacesSpaceIdFoldersIdCommonFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdCommonFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['common-folders'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdCommonFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdCommonFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdCommonFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdCommonFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdCommonFoldersMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdCommonFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdCommonFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['common-folders'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdCommonFolders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdCommonFoldersMutationOptions<
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

export function getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders/all', args] as const
}

export function getSpacesSpaceIdFoldersIdCommonFoldersAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdCommonFoldersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdCommonFoldersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdCommonFoldersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdCommonFoldersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractingPartnerQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contracting-partner', args] as const
}

export function getSpacesSpaceIdFoldersIdContractingPartnerQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdContractingPartnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdContractingPartner<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractingPartnerQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdContractingPartner<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractingPartnerQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contracting-partner/space', args] as const
}

export function getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdContractingPartnerSpace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdContractingPartnerSpace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-documents', args] as const
}

export function getSpacesSpaceIdFoldersIdContractualDocumentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdContractualDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractualDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdContractualDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractualDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdContractualDocumentsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-documents', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdContractualDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdContractualDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contractual-documents'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdContractualDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdContractualDocumentsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-relationship', args] as const
}

export function getSpacesSpaceIdFoldersIdContractualRelationshipQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdContractualRelationship<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractualRelationshipQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdContractualRelationship<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdContractualRelationshipQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/coporate-tax-declarations', args] as const
}

export function getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdCoporateTaxDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdCoporateTaxDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/coporate-tax-declarations', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdCoporateTaxDeclarations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdCoporateTaxDeclarationsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdCustomerQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', args] as const
}

export function getSpacesSpaceIdFoldersIdCustomerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdCustomerQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdCustomerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].customer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdCustomer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCustomerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdCustomerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdCustomer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdCustomerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdCustomerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdCustomerMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$delete(args, options))
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdCustomerMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdCustomerMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdCustomerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdCustomer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdCustomerMutationOptions<
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

export function getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/deliveries-journal', args] as const
}

export function getSpacesSpaceIdFoldersIdDeliveriesJournalQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdDeliveriesJournal<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdDeliveriesJournalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdDeliveriesJournal<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdDeliveriesJournalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents', args] as const
}

export function getSpacesSpaceIdFoldersIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdDocumentsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].documents.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdDocumentsMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents/:documentId/detach', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].documents[':documentId'].detach.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetach<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetachMutationOptions<
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

export function getSpacesSpaceIdFoldersIdEmployeeQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', args] as const
}

export function getSpacesSpaceIdFoldersIdEmployeeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdEmployeeQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdEmployeeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].employee.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdEmployee<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdEmployeeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdEmployeeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdEmployee<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdEmployeeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdEmployeeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdEmployeeMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdEmployeeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdEmployeeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$delete(args, options))
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdEmployee<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdEmployeeMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdEmployeeMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdEmployeeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdEmployeeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdEmployee<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdEmployeeMutationOptions<
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

export function getSpacesSpaceIdFoldersIdExpenseProofsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-proofs', args] as const
}

export function getSpacesSpaceIdFoldersIdExpenseProofsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseProofsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdExpenseProofsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdExpenseProofs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseProofsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdExpenseProofs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseProofsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdExpenseProofsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-proofs', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdExpenseProofsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdExpenseProofsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-proofs'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdExpenseProofs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdExpenseProofsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdExpenseReportsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-reports', args] as const
}

export function getSpacesSpaceIdFoldersIdExpenseReportsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseReportsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdExpenseReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdExpenseReports<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdExpenseReports<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdExpenseReportsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-reports', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdExpenseReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdExpenseReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-reports'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdExpenseReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdExpenseReportsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey(
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

export function getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
          'expense-proofs'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdInsuranceQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', args] as const
}

export function getSpacesSpaceIdFoldersIdInsuranceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdInsuranceQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdInsuranceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].insurance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdInsurance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdInsuranceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdInsuranceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdInsurance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdInsuranceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdInsuranceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdInsuranceMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdInsuranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdInsuranceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].insurance.$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdInsurance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdInsuranceMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdInsuranceMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdInsuranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdInsuranceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].insurance.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdInsurance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdInsuranceMutationOptions<
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

export function getSpacesSpaceIdFoldersIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/invoices', args] as const
}

export function getSpacesSpaceIdFoldersIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdInvoicesQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdInvoicesMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/invoices', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdInvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdInvoices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdInvoicesMutationOptions<
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

export function getSpacesSpaceIdFoldersIdLegalEntityQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/legal-entity', args] as const
}

export function getSpacesSpaceIdFoldersIdLegalEntityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdLegalEntityQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdLegalEntityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdLegalEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdLegalEntityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdLegalEntityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdLegalEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdLegalEntityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdLegalEntityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdLoanQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', args] as const
}

export function getSpacesSpaceIdFoldersIdLoanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdLoanQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdLoanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].loan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdLoan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdLoanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdLoanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdLoan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdLoanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdLoanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdLoanMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdLoanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdLoanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$delete(args, options))
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdLoan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdLoanMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdLoanMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdLoanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdLoanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdLoan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdLoanMutationOptions<
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

export function getSpacesSpaceIdFoldersIdMessagesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages', args] as const
}

export function getSpacesSpaceIdFoldersIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdMessagesMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdMessagesMutationOptions<
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

export function getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages/:messageId', args] as const
}

export function getSpacesSpaceIdFoldersIdMessagesMessageIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdMessagesMessageId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdMessagesMessageId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesSpaceIdFoldersIdMessagesMessageIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages/:messageId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdMessagesMessageIdMutationOptions<
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

export function getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/nominative-social-declarations', args] as const
}

export function getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdNominativeSocialDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdNominativeSocialDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdOtherTaxesQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/other-taxes', args] as const
}

export function getSpacesSpaceIdFoldersIdOtherTaxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdOtherTaxesQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdOtherTaxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdOtherTaxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdOtherTaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdOtherTaxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdOtherTaxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdOtherTaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdOtherTaxesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdOtherTaxesMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/other-taxes', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdOtherTaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdOtherTaxesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['other-taxes'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdOtherTaxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdOtherTaxesMutationOptions<
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

export function getSpacesSpaceIdFoldersIdPasswordsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords', args] as const
}

export function getSpacesSpaceIdFoldersIdPasswordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdPasswordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdPasswords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdPasswordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdPasswords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdPasswordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdPasswordsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdPasswordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdPasswordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].passwords.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdPasswords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdPasswordsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', args] as const
}

export function getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdPasswordsPasswordId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdPasswordsPasswordId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdPasswordsPasswordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdPasswordsPasswordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdPasswordsPasswordIdMutationOptions<
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

export function getSpacesSpaceIdFoldersIdPayrollsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payrolls', args] as const
}

export function getSpacesSpaceIdFoldersIdPayrollsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdPayrollsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdPayrollsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payrolls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdPayrolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPayrollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdPayrollsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdPayrolls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPayrollsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdPayrollsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdPayrollsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/payrolls', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdPayrollsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdPayrollsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdPayrolls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdPayrollsMutationOptions<
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

export function getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/payrolls/:payrollId/nominative-social-declaration',
    'POST',
  ] as const
}

export function getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
          'nominative-social-declaration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/payrolls/:payrollId/nominative-social-declaration',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
          'nominative-social-declaration'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMutationOptions<
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

export function getSpacesSpaceIdFoldersIdPayslipsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payslips', args] as const
}

export function getSpacesSpaceIdFoldersIdPayslipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdPayslipsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdPayslipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payslips.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdPayslips<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPayslipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdPayslipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdPayslips<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdPayslipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdPayslipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdPayslipsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/payslips', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdPayslipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdPayslipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdPayslips<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdPayslipsMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/portfolio/:portfolioId', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].portfolio[':portfolioId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdPortfolioPortfolioIdMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/professional-vehicle', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdProfessionalVehicle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdProfessionalVehicleMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdProfessionalVehicleMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/professional-vehicle', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdProfessionalVehicleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdProfessionalVehicleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdProfessionalVehicle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdProfessionalVehicleMutationOptions<
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

export function getSpacesSpaceIdFoldersIdProviderQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', args] as const
}

export function getSpacesSpaceIdFoldersIdProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdProviderQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].provider.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdProviderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdProviderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdProviderMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$delete(args, options))
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdProviderMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdProviderMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$patch(args, options))
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdProviderMutationOptions<
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

export function getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/required-documents', args] as const
}

export function getSpacesSpaceIdFoldersIdRequiredDocumentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['required-documents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdRequiredDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdRequiredDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdRequiredDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdRequiredDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid',
    'POST',
  ] as const
}

export function getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['required-documents'][':requireddocumentid'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid',
    'PATCH',
  ] as const
}

export function getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['required-documents'][
          ':requireddocumentid'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdMutationKey() {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/required-documents/:requireddocumentid/documents/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['required-documents'][
          ':requireddocumentid'
        ].documents[':documentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentIdMutationOptions<
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

export function getSpacesSpaceIdFoldersIdSectionsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sections', args] as const
}

export function getSpacesSpaceIdFoldersIdSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdSectionsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdSectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdSocialContractsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-contracts', args] as const
}

export function getSpacesSpaceIdFoldersIdSocialContractsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdSocialContractsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdSocialContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdSocialContracts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdSocialContracts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdSocialContractsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-contracts', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdSocialContractsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdSocialContractsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-contracts'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdSocialContracts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdSocialContractsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-declarations', args] as const
}

export function getSpacesSpaceIdFoldersIdSocialDeclarationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdSocialDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdSocialDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialDeclarationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdSocialDeclarationsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-declarations', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdSocialDeclarationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdSocialDeclarationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-declarations'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdSocialDeclarations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdSocialDeclarationsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdSocialRegimesQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', args] as const
}

export function getSpacesSpaceIdFoldersIdSocialRegimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdSocialRegimesQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdSocialRegimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdSocialRegimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialRegimesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdSocialRegimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdSocialRegimesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdSocialRegimesMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdSocialRegimesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdSocialRegimesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-regimes'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdSocialRegimes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdSocialRegimesMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdSocialRegimesMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdSocialRegimesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdSocialRegimesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-regimes'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdSocialRegimes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdSocialRegimesMutationOptions<
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

export function getSpacesSpaceIdFoldersIdSumInvoicesQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sum-invoices', args] as const
}

export function getSpacesSpaceIdFoldersIdSumInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdSumInvoicesQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdSumInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdSumInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSumInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdSumInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdSumInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdSumInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdSumInvoicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSpacesSpaceIdFoldersIdTaxContractMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/tax-contract', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdTaxContractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdTaxContractMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['tax-contract'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdTaxContract<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdTaxContractMutationOptions<
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

export function getPatchSpacesSpaceIdFoldersIdTaxContractMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/tax-contract', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdFoldersIdTaxContractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdFoldersIdTaxContractMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['tax-contract'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdFoldersIdTaxContract<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdFoldersIdTaxContractMutationOptions<
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

export function getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/vat-declarations', args] as const
}

export function getSpacesSpaceIdFoldersIdVatDeclarationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdVatDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdVatDeclarationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdVatDeclarations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdVatDeclarationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdVatDeclarationsMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/vat-declarations', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdVatDeclarationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdVatDeclarationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['vat-declarations'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdVatDeclarations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdVatDeclarationsMutationOptions<
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

export function getSpacesSpaceIdFoldersIdDocumentClassQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', args] as const
}

export function getSpacesSpaceIdFoldersIdDocumentClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentClassQueryKey>
  >({
    queryKey: getSpacesSpaceIdFoldersIdDocumentClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdFoldersIdDocumentClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdFoldersIdDocumentClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdFoldersIdDocumentClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdFoldersIdDocumentClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdFoldersIdDocumentClassMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', 'POST'] as const
}

export function getPostSpacesSpaceIdFoldersIdDocumentClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdFoldersIdDocumentClassMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'][':documentClass'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdFoldersIdDocumentClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdFoldersIdDocumentClassMutationOptions<
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

export function getDeleteSpacesSpaceIdFoldersIdDocumentClassMutationKey() {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdFoldersIdDocumentClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdFoldersIdDocumentClassMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'][':documentClass'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdFoldersIdDocumentClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdFoldersIdDocumentClassMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdBanksQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdBanksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdBanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdBanksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdBanks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdBanksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdBanksMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdBanksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdBanksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].banks.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdBanks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdBanksMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdBanksAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdBanksAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdBanksAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdBanksAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdBanksAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/contracts', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdContractsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractsQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdContracts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdContracts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/contractual-relationships', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdContractualRelationships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdContractualRelationships<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey(
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

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdCustomers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdCustomers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdCustomersMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdCustomersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].customers.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdCustomers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdCustomersMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdCustomersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdCustomersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdInsurances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdInsurancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdInsurances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdInsurancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdInsurancesMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdInsurancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdInsurancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].insurances.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdInsurances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdInsurancesMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdInsurancesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdInsurancesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdLoansQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdLoansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdLoansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdLoansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdLoansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdLoansMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdLoansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdLoansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].loans.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdLoans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdLoansMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdLoansAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdLoansAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdLoansAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdLoansAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdLoansAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdProviders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdProviders<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdProvidersMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].providers.$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdProvidersMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdProvidersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdProvidersAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdSocialRegimes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdSocialRegimes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesMutationKey() {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes', 'POST'] as const
}

export function getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdLegalEntitiesIdSocialRegimes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdLegalEntitiesIdSocialRegimesMutationOptions<
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

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes/all', args] as const
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLegalEntitiesIdSocialRegimesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLegalEntitiesIdSocialRegimesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLoansQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/loans', args] as const
}

export function getSpacesSpaceIdLoansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLoansQueryKey>
  >({
    queryKey: getSpacesSpaceIdLoansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].loans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSpaceIdLoansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLoansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSpaceIdLoansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesSpaceIdLoansAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/loans/all', args] as const
}

export function getSpacesSpaceIdLoansAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdLoansAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdLoansAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].loans.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdLoansAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLoansAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdLoansAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdLoansAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdLoansAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdLoansAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdPersonsIdCallForDocumentMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/call-for-document', 'POST'] as const
}

export function getPostSpacesSpaceIdPersonsIdCallForDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdPersonsIdCallForDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['call-for-document'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdPersonsIdCallForDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdPersonsIdCallForDocumentMutationOptions<
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

export function getPatchSpacesSpaceIdPersonsIdCallForDocumentMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/call-for-document', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdPersonsIdCallForDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdPersonsIdCallForDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['call-for-document'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdPersonsIdCallForDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdPersonsIdCallForDocumentMutationOptions<
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

export function getSpacesSpaceIdPersonsIdEmployeesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees', args] as const
}

export function getSpacesSpaceIdPersonsIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsIdEmployeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsIdEmployeesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdPersonsIdEmployeesMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees', 'POST'] as const
}

export function getPostSpacesSpaceIdPersonsIdEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdPersonsIdEmployeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].persons[':id'].employees.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdPersonsIdEmployees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdPersonsIdEmployeesMutationOptions<
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

export function getSpacesSpaceIdPersonsIdEmployeesAllQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees/all', args] as const
}

export function getSpacesSpaceIdPersonsIdEmployeesAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsIdEmployeesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].employees.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsIdEmployeesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsIdEmployeesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsIdEmployeesAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsIdEmployeesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdPersonsIdExchangeQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/exchange', args] as const
}

export function getSpacesSpaceIdPersonsIdExchangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsIdExchangeQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsIdExchangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].exchange.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsIdExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdExchangeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsIdExchangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsIdExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdExchangeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsIdExchangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdPersonsIdFollowUpsQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/follow-ups', args] as const
}

export function getSpacesSpaceIdPersonsIdFollowUpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsIdFollowUpsQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsIdFollowUpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsIdFollowUps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdFollowUpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsIdFollowUpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsIdFollowUps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdFollowUpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsIdFollowUpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdPersonsIdGuestInSpaceMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'POST'] as const
}

export function getPostSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdPersonsIdGuestInSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['guest-in-space'].$post(args, options),
      )
    },
  })
}

export function usePostSpacesSpaceIdPersonsIdGuestInSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
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

export function getDeleteSpacesSpaceIdPersonsIdGuestInSpaceMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdPersonsIdGuestInSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['guest-in-space'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdPersonsIdGuestInSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
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

export function getPatchSpacesSpaceIdPersonsIdGuestInSpaceMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/guest-in-space', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdPersonsIdGuestInSpaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['guest-in-space'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdPersonsIdGuestInSpace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdPersonsIdGuestInSpaceMutationOptions<
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

export function getSpacesSpaceIdPersonsIdInvitationQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', args] as const
}

export function getSpacesSpaceIdPersonsIdInvitationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsIdInvitationQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsIdInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].invitation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsIdInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdInvitationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsIdInvitationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsIdInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsIdInvitationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsIdInvitationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSpacesSpaceIdPersonsIdInvitationMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'POST'] as const
}

export function getPostSpacesSpaceIdPersonsIdInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdPersonsIdInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']
      >,
    ) {
      return parseResponse(client.spaces[':spaceId'].persons[':id'].invitation.$post(args, options))
    },
  })
}

export function usePostSpacesSpaceIdPersonsIdInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdPersonsIdInvitationMutationOptions<
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

export function getDeleteSpacesSpaceIdPersonsIdInvitationMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'DELETE'] as const
}

export function getDeleteSpacesSpaceIdPersonsIdInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSpacesSpaceIdPersonsIdInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].invitation.$delete(args, options),
      )
    },
  })
}

export function useDeleteSpacesSpaceIdPersonsIdInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSpacesSpaceIdPersonsIdInvitationMutationOptions<
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

export function getPatchSpacesSpaceIdPersonsIdInvitationMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdPersonsIdInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdPersonsIdInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].invitation.$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdPersonsIdInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdPersonsIdInvitationMutationOptions<
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

export function getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation/:invitationId/send', 'POST'] as const
}

export function getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].invitation[':invitationId'].send.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSpacesSpaceIdPersonsIdInvitationInvitationIdSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpacesSpaceIdPersonsIdInvitationInvitationIdSendMutationOptions<
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

export function getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:memberId/folders/:id', args] as const
}

export function getSpacesSpaceIdPersonsMemberIdFoldersIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey>
  >({
    queryKey: getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdPersonsMemberIdFoldersId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdPersonsMemberIdFoldersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdPersonsMemberIdFoldersId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdPersonsMemberIdFoldersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSpacesSpaceIdPersonsMemberIdFoldersIdMutationKey() {
  return ['spaces', '/spaces/:spaceId/persons/:memberId/folders/:id', 'PATCH'] as const
}

export function getPatchSpacesSpaceIdPersonsMemberIdFoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSpacesSpaceIdPersonsMemberIdFoldersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchSpacesSpaceIdPersonsMemberIdFoldersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSpacesSpaceIdPersonsMemberIdFoldersIdMutationOptions<
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

export function getSpacesSpaceIdProvidersQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/providers', args] as const
}

export function getSpacesSpaceIdProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdProvidersQueryKey>
  >({
    queryKey: getSpacesSpaceIdProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdProvidersAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/providers/all', args] as const
}

export function getSpacesSpaceIdProvidersAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdProvidersAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdProvidersAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].providers.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdProvidersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdProvidersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdProvidersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdProvidersAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdProvidersAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdProvidersAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSearchQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/search', args] as const
}

export function getSpacesSpaceIdSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdSearchQueryKey>
  >({
    queryKey: getSpacesSpaceIdSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSpacesSpaceIdSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSpacesSpaceIdSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSpacesSpaceIdSocialRegimesQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes', args] as const
}

export function getSpacesSpaceIdSocialRegimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdSocialRegimesQueryKey>
  >({
    queryKey: getSpacesSpaceIdSocialRegimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['social-regimes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdSocialRegimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdSocialRegimesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdSocialRegimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSocialRegimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdSocialRegimesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSocialRegimesAllQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes/all', args] as const
}

export function getSpacesSpaceIdSocialRegimesAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdSocialRegimesAllQueryKey>
  >({
    queryKey: getSpacesSpaceIdSocialRegimesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['social-regimes'].all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdSocialRegimesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSocialRegimesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdSocialRegimesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdSocialRegimesAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSocialRegimesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdSocialRegimesAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSpacesInvoicingsQueryKey(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
) {
  return ['spaces', '/spaces/:spaceId/spaces-invoicings', args] as const
}

export function getSpacesSpaceIdSpacesInvoicingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesSpaceIdSpacesInvoicingsQueryKey>
  >({
    queryKey: getSpacesSpaceIdSpacesInvoicingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':spaceId']['spaces-invoicings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSpacesSpaceIdSpacesInvoicings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSpacesInvoicingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSpacesSpaceIdSpacesInvoicingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSpacesSpaceIdSpacesInvoicings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesSpaceIdSpacesInvoicingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSpacesSpaceIdSpacesInvoicingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
