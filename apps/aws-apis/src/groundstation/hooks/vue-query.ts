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

export function getAgentKey() {
  return ['agent'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getContactKey() {
  return ['contact'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDataflowEndpointGroupKey() {
  return ['dataflowEndpointGroup'] as const
}

export function getEphemeridesKey() {
  return ['ephemerides'] as const
}

export function getEphemerisKey() {
  return ['ephemeris'] as const
}

export function getGroundstationKey() {
  return ['groundstation'] as const
}

export function getMinuteUsageKey() {
  return ['minute-usage'] as const
}

export function getMissionprofileKey() {
  return ['missionprofile'] as const
}

export function getSatelliteKey() {
  return ['satellite'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getContactContactIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contact)[':contactId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['contact', '/contact/:contactId', keyArgs] as const
}

export function getContactContactIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contact)[':contactId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contact[':contactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contact)[':contactId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactContactIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contact[':contactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteContactContactIdMutationKey() {
  return ['contact', '/contact/:contactId', 'DELETE'] as const
}

export function getDeleteContactContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)[':contactId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)[':contactId']['$delete']>) {
      return parseResponse(client.contact[':contactId'].$delete(args, options))
    },
  })
}

export function useDeleteContactContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contact)[':contactId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contact)[':contactId']['$delete']>,
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
  const mutationDefaults = getDeleteContactContactIdMutationOptions<TError, TOnMutateResult>(
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

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$post>) {
      return parseResponse(client.config.$post(args, options))
    },
  })
}

export function usePostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.config.$post>,
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
  const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDataflowEndpointGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataflowEndpointGroup.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', keyArgs] as const
}

export function getDataflowEndpointGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataflowEndpointGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataflowEndpointGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataflowEndpointGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataflowEndpointGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataflowEndpointGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
            >
          >,
          ReturnType<typeof getDataflowEndpointGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataflowEndpointGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataflowEndpointGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataflowEndpointGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataflowEndpointGroupMutationKey() {
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', 'POST'] as const
}

export function getPostDataflowEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dataflowEndpointGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDataflowEndpointGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataflowEndpointGroup.$post>) {
      return parseResponse(client.dataflowEndpointGroup.$post(args, options))
    },
  })
}

export function usePostDataflowEndpointGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dataflowEndpointGroup.$post>,
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
  const mutationDefaults = getPostDataflowEndpointGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPostEphemerisMutationKey() {
  return ['ephemeris', '/ephemeris', 'POST'] as const
}

export function getPostEphemerisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemeris.$post>>>>>,
    TError,
    InferRequestType<typeof client.ephemeris.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEphemerisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ephemeris.$post>) {
      return parseResponse(client.ephemeris.$post(args, options))
    },
  })
}

export function usePostEphemeris<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemeris.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ephemeris.$post>,
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
  const mutationDefaults = getPostEphemerisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMissionprofileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.missionprofile.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['missionprofile', '/missionprofile', keyArgs] as const
}

export function getMissionprofileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.missionprofile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMissionprofileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.missionprofile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMissionprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.missionprofile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
          >,
          ReturnType<typeof getMissionprofileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMissionprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMissionprofileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.missionprofile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMissionprofileMutationKey() {
  return ['missionprofile', '/missionprofile', 'POST'] as const
}

export function getPostMissionprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.missionprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMissionprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.missionprofile.$post>) {
      return parseResponse(client.missionprofile.$post(args, options))
    },
  })
}

export function usePostMissionprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.missionprofile.$post>,
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
  const mutationDefaults = getPostMissionprofileMutationOptions<TError, TOnMutateResult>(
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

export function getConfigConfigTypeConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['config', '/config/:configType/:configId', keyArgs] as const
}

export function getConfigConfigTypeConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigConfigTypeConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config[':configType'][':configId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigConfigTypeConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConfigConfigTypeConfigIdQueryKey>
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
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigConfigTypeConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigConfigTypeConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config[':configType'][':configId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConfigConfigTypeConfigIdMutationKey() {
  return ['config', '/config/:configType/:configId', 'PUT'] as const
}

export function getPutConfigConfigTypeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigConfigTypeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
    ) {
      return parseResponse(client.config[':configType'][':configId'].$put(args, options))
    },
  })
}

export function usePutConfigConfigTypeConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
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
  const mutationDefaults = getPutConfigConfigTypeConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConfigConfigTypeConfigIdMutationKey() {
  return ['config', '/config/:configType/:configId', 'DELETE'] as const
}

export function getDeleteConfigConfigTypeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConfigConfigTypeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
    ) {
      return parseResponse(client.config[':configType'][':configId'].$delete(args, options))
    },
  })
}

export function useDeleteConfigConfigTypeConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
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
  const mutationDefaults = getDeleteConfigConfigTypeConfigIdMutationOptions<
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

export function getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    keyArgs,
  ] as const
}

export function getDataflowEndpointGroupDataflowEndpointGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataflowEndpointGroupDataflowEndpointGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
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
                    (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']
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
                    (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey>
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
            ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationKey() {
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    'DELETE',
  ] as const
}

export function getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDataflowEndpointGroupDataflowEndpointGroupId<
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
                    (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
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
  const mutationDefaults = getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationOptions<
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

export function getEphemerisEphemerisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ephemeris', '/ephemeris/:ephemerisId', keyArgs] as const
}

export function getEphemerisEphemerisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEphemerisEphemerisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ephemeris[':ephemerisId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEphemerisEphemerisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEphemerisEphemerisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEphemerisEphemerisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEphemerisEphemerisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ephemeris[':ephemerisId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEphemerisEphemerisIdMutationKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'PUT'] as const
}

export function getPutEphemerisEphemerisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEphemerisEphemerisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>) {
      return parseResponse(client.ephemeris[':ephemerisId'].$put(args, options))
    },
  })
}

export function usePutEphemerisEphemerisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>,
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
  const mutationDefaults = getPutEphemerisEphemerisIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEphemerisEphemerisIdMutationKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'DELETE'] as const
}

export function getDeleteEphemerisEphemerisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEphemerisEphemerisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>) {
      return parseResponse(client.ephemeris[':ephemerisId'].$delete(args, options))
    },
  })
}

export function useDeleteEphemerisEphemerisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>,
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
  const mutationDefaults = getDeleteEphemerisEphemerisIdMutationOptions<TError, TOnMutateResult>(
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

export function getMissionprofileMissionProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['missionprofile', '/missionprofile/:missionProfileId', keyArgs] as const
}

export function getMissionprofileMissionProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMissionprofileMissionProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.missionprofile[':missionProfileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMissionprofileMissionProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMissionprofileMissionProfileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMissionprofileMissionProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMissionprofileMissionProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.missionprofile[':missionProfileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMissionprofileMissionProfileIdMutationKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'PUT'] as const
}

export function getPutMissionprofileMissionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMissionprofileMissionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
    ) {
      return parseResponse(client.missionprofile[':missionProfileId'].$put(args, options))
    },
  })
}

export function usePutMissionprofileMissionProfileId<
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
                Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
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
  const mutationDefaults = getPutMissionprofileMissionProfileIdMutationOptions<
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

export function getDeleteMissionprofileMissionProfileIdMutationKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'DELETE'] as const
}

export function getDeleteMissionprofileMissionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMissionprofileMissionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
    ) {
      return parseResponse(client.missionprofile[':missionProfileId'].$delete(args, options))
    },
  })
}

export function useDeleteMissionprofileMissionProfileId<
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
                Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
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
  const mutationDefaults = getDeleteMissionprofileMissionProfileIdMutationOptions<
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

export function getAgentAgentIdConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['agent', '/agent/:agentId/configuration', keyArgs] as const
}

export function getAgentAgentIdConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentAgentIdConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent[':agentId'].configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentAgentIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentAgentIdConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentAgentIdConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentAgentIdConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent[':agentId'].configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMinuteUsageMutationKey() {
  return ['minute-usage', '/minute-usage', 'POST'] as const
}

export function getPostMinuteUsageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['minute-usage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['minute-usage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMinuteUsageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['minute-usage']['$post']>) {
      return parseResponse(client['minute-usage'].$post(args, options))
    },
  })
}

export function usePostMinuteUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['minute-usage']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['minute-usage']['$post']>,
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
  const mutationDefaults = getPostMinuteUsageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSatelliteSatelliteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['satellite', '/satellite/:satelliteId', keyArgs] as const
}

export function getSatelliteSatelliteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSatelliteSatelliteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.satellite[':satelliteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSatelliteSatelliteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSatelliteSatelliteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSatelliteSatelliteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSatelliteSatelliteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.satellite[':satelliteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
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
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEphemeridesMutationKey() {
  return ['ephemerides', '/ephemerides', 'POST'] as const
}

export function getPostEphemeridesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemerides.$post>>>>>,
    TError,
    InferRequestType<typeof client.ephemerides.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEphemeridesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ephemerides.$post>) {
      return parseResponse(client.ephemerides.$post(args, options))
    },
  })
}

export function usePostEphemerides<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemerides.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ephemerides.$post>,
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
  const mutationDefaults = getPostEphemeridesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroundstationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groundstation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['groundstation', '/groundstation', keyArgs] as const
}

export function getGroundstationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groundstation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroundstationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groundstation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroundstation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groundstation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
          >,
          ReturnType<typeof getGroundstationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroundstationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroundstationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groundstation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSatelliteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.satellite.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['satellite', '/satellite', keyArgs] as const
}

export function getSatelliteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.satellite.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSatelliteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.satellite.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSatellite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.satellite.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
          >,
          ReturnType<typeof getSatelliteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSatelliteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSatelliteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.satellite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostAgentMutationKey() {
  return ['agent', '/agent', 'POST'] as const
}

export function getPostAgentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
    TError,
    InferRequestType<typeof client.agent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agent.$post>) {
      return parseResponse(client.agent.$post(args, options))
    },
  })
}

export function usePostAgent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
          TError,
          InferRequestType<typeof client.agent.$post>,
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
  const mutationDefaults = getPostAgentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactMutationKey() {
  return ['contact', '/contact', 'POST'] as const
}

export function getPostContactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.$post>>>>>,
    TError,
    InferRequestType<typeof client.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.$post>) {
      return parseResponse(client.contact.$post(args, options))
    },
  })
}

export function usePostContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contact.$post>,
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
  const mutationDefaults = getPostContactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutAgentAgentIdMutationKey() {
  return ['agent', '/agent/:agentId', 'PUT'] as const
}

export function getPutAgentAgentIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':agentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agent)[':agentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAgentAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent)[':agentId']['$put']>) {
      return parseResponse(client.agent[':agentId'].$put(args, options))
    },
  })
}

export function usePutAgentAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':agentId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.agent)[':agentId']['$put']>,
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
  const mutationDefaults = getPutAgentAgentIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
