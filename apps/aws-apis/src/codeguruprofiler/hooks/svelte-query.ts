import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration',
    keyArgs,
  ] as const
}

export function getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProfilingGroupsProfilingGroupNameNotificationConfiguration<
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
  args: () => InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProfilingGroupsProfilingGroupNameNotificationConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProfilingGroupsProfilingGroupNameNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProfilingGroupsProfilingGroupNameNotificationConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProfilingGroupsProfilingGroupNameFramesDashMetrics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProfilingGroupsProfilingGroupNameFramesDashMetricsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProfilingGroupsProfilingGroupNameConfigureAgent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProfilingGroupsProfilingGroupNameConfigureAgentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProfilingGroupsClientToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProfilingGroupsClientTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProfilingGroupsProfilingGroupNameQueryKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProfilingGroupsProfilingGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProfilingGroupsProfilingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProfilingGroupsProfilingGroupNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutProfilingGroupsProfilingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProfilingGroupsProfilingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProfilingGroupsProfilingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProfilingGroupsProfilingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInternalFindingsReportsQueryKey(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal', '/internal/findingsReports', keyArgs] as const
}

export function getInternalFindingsReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalFindingsReportsQueryKey>
  >({
    queryKey: getInternalFindingsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.findingsReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternalFindingsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.internal.findingsReports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalFindingsReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInternalFindingsReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProfilingGroupsProfilingGroupNamePolicyQueryKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/policy', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNamePolicyQueryOptions<
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
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProfilingGroupsProfilingGroupNamePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProfilingGroupsProfilingGroupNamePolicy<
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
  args: () => InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProfilingGroupsProfilingGroupNamePolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProfilingGroupsProfilingGroupNameProfileQueryKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/profile', keyArgs] as const
}

export function getProfilingGroupsProfilingGroupNameProfileQueryOptions<
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
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProfilingGroupsProfilingGroupNameProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName'].profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProfilingGroupsProfilingGroupNameProfile<
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
  args: () => InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProfilingGroupsProfilingGroupNameProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProfilingGroupsProfilingGroupNameProfileQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/recommendations#endTime&startTime',
    keyArgs,
  ] as const
}

export function getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.profilingGroups[':profilingGroupName'][
          'recommendations#endTime&startTime'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTime<
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
  args: () => InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/findingsReports#endTime&startTime',
    keyArgs,
  ] as const
}

export function getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.profilingGroups[':profilingGroupName'][
          'findingsReports#endTime&startTime'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTime<
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
  args: () => InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/profileTimes#endTime&period&startTime',
    keyArgs,
  ] as const
}

export function getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups[':profilingGroupName']['profileTimes#endTime&period&startTime'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTime<
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
  args: () => InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProfilingGroupsQueryKey(
  args: InferRequestType<typeof client.profilingGroups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups', keyArgs] as const
}

export function getProfilingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profilingGroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfilingGroupsQueryKey>
  >({
    queryKey: getProfilingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profilingGroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProfilingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.profilingGroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfilingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfilingGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProfilingGroupsProfilingGroupNameAgentProfileContentType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutProfilingGroupsProfilingGroupNamePolicyActionGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProfilingGroupsProfilingGroupNamePolicyActionGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
