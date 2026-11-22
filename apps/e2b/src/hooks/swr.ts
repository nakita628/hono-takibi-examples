import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getClustersKey() {
  return ['clusters'] as const
}

export function getDefaultTemplatesKey() {
  return ['default-templates'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getSandboxesKey() {
  return ['sandboxes'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUnstableKey() {
  return ['unstable'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIDMetricsKey(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
) {
  return ['teams', '/teams/:teamID/metrics', args] as const
}

export function useGetTeamsTeamIDMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
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
        ? getGetTeamsTeamIDMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamID'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIDMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
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
        ? getGetTeamsTeamIDMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamID'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIDMetricsMaxKey(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
) {
  return ['teams', '/teams/:teamID/metrics/max', args] as const
}

export function useGetTeamsTeamIDMetricsMax<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
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
        ? getGetTeamsTeamIDMetricsMaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamID'].metrics.max.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIDMetricsMax<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
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
        ? getGetTeamsTeamIDMetricsMaxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamID'].metrics.max.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableTeamsTeamIDStatusKey(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
) {
  return ['unstable', '/unstable/teams/:teamID/status', args] as const
}

export function useGetUnstableTeamsTeamIDStatus<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
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
        ? getGetUnstableTeamsTeamIDStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.teams[':teamID'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableTeamsTeamIDStatus<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
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
        ? getGetUnstableTeamsTeamIDStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.teams[':teamID'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableTeamsTeamIDLimitsKey(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
) {
  return ['unstable', '/unstable/teams/:teamID/limits', args] as const
}

export function useGetUnstableTeamsTeamIDLimits<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
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
        ? getGetUnstableTeamsTeamIDLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.teams[':teamID'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableTeamsTeamIDLimits<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
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
        ? getGetUnstableTeamsTeamIDLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.teams[':teamID'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesKey(args: InferRequestType<typeof client.sandboxes.$get>) {
  return ['sandboxes', '/sandboxes', args] as const
}

export function useGetSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxesKey() {
  return ['sandboxes', '/sandboxes', 'POST'] as const
}

export function usePostSandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sandboxes.$post> }) =>
        parseResponse(client.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesKey(args: InferRequestType<typeof client.v2.sandboxes.$get>) {
  return ['v2', '/v2/sandboxes', args] as const
}

export function useGetV2Sandboxes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Sandboxes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SandboxesKey() {
  return ['v2', '/v2/sandboxes', 'POST'] as const
}

export function usePostV2Sandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.sandboxes.$post> }) =>
        parseResponse(client.v2.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxesMetricsKey(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
) {
  return ['sandboxes', '/sandboxes/metrics', args] as const
}

export function useGetSandboxesMetrics<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
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
        ? getGetSandboxesMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesMetrics<TError = unknown>(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
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
        ? getGetSandboxesMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesSandboxIDLogsKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID/logs', args] as const
}

export function useGetSandboxesSandboxIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
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
        ? getGetSandboxesSandboxIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
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
        ? getGetSandboxesSandboxIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SandboxesSandboxIDLogsKey(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
) {
  return ['v2', '/v2/sandboxes/:sandboxID/logs', args] as const
}

export function useGetV2SandboxesSandboxIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
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
        ? getGetV2SandboxesSandboxIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes[':sandboxID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSandboxIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
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
        ? getGetV2SandboxesSandboxIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes[':sandboxID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSandboxesSandboxIDKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID', args] as const
}

export function useGetSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
        >
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
        ? getGetSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
        >
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
        ? getGetSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSandboxesSandboxIDKey() {
  return ['sandboxes', '/sandboxes/:sandboxID', 'DELETE'] as const
}

export function useDeleteSandboxesSandboxID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSandboxesSandboxIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSandboxesSandboxIDMetricsKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID/metrics', args] as const
}

export function useGetSandboxesSandboxIDMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
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
        ? getGetSandboxesSandboxIDMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSandboxesSandboxIDMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
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
        ? getGetSandboxesSandboxIDMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sandboxes[':sandboxID'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableSandboxesSandboxIDRecordKey(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
) {
  return ['unstable', '/unstable/sandboxes/:sandboxID/record', args] as const
}

export function useGetUnstableSandboxesSandboxIDRecord<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
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
        ? getGetUnstableSandboxesSandboxIDRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.sandboxes[':sandboxID'].record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableSandboxesSandboxIDRecord<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
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
        ? getGetUnstableSandboxesSandboxIDRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.sandboxes[':sandboxID'].record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDPauseKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/pause', 'POST'] as const
}

export function usePostSandboxesSandboxIDPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDResumeKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/resume', 'POST'] as const
}

export function usePostSandboxesSandboxIDResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDForkKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/fork', 'POST'] as const
}

export function usePostSandboxesSandboxIDFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDConnectKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/connect', 'POST'] as const
}

export function usePostSandboxesSandboxIDConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSandboxIDConnectKey() {
  return ['v2', '/v2/sandboxes/:sandboxID/connect', 'POST'] as const
}

export function usePostV2SandboxesSandboxIDConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSandboxIDConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>
        },
      ) => parseResponse(client.v2.sandboxes[':sandboxID'].connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDTimeoutKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/timeout', 'POST'] as const
}

export function usePostSandboxesSandboxIDTimeout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDTimeoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].timeout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSandboxesSandboxIDNetworkKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/network', 'PUT'] as const
}

export function usePutSandboxesSandboxIDNetwork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSandboxesSandboxIDNetworkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].network.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDRefreshesKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/refreshes', 'POST'] as const
}

export function usePostSandboxesSandboxIDRefreshes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDRefreshesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].refreshes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxesSandboxIDSnapshotsKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/snapshots', 'POST'] as const
}

export function usePostSandboxesSandboxIDSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxesSandboxIDSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']> },
      ) => parseResponse(client.sandboxes[':sandboxID'].snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsKey(args: InferRequestType<typeof client.snapshots.$get>) {
  return ['snapshots', '/snapshots', args] as const
}

export function useGetSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3TemplatesKey() {
  return ['v3', '/v3/templates', 'POST'] as const
}

export function usePostV3Templates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3TemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.templates.$post> }) =>
        parseResponse(client.v3.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TemplatesKey(args: InferRequestType<typeof client.v2.templates.$get>) {
  return ['v2', '/v2/templates', args] as const
}

export function useGetV2Templates<TError = unknown>(
  args: InferRequestType<typeof client.v2.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Templates<TError = unknown>(
  args: InferRequestType<typeof client.v2.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDFilesHashKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
) {
  return ['templates', '/templates/:templateID/files/:hash', args] as const
}

export function useGetTemplatesTemplateIDFilesHash<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
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
        ? getGetTemplatesTemplateIDFilesHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].files[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDFilesHash<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
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
        ? getGetTemplatesTemplateIDFilesHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].files[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDefaultTemplatesKey() {
  return ['default-templates', '/default-templates'] as const
}

export function useGetDefaultTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDefaultTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['default-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefaultTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDefaultTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['default-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableTemplatesSearchKey(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
) {
  return ['unstable', '/unstable/templates/search', args] as const
}

export function useGetUnstableTemplatesSearch<TError = unknown>(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
        >
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
        ? getGetUnstableTemplatesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.templates.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableTemplatesSearch<TError = unknown>(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
        >
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
        ? getGetUnstableTemplatesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.templates.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableBuildsKey(
  args: InferRequestType<typeof client.unstable.builds.$get>,
) {
  return ['unstable', '/unstable/builds', args] as const
}

export function useGetUnstableBuilds<TError = unknown>(
  args: InferRequestType<typeof client.unstable.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUnstableBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableBuilds<TError = unknown>(
  args: InferRequestType<typeof client.unstable.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUnstableBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableBuildsStatusesKey(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
) {
  return ['unstable', '/unstable/builds/statuses', args] as const
}

export function useGetUnstableBuildsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
        >
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
        ? getGetUnstableBuildsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableBuildsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
        >
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
        ? getGetUnstableBuildsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableBuildsBuildIDKey(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
) {
  return ['unstable', '/unstable/builds/:buildID', args] as const
}

export function useGetUnstableBuildsBuildID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
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
        ? getGetUnstableBuildsBuildIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds[':buildID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableBuildsBuildID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
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
        ? getGetUnstableBuildsBuildIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.builds[':buildID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
) {
  return ['templates', '/templates/:templateID', args] as const
}

export function useGetTemplatesTemplateID<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
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
        ? getGetTemplatesTemplateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateID<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
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
        ? getGetTemplatesTemplateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTemplatesTemplateIDKey() {
  return ['templates', '/templates/:templateID', 'DELETE'] as const
}

export function useDeleteTemplatesTemplateID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':templateID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTemplateIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':templateID']['$delete']> },
      ) => parseResponse(client.templates[':templateID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTemplatesTemplateIDKey() {
  return ['templates', '/templates/:templateID', 'PATCH'] as const
}

export function usePatchTemplatesTemplateID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':templateID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTemplatesTemplateIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':templateID']['$patch']> },
      ) => parseResponse(client.templates[':templateID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDBuildsKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
) {
  return ['templates', '/templates/:templateID/builds', args] as const
}

export function useGetTemplatesTemplateIDBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
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
        ? getGetTemplatesTemplateIDBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
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
        ? getGetTemplatesTemplateIDBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TemplatesTemplateIDBuildsBuildIDKey() {
  return ['v2', '/v2/templates/:templateID/builds/:buildID', 'POST'] as const
}

export function usePostV2TemplatesTemplateIDBuildsBuildID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TemplatesTemplateIDBuildsBuildIDKey()
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
            (typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.templates[':templateID'].builds[':buildID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2TemplatesTemplateIDKey(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
) {
  return ['v2', '/v2/templates/:templateID', args] as const
}

export function useGetV2TemplatesTemplateID<TError = unknown>(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
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
        ? getGetV2TemplatesTemplateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.templates[':templateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TemplatesTemplateID<TError = unknown>(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
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
        ? getGetV2TemplatesTemplateIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.templates[':templateID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2TemplatesTemplateIDKey() {
  return ['v2', '/v2/templates/:templateID', 'PATCH'] as const
}

export function usePatchV2TemplatesTemplateID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TemplatesTemplateIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']> },
      ) => parseResponse(client.v2.templates[':templateID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDBuildsBuildIDStatusKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/builds/:buildID/status', args] as const
}

export function useGetTemplatesTemplateIDBuildsBuildIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
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
        ? getGetTemplatesTemplateIDBuildsBuildIDStatusKey(args)
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
                (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
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
          client.templates[':templateID'].builds[':buildID'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDBuildsBuildIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
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
        ? getGetTemplatesTemplateIDBuildsBuildIDStatusKey(args)
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
                (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
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
          client.templates[':templateID'].builds[':buildID'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDBuildsBuildIDLogsKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/builds/:buildID/logs', args] as const
}

export function useGetTemplatesTemplateIDBuildsBuildIDLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
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
        ? getGetTemplatesTemplateIDBuildsBuildIDLogsKey(args)
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
                (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
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
          client.templates[':templateID'].builds[':buildID'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDBuildsBuildIDLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
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
        ? getGetTemplatesTemplateIDBuildsBuildIDLogsKey(args)
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
                (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
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
          client.templates[':templateID'].builds[':buildID'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesTagsKey() {
  return ['templates', '/templates/tags', 'POST'] as const
}

export function usePostTemplatesTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.tags.$post> }) =>
        parseResponse(client.templates.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesTagsKey() {
  return ['templates', '/templates/tags', 'DELETE'] as const
}

export function useDeleteTemplatesTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.templates.tags.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.tags.$delete> }) =>
        parseResponse(client.templates.tags.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDTagsKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags', args] as const
}

export function useGetTemplatesTemplateIDTags<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDTags<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':templateID'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDTagsGroupsKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/groups', args] as const
}

export function useGetTemplatesTemplateIDTagsGroups<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDTagsGroups<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDTagsCountKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/count', args] as const
}

export function useGetTemplatesTemplateIDTagsCount<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDTagsCount<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDTagsExistsKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/exists', args] as const
}

export function useGetTemplatesTemplateIDTagsExists<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDTagsExists<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
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
        ? getGetTemplatesTemplateIDTagsExistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.templates[':templateID'].tags.exists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesTemplateIDTagsTagAssignmentsKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/tags/:tag/assignments', args] as const
}

export function useGetTemplatesTemplateIDTagsTagAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
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
        ? getGetTemplatesTemplateIDTagsTagAssignmentsKey(args)
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
                (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
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
          client.templates[':templateID'].tags[':tag'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesTemplateIDTagsTagAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
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
        ? getGetTemplatesTemplateIDTagsTagAssignmentsKey(args)
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
                (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
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
          client.templates[':templateID'].tags[':tag'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesAliasesAliasKey(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
) {
  return ['templates', '/templates/aliases/:alias', args] as const
}

export function useGetTemplatesAliasesAlias<TError = unknown>(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
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
        ? getGetTemplatesAliasesAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.aliases[':alias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesAliasesAlias<TError = unknown>(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
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
        ? getGetTemplatesAliasesAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.aliases[':alias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesKey(args: InferRequestType<typeof client.nodes.$get>) {
  return ['nodes', '/nodes', args] as const
}

export function useGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNodesNodeIDKey(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
) {
  return ['nodes', '/nodes/:nodeID', args] as const
}

export function useGetNodesNodeID<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesNodeIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeID<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesNodeIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIDKey() {
  return ['nodes', '/nodes/:nodeID', 'POST'] as const
}

export function usePostNodesNodeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':nodeID']['$post']> },
      ) => parseResponse(client.nodes[':nodeID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIDSandboxesKey(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
) {
  return ['nodes', '/nodes/:nodeID/sandboxes', args] as const
}

export function useGetNodesNodeIDSandboxes<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
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
        ? getGetNodesNodeIDSandboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeID'].sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIDSandboxes<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
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
        ? getGetNodesNodeIDSandboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeID'].sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTeamsTeamIDSandboxesKillKey() {
  return ['admin', '/admin/teams/:teamID/sandboxes/kill', 'POST'] as const
}

export function usePostAdminTeamsTeamIDSandboxesKill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsTeamIDSandboxesKillKey()
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
            (typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']
          >
        },
      ) => parseResponse(client.admin.teams[':teamID'].sandboxes.kill.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSandboxesRunningCountsKey() {
  return ['admin', '/admin/sandboxes/running-counts'] as const
}

export function useGetAdminSandboxesRunningCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminSandboxesRunningCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.sandboxes['running-counts'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSandboxesRunningCounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminSandboxesRunningCountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.sandboxes['running-counts'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminSandboxesSandboxIDKey(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
) {
  return ['admin', '/admin/sandboxes/:sandboxID', args] as const
}

export function useGetAdminSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
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
        ? getGetAdminSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
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
        ? getGetAdminSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableAdminSandboxesSandboxIDOverviewKey(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
) {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/overview', args] as const
}

export function useGetUnstableAdminSandboxesSandboxIDOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
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
        ? getGetUnstableAdminSandboxesSandboxIDOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.sandboxes[':sandboxID'].overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminSandboxesSandboxIDOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
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
        ? getGetUnstableAdminSandboxesSandboxIDOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.sandboxes[':sandboxID'].overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableAdminSandboxesSandboxIDBuildsKey(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
) {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/builds', args] as const
}

export function useGetUnstableAdminSandboxesSandboxIDBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
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
        ? getGetUnstableAdminSandboxesSandboxIDBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.sandboxes[':sandboxID'].builds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminSandboxesSandboxIDBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
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
        ? getGetUnstableAdminSandboxesSandboxIDBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.sandboxes[':sandboxID'].builds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUnstableAdminSandboxesSandboxIDBuildsRestoreKey() {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/builds/restore', 'POST'] as const
}

export function usePostUnstableAdminSandboxesSandboxIDBuildsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminSandboxesSandboxIDBuildsRestoreKey()
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
            (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.unstable.admin.sandboxes[':sandboxID'].builds.restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTeamsTeamIDBuildsCancelKey() {
  return ['admin', '/admin/teams/:teamID/builds/cancel', 'POST'] as const
}

export function usePostAdminTeamsTeamIDBuildsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsTeamIDBuildsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>
        },
      ) => parseResponse(client.admin.teams[':teamID'].builds.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTeamsTeamIDApiKeysKey(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
) {
  return ['admin', '/admin/teams/:teamID/api-keys', args] as const
}

export function useGetAdminTeamsTeamIDApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
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
        ? getGetAdminTeamsTeamIDApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.teams[':teamID']['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTeamsTeamIDApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
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
        ? getGetAdminTeamsTeamIDApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.teams[':teamID']['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTeamsTeamIDApiKeysKey() {
  return ['admin', '/admin/teams/:teamID/api-keys', 'POST'] as const
}

export function usePostAdminTeamsTeamIDApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsTeamIDApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']> },
      ) => parseResponse(client.admin.teams[':teamID']['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminTeamsTeamIDApiKeysApiKeyIDKey() {
  return ['admin', '/admin/teams/:teamID/api-keys/:apiKeyID', 'DELETE'] as const
}

export function useDeleteAdminTeamsTeamIDApiKeysApiKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminTeamsTeamIDApiKeysApiKeyIDKey()
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
            (typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.teams[':teamID']['api-keys'][':apiKeyID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableManagementTelemetryNamesKey() {
  return ['unstable', '/unstable/management/telemetry/names'] as const
}

export function useGetUnstableManagementTelemetryNames<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnstableManagementTelemetryNamesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.management.telemetry.names.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableManagementTelemetryNames<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnstableManagementTelemetryNamesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.management.telemetry.names.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUnstableManagementClustersClusterIDKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID', 'PUT'] as const
}

export function usePutUnstableManagementClustersClusterID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementClustersClusterIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>
        },
      ) =>
        parseResponse(client.unstable.management.clusters[':clusterID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableManagementClustersClusterIDKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID', 'DELETE'] as const
}

export function useDeleteUnstableManagementClustersClusterID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableManagementClustersClusterIDKey()
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
            (typeof client.unstable.management.clusters)[':clusterID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.clusters[':clusterID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementClustersClusterIDTelemetryKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID/telemetry', 'PUT'] as const
}

export function usePutUnstableManagementClustersClusterIDTelemetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementClustersClusterIDTelemetryKey()
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
            (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.clusters[':clusterID'].telemetry.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableManagementClustersClusterIDProjectsKey(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
) {
  return ['unstable', '/unstable/management/clusters/:clusterID/projects', args] as const
}

export function useGetUnstableManagementClustersClusterIDProjects<TError = unknown>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
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
        ? getGetUnstableManagementClustersClusterIDProjectsKey(args)
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
                (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
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
          client.unstable.management.clusters[':clusterID'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableManagementClustersClusterIDProjects<TError = unknown>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
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
        ? getGetUnstableManagementClustersClusterIDProjectsKey(args)
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
                (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
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
          client.unstable.management.clusters[':clusterID'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUnstableManagementClustersClusterIDDeletionKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID/deletion', 'PUT'] as const
}

export function usePutUnstableManagementClustersClusterIDDeletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementClustersClusterIDDeletionKey()
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
            (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.clusters[':clusterID'].deletion.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableManagementClustersClusterIDDestroyReadinessKey(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
) {
  return ['unstable', '/unstable/management/clusters/:clusterID/destroy-readiness', args] as const
}

export function useGetUnstableManagementClustersClusterIDDestroyReadiness<TError = unknown>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
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
        ? getGetUnstableManagementClustersClusterIDDestroyReadinessKey(args)
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
                (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
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
          client.unstable.management.clusters[':clusterID']['destroy-readiness'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableManagementClustersClusterIDDestroyReadiness<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
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
        ? getGetUnstableManagementClustersClusterIDDestroyReadinessKey(args)
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
                (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
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
          client.unstable.management.clusters[':clusterID']['destroy-readiness'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDClusterClusterIDKey() {
  return ['unstable', '/unstable/management/projects/:projectID/cluster/:clusterID', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDClusterClusterID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDClusterClusterIDKey()
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
            (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].cluster[':clusterID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableManagementProjectsProjectIDClusterClusterIDKey() {
  return [
    'unstable',
    '/unstable/management/projects/:projectID/cluster/:clusterID',
    'DELETE',
  ] as const
}

export function useDeleteUnstableManagementProjectsProjectIDClusterClusterID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableManagementProjectsProjectIDClusterClusterIDKey()
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
            (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].cluster[':clusterID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDKey() {
  return ['unstable', '/unstable/management/projects/:projectID', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.management.projects)[':projectID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>
        },
      ) =>
        parseResponse(client.unstable.management.projects[':projectID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableManagementProjectsProjectIDKey() {
  return ['unstable', '/unstable/management/projects/:projectID', 'DELETE'] as const
}

export function useDeleteUnstableManagementProjectsProjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.projects)[':projectID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableManagementProjectsProjectIDKey()
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
            (typeof client.unstable.management.projects)[':projectID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDMembersUserIDKey() {
  return ['unstable', '/unstable/management/projects/:projectID/members/:userID', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDMembersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDMembersUserIDKey()
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
            (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].members[':userID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDLimitsKey() {
  return ['unstable', '/unstable/management/projects/:projectID/limits', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['limits']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDLimitsKey()
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
            (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].limits.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDSettingsKey() {
  return ['unstable', '/unstable/management/projects/:projectID/settings', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDSettingsKey()
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
            (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDBlockKey() {
  return ['unstable', '/unstable/management/projects/:projectID/block', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['block']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['block']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDBlockKey()
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
            (typeof client.unstable.management.projects)[':projectID']['block']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].block.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableManagementProjectsProjectIDBanKey() {
  return ['unstable', '/unstable/management/projects/:projectID/ban', 'PUT'] as const
}

export function usePutUnstableManagementProjectsProjectIDBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableManagementProjectsProjectIDBanKey()
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
            (typeof client.unstable.management.projects)[':projectID']['ban']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.management.projects[':projectID'].ban.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUnstableAdminTeamsQueryKey() {
  return ['unstable', '/unstable/admin/teams/query', 'POST'] as const
}

export function usePostUnstableAdminTeamsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.teams.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unstable.admin.teams.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminTeamsQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unstable.admin.teams.query.$post> },
      ) => parseResponse(client.unstable.admin.teams.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnstableAdminTeamsBansKey() {
  return ['unstable', '/unstable/admin/teams/bans', 'POST'] as const
}

export function usePostUnstableAdminTeamsBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.teams.bans.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unstable.admin.teams.bans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminTeamsBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unstable.admin.teams.bans.$post> },
      ) => parseResponse(client.unstable.admin.teams.bans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminTeamsTeamIDKey(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
) {
  return ['unstable', '/unstable/admin/teams/:teamID', args] as const
}

export function useGetUnstableAdminTeamsTeamID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
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
        ? getGetUnstableAdminTeamsTeamIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.teams[':teamID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminTeamsTeamID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
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
        ? getGetUnstableAdminTeamsTeamIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.teams[':teamID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUnstableAdminTeamsTeamIDSchedulingLabelsKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/scheduling-labels', 'PUT'] as const
}

export function usePutUnstableAdminTeamsTeamIDSchedulingLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableAdminTeamsTeamIDSchedulingLabelsKey()
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
            (typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']
          >
        },
      ) =>
        parseResponse(
          client.unstable.admin.teams[':teamID']['scheduling-labels'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUnstableAdminTeamsTeamIDBanKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/ban', 'PUT'] as const
}

export function usePutUnstableAdminTeamsTeamIDBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableAdminTeamsTeamIDBanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>
        },
      ) => parseResponse(client.unstable.admin.teams[':teamID'].ban.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableAdminTeamsTeamIDBanKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/ban', 'DELETE'] as const
}

export function useDeleteUnstableAdminTeamsTeamIDBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableAdminTeamsTeamIDBanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>
        },
      ) => parseResponse(client.unstable.admin.teams[':teamID'].ban.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminClustersKey(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
) {
  return ['unstable', '/unstable/admin/clusters', args] as const
}

export function useGetUnstableAdminClusters<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
        >
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
        ? getGetUnstableAdminClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminClusters<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
        >
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
        ? getGetUnstableAdminClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUnstableAdminClustersKey() {
  return ['unstable', '/unstable/admin/clusters', 'POST'] as const
}

export function usePostUnstableAdminClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unstable.admin.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unstable.admin.clusters.$post> },
      ) => parseResponse(client.unstable.admin.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminClustersClusterIDKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID', args] as const
}

export function useGetUnstableAdminClustersClusterID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
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
        ? getGetUnstableAdminClustersClusterIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.admin.clusters[':clusterID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminClustersClusterID<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
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
        ? getGetUnstableAdminClustersClusterIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.admin.clusters[':clusterID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUnstableAdminClustersClusterIDKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID', 'DELETE'] as const
}

export function useDeleteUnstableAdminClustersClusterID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableAdminClustersClusterIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>
        },
      ) => parseResponse(client.unstable.admin.clusters[':clusterID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUnstableAdminClustersClusterIDKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID', 'PATCH'] as const
}

export function usePatchUnstableAdminClustersClusterID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUnstableAdminClustersClusterIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>
        },
      ) => parseResponse(client.unstable.admin.clusters[':clusterID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminClustersClusterIDMetadataKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID/metadata', args] as const
}

export function useGetUnstableAdminClustersClusterIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
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
        ? getGetUnstableAdminClustersClusterIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.clusters[':clusterID'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminClustersClusterIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
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
        ? getGetUnstableAdminClustersClusterIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.unstable.admin.clusters[':clusterID'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUnstableAdminClustersClusterIDTeamsKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID/teams', args] as const
}

export function useGetUnstableAdminClustersClusterIDTeams<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
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
        ? getGetUnstableAdminClustersClusterIDTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.admin.clusters[':clusterID'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminClustersClusterIDTeams<TError = unknown>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
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
        ? getGetUnstableAdminClustersClusterIDTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.unstable.admin.clusters[':clusterID'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUnstableAdminClustersClusterIDTokenKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID/token', 'PUT'] as const
}

export function usePutUnstableAdminClustersClusterIDToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUnstableAdminClustersClusterIDTokenKey()
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
            (typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']
          >
        },
      ) =>
        parseResponse(client.unstable.admin.clusters[':clusterID'].token.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminTemplatesAliasesKey(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
) {
  return ['unstable', '/unstable/admin/templates/aliases', args] as const
}

export function useGetUnstableAdminTemplatesAliases<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
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
        ? getGetUnstableAdminTemplatesAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.templates.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminTemplatesAliases<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
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
        ? getGetUnstableAdminTemplatesAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.templates.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUnstableAdminTemplatesAliasesKey() {
  return ['unstable', '/unstable/admin/templates/aliases', 'POST'] as const
}

export function usePostUnstableAdminTemplatesAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unstable.admin.templates.aliases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminTemplatesAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unstable.admin.templates.aliases.$post> },
      ) => parseResponse(client.unstable.admin.templates.aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableAdminTemplatesAliasesAliasIDKey() {
  return ['unstable', '/unstable/admin/templates/aliases/:aliasID', 'DELETE'] as const
}

export function useDeleteUnstableAdminTemplatesAliasesAliasID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableAdminTemplatesAliasesAliasIDKey()
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
            (typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.unstable.admin.templates.aliases[':aliasID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUnstableAdminTemplatesDefaultsKey() {
  return ['unstable', '/unstable/admin/templates/defaults', 'POST'] as const
}

export function usePostUnstableAdminTemplatesDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.defaults.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unstable.admin.templates.defaults.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnstableAdminTemplatesDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unstable.admin.templates.defaults.$post> },
      ) => parseResponse(client.unstable.admin.templates.defaults.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUnstableAdminTemplatesDefaultsTemplateIDKey() {
  return ['unstable', '/unstable/admin/templates/defaults/:templateID', 'DELETE'] as const
}

export function useDeleteUnstableAdminTemplatesDefaultsTemplateID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUnstableAdminTemplatesDefaultsTemplateIDKey()
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
            (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.unstable.admin.templates.defaults[':templateID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUnstableAdminTemplatesDefaultsTemplateIDKey() {
  return ['unstable', '/unstable/admin/templates/defaults/:templateID', 'PATCH'] as const
}

export function usePatchUnstableAdminTemplatesDefaultsTemplateID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUnstableAdminTemplatesDefaultsTemplateIDKey()
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
            (typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.unstable.admin.templates.defaults[':templateID'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUnstableAdminTemplatesLookupKey(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
) {
  return ['unstable', '/unstable/admin/templates/lookup', args] as const
}

export function useGetUnstableAdminTemplatesLookup<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
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
        ? getGetUnstableAdminTemplatesLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.templates.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnstableAdminTemplatesLookup<TError = unknown>(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
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
        ? getGetUnstableAdminTemplatesLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.unstable.admin.templates.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKeysKey() {
  return ['api-keys', '/api-keys'] as const
}

export function useGetApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeysKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['api-keys']['$post']> }) =>
        parseResponse(client['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysApiKeyIDKey() {
  return ['api-keys', '/api-keys/:apiKeyID', 'DELETE'] as const
}

export function useDeleteApiKeysApiKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysApiKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']> },
      ) => parseResponse(client['api-keys'][':apiKeyID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysApiKeyIDKey() {
  return ['api-keys', '/api-keys/:apiKeyID', 'PATCH'] as const
}

export function usePatchApiKeysApiKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysApiKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']> },
      ) => parseResponse(client['api-keys'][':apiKeyID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesKey() {
  return ['volumes', '/volumes'] as const
}

export function useGetVolumes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVolumesKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function usePostVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.$post> }) =>
        parseResponse(client.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesVolumeIDKey(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
) {
  return ['volumes', '/volumes/:volumeID', args] as const
}

export function useGetVolumesVolumeID<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
        >
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
        ? getGetVolumesVolumeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesVolumeID<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
        >
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
        ? getGetVolumesVolumeIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':volumeID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVolumesVolumeIDKey() {
  return ['volumes', '/volumes/:volumeID', 'DELETE'] as const
}

export function useDeleteVolumesVolumeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':volumeID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumesVolumeIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':volumeID']['$delete']> },
      ) => parseResponse(client.volumes[':volumeID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsKey(args: InferRequestType<typeof client.secrets.$get>) {
  return ['secrets', '/secrets', args] as const
}

export function useGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSecretsKey() {
  return ['secrets', '/secrets', 'POST'] as const
}

export function usePostSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secrets.$post> }) =>
        parseResponse(client.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsSecretIDKey(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
) {
  return ['secrets', '/secrets/:secretID', args] as const
}

export function useGetSecretsSecretID<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
        >
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
        ? getGetSecretsSecretIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets[':secretID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretsSecretID<TError = unknown>(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
        >
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
        ? getGetSecretsSecretIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secrets[':secretID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecretsSecretIDKey() {
  return ['secrets', '/secrets/:secretID', 'POST'] as const
}

export function usePostSecretsSecretID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':secretID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsSecretIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets)[':secretID']['$post']> },
      ) => parseResponse(client.secrets[':secretID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecretsSecretIDKey() {
  return ['secrets', '/secrets/:secretID', 'DELETE'] as const
}

export function useDeleteSecretsSecretID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':secretID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretsSecretIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets)[':secretID']['$delete']> },
      ) => parseResponse(client.secrets[':secretID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIDRigsKey(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
) {
  return ['clusters', '/clusters/:clusterID/rigs', args] as const
}

export function useGetClustersClusterIDRigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
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
        ? getGetClustersClusterIDRigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':clusterID'].rigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIDRigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
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
        ? getGetClustersClusterIDRigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':clusterID'].rigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClustersClusterIDRigsRigIDCapacityKey() {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/capacity', 'PUT'] as const
}

export function usePutClustersClusterIDRigsRigIDCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClustersClusterIDRigsRigIDCapacityKey()
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
            (typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':clusterID'].rigs[':rigID'].capacity.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClustersClusterIDRigsInstancesInstanceIDKey() {
  return ['clusters', '/clusters/:clusterID/rigs/instances/:instanceID', 'DELETE'] as const
}

export function useDeleteClustersClusterIDRigsInstancesInstanceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIDRigsInstancesInstanceIDKey()
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
            (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':clusterID'].rigs.instances[':instanceID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIDRigsRigIDInstancesKey(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
) {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/instances', args] as const
}

export function useGetClustersClusterIDRigsRigIDInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
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
        ? getGetClustersClusterIDRigsRigIDInstancesKey(args)
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
                (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
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
          client.clusters[':clusterID'].rigs[':rigID'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIDRigsRigIDInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
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
        ? getGetClustersClusterIDRigsRigIDInstancesKey(args)
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
                (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
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
          client.clusters[':clusterID'].rigs[':rigID'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIDRigsRigIDErrorsKey(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
) {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/errors', args] as const
}

export function useGetClustersClusterIDRigsRigIDErrors<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
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
        ? getGetClustersClusterIDRigsRigIDErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':clusterID'].rigs[':rigID'].errors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIDRigsRigIDErrors<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
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
        ? getGetClustersClusterIDRigsRigIDErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':clusterID'].rigs[':rigID'].errors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEventsSandboxesSandboxIDKey(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
) {
  return ['events', '/events/sandboxes/:sandboxID', args] as const
}

export function useGetEventsSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
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
        ? getGetEventsSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsSandboxesSandboxID<TError = unknown>(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
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
        ? getGetEventsSandboxesSandboxIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.sandboxes[':sandboxID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsSandboxesKey(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
) {
  return ['events', '/events/sandboxes', args] as const
}

export function useGetEventsSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
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
        ? getGetEventsSandboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsSandboxes<TError = unknown>(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
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
        ? getGetEventsSandboxesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsWebhooksKey() {
  return ['events', '/events/webhooks'] as const
}

export function useGetEventsWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsWebhooksKey() {
  return ['events', '/events/webhooks', 'POST'] as const
}

export function usePostEventsWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.webhooks.$post> }) =>
        parseResponse(client.events.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsWebhooksWebhookIDKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID', args] as const
}

export function useGetEventsWebhooksWebhookID<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.webhooks[':webhookID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsWebhooksWebhookID<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.webhooks[':webhookID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEventsWebhooksWebhookIDKey() {
  return ['events', '/events/webhooks/:webhookID', 'DELETE'] as const
}

export function useDeleteEventsWebhooksWebhookID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsWebhooksWebhookIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']> },
      ) => parseResponse(client.events.webhooks[':webhookID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEventsWebhooksWebhookIDKey() {
  return ['events', '/events/webhooks/:webhookID', 'PATCH'] as const
}

export function usePatchEventsWebhooksWebhookID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventsWebhooksWebhookIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']> },
      ) => parseResponse(client.events.webhooks[':webhookID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsWebhooksWebhookIDDeliveriesKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID/deliveries', args] as const
}

export function useGetEventsWebhooksWebhookIDDeliveries<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDDeliveriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events.webhooks[':webhookID'].deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsWebhooksWebhookIDDeliveries<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDDeliveriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events.webhooks[':webhookID'].deliveries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsWebhooksWebhookIDStatsKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID/stats', args] as const
}

export function useGetEventsWebhooksWebhookIDStats<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events.webhooks[':webhookID'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsWebhooksWebhookIDStats<TError = unknown>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
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
        ? getGetEventsWebhooksWebhookIDStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events.webhooks[':webhookID'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
