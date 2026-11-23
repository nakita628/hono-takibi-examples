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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpCloudAppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/apps', keyArgs] as const
}

export function getOcsV2PhpCloudAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudAppsAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', keyArgs] as const
}

export function getOcsV2PhpCloudAppsAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudAppsAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.apps[':app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudAppsApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudAppsAppQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudAppsAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudAppsAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.apps[':app'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudAppsAppMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', 'POST'] as const
}

export function getPostOcsV2PhpCloudAppsAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudAppsAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudAppsApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpCloudAppsAppMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOcsV2PhpCloudAppsAppMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/apps/:app', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCloudAppsAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCloudAppsAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.apps[':app'].$delete(args, options))
    },
  })
}

export function useDeleteOcsV2PhpCloudAppsApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['apps'][':app']['$delete']>,
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
  const mutationDefaults = getDeleteOcsV2PhpCloudAppsAppMutationOptions<TError, TOnMutateResult>(
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

export function getOcsV2PhpCloudGroupsGroupIdSubadminsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/subadmins', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsGroupIdSubadminsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdSubadminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups[':groupId'].subadmins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroupsGroupIdSubadmins<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdSubadminsQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['subadmins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdSubadminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdSubadminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups[':groupId'].subadmins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudGroupsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups', 'POST'] as const
}

export function getPostOcsV2PhpCloudGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.groups.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpCloudGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getOcsV2PhpCloudGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOcsV2PhpCloudGroupsGroupIdMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', 'PUT'] as const
}

export function getPutOcsV2PhpCloudGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCloudGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$put(args, options))
    },
  })
}

export function usePutOcsV2PhpCloudGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$put']>,
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
  const mutationDefaults = getPutOcsV2PhpCloudGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOcsV2PhpCloudGroupsGroupIdMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCloudGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCloudGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.groups[':groupId'].$delete(args, options))
    },
  })
}

export function useDeleteOcsV2PhpCloudGroupsGroupId<
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['$delete']>,
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
  const mutationDefaults = getDeleteOcsV2PhpCloudGroupsGroupIdMutationOptions<
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

export function getOcsV2PhpCloudUsersRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/recent', keyArgs] as const
}

export function getOcsV2PhpCloudUsersRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersRecentQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUsersUserIdSubadminsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', keyArgs] as const
}

export function getOcsV2PhpCloudUsersUserIdSubadminsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersUserIdSubadminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].subadmins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersUserIdSubadmins<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersUserIdSubadminsQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersUserIdSubadminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersUserIdSubadminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudUsersUserIdSubadminsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersUserIdSubadminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersUserIdSubadminsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].subadmins.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpCloudUsersUserIdSubadmins<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$post']
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersUserIdSubadminsMutationOptions<
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

export function getDeleteOcsV2PhpCloudUsersUserIdSubadminsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCloudUsersUserIdSubadminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCloudUsersUserIdSubadminsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].subadmins.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpCloudUsersUserIdSubadmins<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpCloudUsersUserIdSubadminsMutationOptions<
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

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps', keyArgs] as const
}

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsProvisioningApiApiV1ConfigApps<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app', keyArgs] as const
}

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsProvisioningApiApiV1ConfigAppsApp<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key', keyArgs] as const
}

export function getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key', 'POST'] as const
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationOptions<
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

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.apps[':app'][':key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKey<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['apps'][':app'][':key']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyMutationOptions<
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

export function getOcsV2PhpCloudGroupsDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups/details', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroupsDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudGroupsGroupIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/users', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsGroupIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups[':groupId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']>
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdUsersQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups[':groupId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/groups/:groupId/users/details', keyArgs] as const
}

export function getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.groups[':groupId'].users.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudGroupsGroupIdUsersDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['groups'][':groupId']['users']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudGroupsGroupIdUsersDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.groups[':groupId'].users.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users', keyArgs] as const
}

export function getOcsV2PhpCloudUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudUsersMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersMutationOptions<TError, TOnMutateResult>(
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

export function getOcsV2PhpCloudUsersDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/details', keyArgs] as const
}

export function getOcsV2PhpCloudUsersDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUsersDisabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/disabled', keyArgs] as const
}

export function getOcsV2PhpCloudUsersDisabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersDisabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users.disabled.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersDisabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersDisabledQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users']['disabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersDisabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersDisabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users.disabled.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudUsersSearchByPhoneMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/search/by-phone', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersSearchByPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersSearchByPhoneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users.search['by-phone'].$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudUsersSearchByPhone<
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
                    (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users']['search']['by-phone']['$post']
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersSearchByPhoneMutationOptions<
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

export function getOcsV2PhpCloudUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', keyArgs] as const
}

export function getOcsV2PhpCloudUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOcsV2PhpCloudUsersUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'PUT'] as const
}

export function getPutOcsV2PhpCloudUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCloudUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$put(args, options))
    },
  })
}

export function usePutOcsV2PhpCloudUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$put']>,
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
  const mutationDefaults = getPutOcsV2PhpCloudUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOcsV2PhpCloudUsersUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCloudUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCloudUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteOcsV2PhpCloudUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteOcsV2PhpCloudUsersUserIdMutationOptions<
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

export function getPatchOcsV2PhpCloudUsersUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId', 'PATCH'] as const
}

export function getPatchOcsV2PhpCloudUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOcsV2PhpCloudUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchOcsV2PhpCloudUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['$patch']>,
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
  const mutationDefaults = getPatchOcsV2PhpCloudUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getOcsV2PhpCloudUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/user', keyArgs] as const
}

export function getOcsV2PhpCloudUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUserQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUserFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/user/fields', keyArgs] as const
}

export function getOcsV2PhpCloudUserFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUserFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.user.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUserFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUserFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUserFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUserFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.user.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUserFieldsUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/user/fields/:userId', keyArgs] as const
}

export function getOcsV2PhpCloudUserFieldsUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUserFieldsUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.user.fields[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUserFieldsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']>
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
                    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUserFieldsUserIdQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['fields'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUserFieldsUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUserFieldsUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.user.fields[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUserAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/user/apps', keyArgs] as const
}

export function getOcsV2PhpCloudUserAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUserAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.user.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUserApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUserAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['user']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUserAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUserAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.user.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOcsV2PhpCloudUsersUserIdCollectionNameMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/:collectionName', 'PUT'] as const
}

export function getPutOcsV2PhpCloudUsersUserIdCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCloudUsersUserIdCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'][':collectionName'].$put(args, options),
      )
    },
  })
}

export function usePutOcsV2PhpCloudUsersUserIdCollectionName<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId'][':collectionName']['$put']
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
  const mutationDefaults = getPutOcsV2PhpCloudUsersUserIdCollectionNameMutationOptions<
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

export function getPostOcsV2PhpCloudUsersUserIdWipeMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/wipe', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersUserIdWipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersUserIdWipeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].wipe.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudUsersUserIdWipe<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['wipe']['$post']
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersUserIdWipeMutationOptions<
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

export function getPutOcsV2PhpCloudUsersUserIdEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/enable', 'PUT'] as const
}

export function getPutOcsV2PhpCloudUsersUserIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCloudUsersUserIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].enable.$put(args, options))
    },
  })
}

export function usePutOcsV2PhpCloudUsersUserIdEnable<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['enable']['$put']
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
  const mutationDefaults = getPutOcsV2PhpCloudUsersUserIdEnableMutationOptions<
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

export function getPutOcsV2PhpCloudUsersUserIdDisableMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/disable', 'PUT'] as const
}

export function getPutOcsV2PhpCloudUsersUserIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCloudUsersUserIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].disable.$put(args, options))
    },
  })
}

export function usePutOcsV2PhpCloudUsersUserIdDisable<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['disable']['$put']
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
  const mutationDefaults = getPutOcsV2PhpCloudUsersUserIdDisableMutationOptions<
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

export function getOcsV2PhpCloudUsersUserIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', keyArgs] as const
}

export function getOcsV2PhpCloudUsersUserIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersUserIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']>
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersUserIdGroupsQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersUserIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersUserIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudUsersUserIdGroupsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersUserIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersUserIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].groups.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudUsersUserIdGroups<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$post']
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersUserIdGroupsMutationOptions<
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

export function getDeleteOcsV2PhpCloudUsersUserIdGroupsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCloudUsersUserIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCloudUsersUserIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].groups.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpCloudUsersUserIdGroups<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpCloudUsersUserIdGroupsMutationOptions<
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

export function getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/groups/details', keyArgs] as const
}

export function getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].groups.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersUserIdGroupsDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['groups']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersUserIdGroupsDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].groups.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/subadmins/details', keyArgs] as const
}

export function getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.users[':userId'].subadmins.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudUsersUserIdSubadminsDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryKey>
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
              (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['subadmins']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudUsersUserIdSubadminsDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.users[':userId'].subadmins.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudUsersUserIdWelcomeMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/users/:userId/welcome', 'POST'] as const
}

export function getPostOcsV2PhpCloudUsersUserIdWelcomeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudUsersUserIdWelcomeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.users[':userId'].welcome.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudUsersUserIdWelcome<
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
                    (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['cloud']['users'][':userId']['welcome']['$post']
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
  const mutationDefaults = getPostOcsV2PhpCloudUsersUserIdWelcomeMutationOptions<
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

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId/:configKey',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][
          ':configKey'
        ].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$post']
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
    getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationOptions<
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

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId/:configKey',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'][
          ':configKey'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKey<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId'][':configKey']['$delete']
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
    getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyMutationOptions<
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

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId', 'POST'] as const
}

export function getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationOptions<
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

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.provisioning_api.api.v1.config.users[':appId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppId<
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
                    (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['provisioning_api']['api']['v1']['config']['users'][':appId']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdMutationOptions<
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
