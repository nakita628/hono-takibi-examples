import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getBoxMenusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBoxMenusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.box.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBoxMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>
          >,
          ReturnType<typeof getBoxMenusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.box.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBoxMenusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBoxMenusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.box.menus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['$get']>>,
) {
  return ['business-groups', '/business-groups', toValue(args)] as const
}

export function getBusinessGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getBusinessGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['all']['$get']>>,
) {
  return ['business-groups', '/business-groups/all', toValue(args)] as const
}

export function getBusinessGroupsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessGroupsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-groups'].all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessGroupsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessGroupsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups']['all']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessGroupsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-groups'].all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups'][':id']['$get']>>,
) {
  return ['business-groups', '/business-groups/:id', toValue(args)] as const
}

export function getBusinessGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['business-groups'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessGroupsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['business-groups'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessGroupsIdSpacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>
  >,
) {
  return ['business-groups', '/business-groups/:id/spaces', toValue(args)] as const
}

export function getBusinessGroupsIdSpacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessGroupsIdSpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-groups'][':id'].spaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['business-groups'][':id']['spaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessGroupsIdSpacesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessGroupsIdSpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-groups'][':id'].spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>
  >,
) {
  return ['hub', '/hub/business-groups/:Id/menus', toValue(args)] as const
}

export function getHubBusinessGroupsIdMenusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHubBusinessGroupsIdMenusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hub['business-groups'][':Id'].menus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHubBusinessGroupsIdMenusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHubBusinessGroupsIdMenusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hub['business-groups'][':Id'].menus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.hub.documents.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getHubMenusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHubMenusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hub.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHubMenus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>
          >,
          ReturnType<typeof getHubMenusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHubMenusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHubMenusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hub.menus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHubMenusAllQueryKey() {
  return ['hub', '/hub/menus/all'] as const
}

export function getHubMenusAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHubMenusAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hub.menus.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHubMenusAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
          >,
          ReturnType<typeof getHubMenusAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.menus.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHubMenusAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHubMenusAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hub.menus.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub.payslips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.hub.payslips.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>,
) {
  return ['hub', '/hub/spaces/:spaceId/menus', toValue(args)] as const
}

export function getHubSpacesSpaceIdMenusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHubSpacesSpaceIdMenusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hub.spaces[':spaceId'].menus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHubSpacesSpaceIdMenusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHubSpacesSpaceIdMenusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hub.spaces[':spaceId'].menus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getMenusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMenusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.menus.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMenus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
          ReturnType<typeof getMenusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menus.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMenusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMenusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.menus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
) {
  return ['profile', '/profile', toValue(args)] as const
}

export function getProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          ReturnType<typeof getProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.profile.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.profile.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile)['id-file']['$get']>>,
) {
  return ['profile', '/profile/id-file', toValue(args)] as const
}

export function getProfileIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile)['id-file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile['id-file'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfileIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profile)['id-file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
            >
          >,
          ReturnType<typeof getProfileIdFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['id-file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile['id-file'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getRegistrationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.$get>>,
) {
  return ['registration', '/registration', toValue(args)] as const
}

export function getRegistrationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registration.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegistration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>
          >,
          ReturnType<typeof getRegistrationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.registration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getSessionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSessionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.session.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
          >,
          ReturnType<typeof getSessionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSessionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.session.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
) {
  return ['spaces', '/spaces', toValue(args)] as const
}

export function getSpacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
          ReturnType<typeof getSpacesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.spaces.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getSpacesAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.all.$get>>,
) {
  return ['spaces', '/spaces/all', toValue(args)] as const
}

export function getSpacesAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpacesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spaces.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>
          >,
          ReturnType<typeof getSpacesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spaces.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['$get']>>,
) {
  return ['spaces', '/spaces/:id', toValue(args)] as const
}

export function getSpacesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSpacesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/accounting-year', toValue(args)] as const
}

export function getSpacesIdAccountingYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdAccountingYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['accounting-year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['accounting-year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdAccountingYearQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdAccountingYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['accounting-year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/collective-decision', toValue(args)] as const
}

export function getSpacesIdCollectiveDecisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdCollectiveDecisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['collective-decision'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['collective-decision']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdCollectiveDecisionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdCollectiveDecisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['collective-decision'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/company-entities', toValue(args)] as const
}

export function getSpacesIdCompanyEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdCompanyEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['company-entities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['company-entities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdCompanyEntitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdCompanyEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['company-entities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/company-entities/all', toValue(args)] as const
}

export function getSpacesIdCompanyEntitiesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdCompanyEntitiesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['company-entities'].all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdCompanyEntitiesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdCompanyEntitiesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['company-entities'].all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdCompanyEntitiesCompanyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/company-entities/:companyId', toValue(args)] as const
}

export function getSpacesIdCompanyEntitiesCompanyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdCompanyEntitiesCompanyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':companyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['company-entities'][':companyId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['company-entities'][':companyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdCompanyEntitiesCompanyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdCompanyEntitiesCompanyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['company-entities'][':companyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:id/company-entities/:personId/details', toValue(args)] as const
}

export function getSpacesIdCompanyEntitiesPersonIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['company-entities'][':personId'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdCompanyEntitiesPersonIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['company-entities'][':personId'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:id/folders/:folderId/persons/:memberId', toValue(args)] as const
}

export function getSpacesIdFoldersFolderIdPersonsMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdFoldersFolderIdPersonsMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>>,
) {
  return ['spaces', '/spaces/:id/groups', toValue(args)] as const
}

export function getSpacesIdGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>>,
) {
  return ['spaces', '/spaces/:id/groups/all', toValue(args)] as const
}

export function getSpacesIdGroupsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdGroupsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].groups.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['groups']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdGroupsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdGroupsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].groups.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/groups/:groupId', toValue(args)] as const
}

export function getSpacesIdGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdGroupsGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>>,
) {
  return ['spaces', '/spaces/:id/legal', toValue(args)] as const
}

export function getSpacesIdLegalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdLegalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].legal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdLegal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdLegalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['legal']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdLegalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdLegalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].legal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>>,
) {
  return ['spaces', '/spaces/:id/logo', toValue(args)] as const
}

export function getSpacesIdLogoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdLogoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].logo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdLogo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdLogoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['logo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdLogoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdLogoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].logo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdPersonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>>,
) {
  return ['spaces', '/spaces/:id/persons', toValue(args)] as const
}

export function getSpacesIdPersonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdPersons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdPersonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>>,
) {
  return ['spaces', '/spaces/:id/persons/all', toValue(args)] as const
}

export function getSpacesIdPersonsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['persons']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId', toValue(args)] as const
}

export function getSpacesIdPersonsPersonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsPersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsPersonIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsPersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons[':personId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/details', toValue(args)] as const
}

export function getSpacesIdPersonsPersonIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsPersonIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['details']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsPersonIdDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsPersonIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons[':personId'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':id']['persons'][':personId']['details']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/folders', toValue(args)] as const
}

export function getSpacesIdPersonsPersonIdFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsPersonIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsPersonIdFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsPersonIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons[':personId'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdPersonsPersonIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/groups', toValue(args)] as const
}

export function getSpacesIdPersonsPersonIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsPersonIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdPersonsPersonIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsPersonIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons[':personId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesIdPersonsPersonIdPortfoliosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/persons/:personId/portfolios', toValue(args)] as const
}

export function getSpacesIdPersonsPersonIdPortfoliosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdPersonsPersonIdPortfoliosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].persons[':personId'].portfolios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesIdPersonsPersonIdPortfoliosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdPersonsPersonIdPortfoliosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].persons[':personId'].portfolios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/professional-vehicles', toValue(args)] as const
}

export function getSpacesIdProfessionalVehiclesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdProfessionalVehiclesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['professional-vehicles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdProfessionalVehiclesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdProfessionalVehiclesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['professional-vehicles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
  >,
) {
  return ['spaces', '/spaces/:id/settings/nf203/logs', toValue(args)] as const
}

export function getSpacesIdSettingsNf203LogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdSettingsNf203LogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].settings.nf203.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesIdSettingsNf203LogsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdSettingsNf203LogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].settings.nf203.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['status']['$get']>>,
) {
  return ['spaces', '/spaces/:id/status', toValue(args)] as const
}

export function getSpacesIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>,
) {
  return ['spaces', '/spaces/:id/tax-contracts', toValue(args)] as const
}

export function getSpacesIdTaxContractsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdTaxContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id']['tax-contracts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['tax-contracts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdTaxContractsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdTaxContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id']['tax-contracts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>>,
) {
  return ['spaces', '/spaces/:id/triggers', toValue(args)] as const
}

export function getSpacesIdTriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesIdTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':id'].triggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesIdTriggersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':id']['triggers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesIdTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesIdTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':id'].triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/company-entities/:id/follow-ups', toValue(args)] as const
}

export function getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdCompanyEntitiesIdFollowUpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/customers', toValue(args)] as const
}

export function getSpacesSpaceIdCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdCustomersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdCustomersAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/customers/all', toValue(args)] as const
}

export function getSpacesSpaceIdCustomersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdCustomersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].customers.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdCustomersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdCustomersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].customers.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/documents', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdDocumentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/extend', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdExtendQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].extend.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdExtendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].extend.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/folders', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/mailingprice', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdMailingpriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:documentId/versions', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/documents/:documentId/versions/current',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsDocumentIdVersionsCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/access', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsIdAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsIdAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].access.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdDocumentsIdAccessQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsIdAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':id'].access.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdAccountingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/accounting', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsIdAccountingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsIdAccountingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].accounting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsIdAccountingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsIdAccountingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':id'].accounting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdDocumentsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/documents/:id/download', toValue(args)] as const
}

export function getSpacesSpaceIdDocumentsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdDocumentsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].documents[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdDocumentsIdDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdDocumentsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].documents[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/employees', toValue(args)] as const
}

export function getSpacesSpaceIdEmployeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdEmployeesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployeesAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/employees/all', toValue(args)] as const
}

export function getSpacesSpaceIdEmployeesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdEmployeesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].employees.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdEmployeesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdEmployeesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].employees.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/employers', toValue(args)] as const
}

export function getSpacesSpaceIdEmployersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdEmployersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].employers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdEmployersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdEmployersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].employers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdEmployersAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/employers/all', toValue(args)] as const
}

export function getSpacesSpaceIdEmployersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdEmployersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].employers.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdEmployersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdEmployersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].employers.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdExtendQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/extend', toValue(args)] as const
}

export function getSpacesSpaceIdExtendQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdExtendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].extend.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['extend']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdExtendQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdExtendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].extend.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/folders', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/all', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:folderId/nominative-social-declarations/:documentId',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
          ':documentId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
            ':documentId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdAccountingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdAccountingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].accountings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdAccountingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].accountings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/accountings-journal', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdAccountingsJournalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdAccountingsJournalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdBankQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdBankQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdBankQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].bank.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdBankQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdBankQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].bank.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/bank-statements', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdBankStatementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdBankStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdBankStatementsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdBankStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdCommonFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdCommonFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['common-folders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdCommonFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/common-folders/all', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdCommonFoldersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdCommonFoldersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractingPartnerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contracting-partner', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdContractingPartnerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdContractingPartnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdContractingPartnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/contracting-partner/space',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdContractingPartnerSpaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-documents', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdContractualDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdContractualDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/contractual-relationship', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdContractualRelationshipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdContractualRelationshipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/coporate-tax-declarations',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdCoporateTaxDeclarationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/customer', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdCustomerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdCustomerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].customer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdCustomerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdCustomerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].customer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/deliveries-journal', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdDeliveriesJournalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdDeliveriesJournalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/documents', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/employee', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdEmployeeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdEmployeeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].employee.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdEmployeeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdEmployeeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].employee.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-proofs', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdExpenseProofsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdExpenseProofsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseProofsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdExpenseProofsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/expense-reports', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdExpenseReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdExpenseReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdExpenseReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdExpenseReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/expense-reports/:expenseReportId/expense-proofs',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
          'expense-proofs'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
            'expense-proofs'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdInsuranceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/insurance', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdInsuranceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdInsuranceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].insurance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdInsuranceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdInsuranceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].insurance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/invoices', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdInvoicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/legal-entity', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdLegalEntityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdLegalEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdLegalEntityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdLegalEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdLoanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/loan', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdLoanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdLoanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].loan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdLoanQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdLoanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].loan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/messages/:messageId', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/folders/:id/nominative-social-declarations',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdNominativeSocialDeclarationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdOtherTaxesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/other-taxes', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdOtherTaxesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdOtherTaxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdOtherTaxesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdOtherTaxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdPasswordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdPasswordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdPasswordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/passwords/:passwordId', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdPasswordsPasswordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payrolls', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdPayrollsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdPayrollsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payrolls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdPayrollsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdPayrollsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].payrolls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/payslips', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdPayslipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdPayslipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].payslips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdPayslipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdPayslipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].payslips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/provider', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].provider.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdProviderQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].provider.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/required-documents', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdRequiredDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['required-documents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdRequiredDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['required-documents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sections', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdSectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdFoldersIdSectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdFoldersIdSocialContractsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-contracts', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdSocialContractsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdSocialContractsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-declarations', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdSocialDeclarationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialDeclarationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/social-regimes', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdSocialRegimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialRegimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdSocialRegimesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdSocialRegimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/sum-invoices', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdSumInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdSumInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdSumInvoicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdSumInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/vat-declarations', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdVatDeclarationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdVatDeclarationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/folders/:id/:documentClass', toValue(args)] as const
}

export function getSpacesSpaceIdFoldersIdDocumentClassQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdFoldersIdDocumentClassQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdFoldersIdDocumentClassQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdFoldersIdDocumentClassQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdBanksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdBanksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdBanksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/banks/all', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdBanksAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdBanksAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/contracts', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdContractsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/legal-entities/:id/contractual-relationships',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/legal-entities/:id/contractual-relationships/all',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAllQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/customers/all', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdCustomersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdInsurancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/insurances/all', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdInsurancesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdLoansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdLoansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdLoansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdLoansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/loans/all', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdLoansAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdLoansAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/providers/all', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdProvidersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/legal-entities/:id/social-regimes', toValue(args)] as const
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdSocialRegimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
    >
  >,
) {
  return [
    'spaces',
    '/spaces/:spaceId/legal-entities/:id/social-regimes/all',
    toValue(args),
  ] as const
}

export function getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLegalEntitiesIdSocialRegimesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLoansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/loans', toValue(args)] as const
}

export function getSpacesSpaceIdLoansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLoansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].loans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesSpaceIdLoans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdLoansQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLoansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].loans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdLoansAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/loans/all', toValue(args)] as const
}

export function getSpacesSpaceIdLoansAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdLoansAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].loans.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdLoansAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdLoansAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].loans.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsIdEmployeesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsIdEmployeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].employees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsIdEmployeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':id'].employees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/employees/all', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsIdEmployeesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsIdEmployeesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].employees.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdPersonsIdEmployeesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsIdEmployeesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':id'].employees.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdPersonsIdExchangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/exchange', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsIdExchangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsIdExchangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].exchange.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdPersonsIdExchangeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsIdExchangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':id'].exchange.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdPersonsIdFollowUpsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/follow-ups', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsIdFollowUpsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsIdFollowUpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdPersonsIdFollowUpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsIdFollowUpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:id/invitation', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsIdInvitationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsIdInvitationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':id'].invitation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdPersonsIdInvitationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsIdInvitationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':id'].invitation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
    >
  >,
) {
  return ['spaces', '/spaces/:spaceId/persons/:memberId/folders/:id', toValue(args)] as const
}

export function getSpacesSpaceIdPersonsMemberIdFoldersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdPersonsMemberIdFoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/providers', toValue(args)] as const
}

export function getSpacesSpaceIdProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdProvidersAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/providers/all', toValue(args)] as const
}

export function getSpacesSpaceIdProvidersAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdProvidersAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].providers.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdProvidersAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdProvidersAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].providers.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>>,
) {
  return ['spaces', '/spaces/:spaceId/search', toValue(args)] as const
}

export function getSpacesSpaceIdSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId'].search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId'].search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSocialRegimesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes', toValue(args)] as const
}

export function getSpacesSpaceIdSocialRegimesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdSocialRegimesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['social-regimes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdSocialRegimesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdSocialRegimesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['social-regimes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSocialRegimesAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/social-regimes/all', toValue(args)] as const
}

export function getSpacesSpaceIdSocialRegimesAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdSocialRegimesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['social-regimes'].all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdSocialRegimesAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdSocialRegimesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['social-regimes'].all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacesSpaceIdSpacesInvoicingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>
  >,
) {
  return ['spaces', '/spaces/:spaceId/spaces-invoicings', toValue(args)] as const
}

export function getSpacesSpaceIdSpacesInvoicingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesSpaceIdSpacesInvoicingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':spaceId']['spaces-invoicings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpacesSpaceIdSpacesInvoicingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesSpaceIdSpacesInvoicingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':spaceId']['spaces-invoicings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
