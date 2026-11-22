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

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteGroupMutationKey() {
  return ['delete-group', '/delete-group', 'POST'] as const
}

export function getPostDeleteGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['delete-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['delete-group']['$post']>) {
      return parseResponse(client['delete-group'].$post(args, options))
    },
  })
}

export function usePostDeleteGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-group']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['delete-group']['$post']>,
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
  const mutationDefaults = getPostDeleteGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetAccountSettingsMutationKey() {
  return ['get-account-settings', '/get-account-settings', 'POST'] as const
}

export function getPostGetAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['get-account-settings']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['get-account-settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['get-account-settings']['$post']>) {
      return parseResponse(client['get-account-settings'].$post(args, options))
    },
  })
}

export function usePostGetAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['get-account-settings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['get-account-settings']['$post']>,
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
  const mutationDefaults = getPostGetAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetGroupMutationKey() {
  return ['get-group', '/get-group', 'POST'] as const
}

export function getPostGetGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['get-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['get-group']['$post']>) {
      return parseResponse(client['get-group'].$post(args, options))
    },
  })
}

export function usePostGetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['get-group']['$post']>,
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
  const mutationDefaults = getPostGetGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetGroupConfigurationMutationKey() {
  return ['get-group-configuration', '/get-group-configuration', 'POST'] as const
}

export function getPostGetGroupConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['get-group-configuration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['get-group-configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGroupConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['get-group-configuration']['$post']>) {
      return parseResponse(client['get-group-configuration'].$post(args, options))
    },
  })
}

export function usePostGetGroupConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['get-group-configuration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['get-group-configuration']['$post']>,
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
  const mutationDefaults = getPostGetGroupConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetGroupQueryMutationKey() {
  return ['get-group-query', '/get-group-query', 'POST'] as const
}

export function getPostGetGroupQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['get-group-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGroupQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['get-group-query']['$post']>) {
      return parseResponse(client['get-group-query'].$post(args, options))
    },
  })
}

export function usePostGetGroupQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['get-group-query']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['get-group-query']['$post']>,
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
  const mutationDefaults = getPostGetGroupQueryMutationOptions<TError, TOnMutateResult>(
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

export function getResourcesArnTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources/:Arn/tags', keyArgs] as const
}

export function getResourcesArnTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesArnTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':Arn'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesArnTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':Arn']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesArnTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesArnTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesArnTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':Arn'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutResourcesArnTagsMutationKey() {
  return ['resources', '/resources/:Arn/tags', 'PUT'] as const
}

export function getPutResourcesArnTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResourcesArnTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']>) {
      return parseResponse(client.resources[':Arn'].tags.$put(args, options))
    },
  })
}

export function usePutResourcesArnTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resources)[':Arn']['tags']['$put']>,
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
  const mutationDefaults = getPutResourcesArnTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchResourcesArnTagsMutationKey() {
  return ['resources', '/resources/:Arn/tags', 'PATCH'] as const
}

export function getPatchResourcesArnTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourcesArnTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']>) {
      return parseResponse(client.resources[':Arn'].tags.$patch(args, options))
    },
  })
}

export function usePatchResourcesArnTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':Arn']['tags']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resources)[':Arn']['tags']['$patch']>,
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
  const mutationDefaults = getPatchResourcesArnTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupResourcesMutationKey() {
  return ['group-resources', '/group-resources', 'POST'] as const
}

export function getPostGroupResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['group-resources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['group-resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupResourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['group-resources']['$post']>) {
      return parseResponse(client['group-resources'].$post(args, options))
    },
  })
}

export function usePostGroupResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['group-resources']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['group-resources']['$post']>,
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
  const mutationDefaults = getPostGroupResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListGroupResourcesMutationKey() {
  return ['list-group-resources', '/list-group-resources', 'POST'] as const
}

export function getPostListGroupResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-group-resources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['list-group-resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListGroupResourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['list-group-resources']['$post']>) {
      return parseResponse(client['list-group-resources'].$post(args, options))
    },
  })
}

export function usePostListGroupResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['list-group-resources']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['list-group-resources']['$post']>,
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
  const mutationDefaults = getPostListGroupResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupsListMutationKey() {
  return ['groups-list', '/groups-list', 'POST'] as const
}

export function getPostGroupsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups-list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['groups-list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups-list']['$post']>) {
      return parseResponse(client['groups-list'].$post(args, options))
    },
  })
}

export function usePostGroupsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['groups-list']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['groups-list']['$post']>,
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
  const mutationDefaults = getPostGroupsListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPutGroupConfigurationMutationKey() {
  return ['put-group-configuration', '/put-group-configuration', 'POST'] as const
}

export function getPostPutGroupConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['put-group-configuration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['put-group-configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPutGroupConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['put-group-configuration']['$post']>) {
      return parseResponse(client['put-group-configuration'].$post(args, options))
    },
  })
}

export function usePostPutGroupConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['put-group-configuration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['put-group-configuration']['$post']>,
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
  const mutationDefaults = getPostPutGroupConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourcesSearchMutationKey() {
  return ['resources', '/resources/search', 'POST'] as const
}

export function getPostResourcesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.search.$post>) {
      return parseResponse(client.resources.search.$post(args, options))
    },
  })
}

export function usePostResourcesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.resources.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.resources.search.$post>,
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
  const mutationDefaults = getPostResourcesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostUngroupResourcesMutationKey() {
  return ['ungroup-resources', '/ungroup-resources', 'POST'] as const
}

export function getPostUngroupResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ungroup-resources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ungroup-resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUngroupResourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ungroup-resources']['$post']>) {
      return parseResponse(client['ungroup-resources'].$post(args, options))
    },
  })
}

export function usePostUngroupResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ungroup-resources']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['ungroup-resources']['$post']>,
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
  const mutationDefaults = getPostUngroupResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateAccountSettingsMutationKey() {
  return ['update-account-settings', '/update-account-settings', 'POST'] as const
}

export function getPostUpdateAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-account-settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['update-account-settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update-account-settings']['$post']>) {
      return parseResponse(client['update-account-settings'].$post(args, options))
    },
  })
}

export function usePostUpdateAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['update-account-settings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['update-account-settings']['$post']>,
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
  const mutationDefaults = getPostUpdateAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateGroupMutationKey() {
  return ['update-group', '/update-group', 'POST'] as const
}

export function getPostUpdateGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['update-group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['update-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update-group']['$post']>) {
      return parseResponse(client['update-group'].$post(args, options))
    },
  })
}

export function usePostUpdateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['update-group']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['update-group']['$post']>,
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
  const mutationDefaults = getPostUpdateGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateGroupQueryMutationKey() {
  return ['update-group-query', '/update-group-query', 'POST'] as const
}

export function getPostUpdateGroupQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['update-group-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['update-group-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateGroupQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update-group-query']['$post']>) {
      return parseResponse(client['update-group-query'].$post(args, options))
    },
  })
}

export function usePostUpdateGroupQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['update-group-query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['update-group-query']['$post']>,
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
  const mutationDefaults = getPostUpdateGroupQueryMutationOptions<TError, TOnMutateResult>(
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
