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

export function getInternalKey() {
  return ['internal'] as const
}

export function getProfilingGroupsKey() {
  return ['profilingGroups'] as const
}

export function getProfilingGroupsClientTokenKey() {
  return ['profilingGroups#clientToken'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration',
    keyArgs,
  ] as const
}

export function getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProfilingGroupsProfilingGroupNameNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey>
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
              (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostProfilingGroupsProfilingGroupNameNotificationConfigurationMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration',
    'POST',
  ] as const
}

export function getPostProfilingGroupsProfilingGroupNameNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProfilingGroupsProfilingGroupNameNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].notificationConfiguration.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProfilingGroupsProfilingGroupNameNotificationConfiguration<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
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
    getPostProfilingGroupsProfilingGroupNameNotificationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProfilingGroupsProfilingGroupNameFramesDashMetricsMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/frames/-/metrics',
    'POST',
  ] as const
}

export function getPostProfilingGroupsProfilingGroupNameFramesDashMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProfilingGroupsProfilingGroupNameFramesDashMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].frames['-'].metrics.$post(args, options),
      )
    },
  })
}

export function usePostProfilingGroupsProfilingGroupNameFramesDashMetrics<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
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
  const mutationDefaults = getPostProfilingGroupsProfilingGroupNameFramesDashMetricsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProfilingGroupsProfilingGroupNameConfigureAgentMutationKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/configureAgent', 'POST'] as const
}

export function getPostProfilingGroupsProfilingGroupNameConfigureAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProfilingGroupsProfilingGroupNameConfigureAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].configureAgent.$post(args, options),
      )
    },
  })
}

export function usePostProfilingGroupsProfilingGroupNameConfigureAgent<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
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
  const mutationDefaults = getPostProfilingGroupsProfilingGroupNameConfigureAgentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProfilingGroupsClientTokenMutationKey() {
  return ['profilingGroups#clientToken', '/profilingGroups#clientToken', 'POST'] as const
}

export function getPostProfilingGroupsClientTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['profilingGroups#clientToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilingGroupsClientTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']>,
    ) {
      return parseResponse(client['profilingGroups#clientToken'].$post(args, options))
    },
  })
}

export function usePostProfilingGroupsClientToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['profilingGroups#clientToken']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']>,
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
  const mutationDefaults = getPostProfilingGroupsClientTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProfilingGroupsProfilingGroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfilingGroupsProfilingGroupNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilingGroupsProfilingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfilingGroupsProfilingGroupNameQueryKey>
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
          Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsProfilingGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfilingGroupsProfilingGroupNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups[':profilingGroupName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProfilingGroupsProfilingGroupNameMutationKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', 'PUT'] as const
}

export function getPutProfilingGroupsProfilingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfilingGroupsProfilingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>,
    ) {
      return parseResponse(client.profilingGroups[':profilingGroupName'].$put(args, options))
    },
  })
}

export function usePutProfilingGroupsProfilingGroupName<
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
                Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>,
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
  const mutationDefaults = getPutProfilingGroupsProfilingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProfilingGroupsProfilingGroupNameMutationKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', 'DELETE'] as const
}

export function getDeleteProfilingGroupsProfilingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfilingGroupsProfilingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>,
    ) {
      return parseResponse(client.profilingGroups[':profilingGroupName'].$delete(args, options))
    },
  })
}

export function useDeleteProfilingGroupsProfilingGroupName<
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
                    ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>,
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
  const mutationDefaults = getDeleteProfilingGroupsProfilingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternalFindingsReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal.findingsReports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['internal', '/internal/findingsReports', keyArgs] as const
}

export function getInternalFindingsReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal.findingsReports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternalFindingsReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.findingsReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternalFindingsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.internal.findingsReports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
            >
          >,
          ReturnType<typeof getInternalFindingsReportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalFindingsReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternalFindingsReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.findingsReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfilingGroupsProfilingGroupNamePolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/policy', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNamePolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfilingGroupsProfilingGroupNamePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilingGroupsProfilingGroupNamePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
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
                    (typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProfilingGroupsProfilingGroupNamePolicyQueryKey>
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
            ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsProfilingGroupNamePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfilingGroupsProfilingGroupNamePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups[':profilingGroupName'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfilingGroupsProfilingGroupNameProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/profile', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNameProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfilingGroupsProfilingGroupNameProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilingGroupsProfilingGroupNameProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
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
                    (typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProfilingGroupsProfilingGroupNameProfileQueryKey>
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
            ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsProfilingGroupNameProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfilingGroupsProfilingGroupNameProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups[':profilingGroupName'].profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/recommendations#endTime&startTime',
    keyArgs,
  ] as const
}

export function getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.profilingGroups[':profilingGroupName'][
          'recommendations#endTime&startTime'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
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
                    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
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
                    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey
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
              (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'recommendations#endTime&startTime'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/findingsReports#endTime&startTime',
    keyArgs,
  ] as const
}

export function getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.internal.profilingGroups[':profilingGroupName'][
          'findingsReports#endTime&startTime'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
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
                    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
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
                    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey
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
              (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'findingsReports#endTime&startTime'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/profileTimes#endTime&period&startTime',
    keyArgs,
  ] as const
}

export function getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName']['profileTimes#endTime&period&startTime'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
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
                    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey
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
              (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups[':profilingGroupName'][
            'profileTimes#endTime&period&startTime'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getProfilingGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profilingGroups.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['profilingGroups', '/profilingGroups', keyArgs] as const
}

export function getProfilingGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profilingGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfilingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profilingGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profilingGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>
            >
          >,
          ReturnType<typeof getProfilingGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfilingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profilingGroups.$get(toValue(args), {
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
                >
              >
            >
          | undefined,
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

export function getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/agentProfile#Content-Type',
    'POST',
  ] as const
}

export function getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName']['agentProfile#Content-Type'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProfilingGroupsProfilingGroupNameAgentProfileContentType<
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
                      (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
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
    getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutProfilingGroupsProfilingGroupNamePolicyActionGroupMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/policy/:actionGroup',
    'PUT',
  ] as const
}

export function getPutProfilingGroupsProfilingGroupNamePolicyActionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProfilingGroupsProfilingGroupNamePolicyActionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].policy[':actionGroup'].$put(args, options),
      )
    },
  })
}

export function usePutProfilingGroupsProfilingGroupNamePolicyActionGroup<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
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
  const mutationDefaults = getPutProfilingGroupsProfilingGroupNamePolicyActionGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration/:channelId',
    'DELETE',
  ] as const
}

export function getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].notificationConfiguration[
          ':channelId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelId<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
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
    getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdMutationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/policy/:actionGroup#revisionId',
    'DELETE',
  ] as const
}

export function getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].policy[':actionGroup#revisionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionId<
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
                    (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
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
    getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackMutationKey() {
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/anomalies/:anomalyInstanceId/feedback',
    'POST',
  ] as const
}

export function getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
      >,
    ) {
      return parseResponse(
        client.internal.profilingGroups[':profilingGroupName'].anomalies[
          ':anomalyInstanceId'
        ].feedback.$post(args, options),
      )
    },
  })
}

export function usePostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedback<
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
                      (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
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
    getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
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
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
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
