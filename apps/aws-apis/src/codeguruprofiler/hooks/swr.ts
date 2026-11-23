import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetProfilingGroupsProfilingGroupNameNotificationConfigurationKey(
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

export function useGetProfilingGroupsProfilingGroupNameNotificationConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameNotificationConfigurationKey(args)
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
                (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroupsProfilingGroupNameNotificationConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameNotificationConfigurationKey(args)
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
                (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProfilingGroupsProfilingGroupNameNotificationConfigurationKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration',
    'POST',
  ] as const
}

export function usePostProfilingGroupsProfilingGroupNameNotificationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilingGroupsProfilingGroupNameNotificationConfigurationKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].notificationConfiguration.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProfilingGroupsProfilingGroupNameFramesDashMetricsKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/frames/-/metrics',
    'POST',
  ] as const
}

export function usePostProfilingGroupsProfilingGroupNameFramesDashMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilingGroupsProfilingGroupNameFramesDashMetricsKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].frames['-'].metrics.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProfilingGroupsProfilingGroupNameConfigureAgentKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/configureAgent', 'POST'] as const
}

export function usePostProfilingGroupsProfilingGroupNameConfigureAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilingGroupsProfilingGroupNameConfigureAgentKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].configureAgent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProfilingGroupsClientTokenKey() {
  return ['profilingGroups#clientToken', '/profilingGroups#clientToken', 'POST'] as const
}

export function usePostProfilingGroupsClientToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['profilingGroups#clientToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilingGroupsClientTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']> },
      ) => parseResponse(client['profilingGroups#clientToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfilingGroupsProfilingGroupNameKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', keyArgs] as const
}

export function useGetProfilingGroupsProfilingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.profilingGroups[':profilingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroupsProfilingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.profilingGroups[':profilingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProfilingGroupsProfilingGroupNameKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', 'PUT'] as const
}

export function usePutProfilingGroupsProfilingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfilingGroupsProfilingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>
        },
      ) => parseResponse(client.profilingGroups[':profilingGroupName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfilingGroupsProfilingGroupNameKey() {
  return ['profilingGroups', '/profilingGroups/:profilingGroupName', 'DELETE'] as const
}

export function useDeleteProfilingGroupsProfilingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProfilingGroupsProfilingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>
        },
      ) => parseResponse(client.profilingGroups[':profilingGroupName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternalFindingsReportsKey(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['internal', '/internal/findingsReports', keyArgs] as const
}

export function useGetInternalFindingsReports<TError = unknown>(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalFindingsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.findingsReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalFindingsReports<TError = unknown>(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalFindingsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.findingsReports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.findingsReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfilingGroupsProfilingGroupNamePolicyKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/policy', keyArgs] as const
}

export function useGetProfilingGroupsProfilingGroupNamePolicy<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNamePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroupsProfilingGroupNamePolicy<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNamePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProfilingGroupsProfilingGroupNameProfileKey(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups/:profilingGroupName/profile', keyArgs] as const
}

export function useGetProfilingGroupsProfilingGroupNameProfile<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].profile.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroupsProfilingGroupNameProfile<TError = unknown>(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].profile.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeKey(
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

export function useGetInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeKey(args)
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
                (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'recommendations#endTime&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeKey(args)
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
                (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'recommendations#endTime&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeKey(
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

export function useGetInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeKey(args)
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
                (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'findingsReports#endTime&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeKey(args)
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
                (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.internal.profilingGroups[':profilingGroupName'][
            'findingsReports#endTime&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeKey(
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

export function useGetProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeKey(args)
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
                (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'][
            'profileTimes#endTime&period&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeKey(args)
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
                (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'][
            'profileTimes#endTime&period&startTime'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProfilingGroupsKey(
  args: InferRequestType<typeof client.profilingGroups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['profilingGroups', '/profilingGroups', keyArgs] as const
}

export function useGetProfilingGroups<TError = unknown>(
  args: InferRequestType<typeof client.profilingGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profilingGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilingGroups<TError = unknown>(
  args: InferRequestType<typeof client.profilingGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profilingGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profilingGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/agentProfile#Content-Type',
    'POST',
  ] as const
}

export function usePostProfilingGroupsProfilingGroupNameAgentProfileContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilingGroupsProfilingGroupNameAgentProfileContentTypeKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName']['agentProfile#Content-Type'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutProfilingGroupsProfilingGroupNamePolicyActionGroupKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/policy/:actionGroup',
    'PUT',
  ] as const
}

export function usePutProfilingGroupsProfilingGroupNamePolicyActionGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProfilingGroupsProfilingGroupNamePolicyActionGroupKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].policy[':actionGroup'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/notificationConfiguration/:channelId',
    'DELETE',
  ] as const
}

export function useDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].notificationConfiguration[
            ':channelId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdKey() {
  return [
    'profilingGroups',
    '/profilingGroups/:profilingGroupName/policy/:actionGroup#revisionId',
    'DELETE',
  ] as const
}

export function useDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdKey()
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
            (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.profilingGroups[':profilingGroupName'].policy[':actionGroup#revisionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackKey() {
  return [
    'internal',
    '/internal/profilingGroups/:profilingGroupName/anomalies/:anomalyInstanceId/feedback',
    'POST',
  ] as const
}

export function usePostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackKey()
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
            (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.internal.profilingGroups[':profilingGroupName'].anomalies[
            ':anomalyInstanceId'
          ].feedback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
