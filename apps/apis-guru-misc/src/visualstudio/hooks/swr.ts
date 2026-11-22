import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInternalKey() {
  return ['internal'] as const
}

export function getTunnelauthKey() {
  return ['tunnelauth'] as const
}

export function getWarmupKey() {
  return ['warmup'] as const
}

export function getPostApiV1AgentTelemetryKey() {
  return ['api', '/api/v1/AgentTelemetry', 'POST'] as const
}

export function usePostApiV1AgentTelemetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.AgentTelemetry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AgentTelemetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.AgentTelemetry.$post> },
      ) => parseResponse(client.api.v1.AgentTelemetry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AgentTelemetryStandaloneKey() {
  return ['api', '/api/v1/AgentTelemetry/standalone', 'POST'] as const
}

export function usePostApiV1AgentTelemetryStandalone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.AgentTelemetry.standalone.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AgentTelemetryStandaloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post> },
      ) => parseResponse(client.api.v1.AgentTelemetry.standalone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AgentsFamilyKey(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
) {
  return ['api', '/api/v1/Agents/:family', args] as const
}

export function useGetApiV1AgentsFamily<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AgentsFamilyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Agents[':family'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AgentsFamily<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AgentsFamilyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Agents)[':family']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Agents[':family'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsKey(
  args: InferRequestType<typeof client.api.v1.Environments.$get>,
) {
  return ['api', '/api/v1/Environments', args] as const
}

export function useGetApiV1Environments<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.Environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Environments<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.Environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsKey() {
  return ['api', '/api/v1/Environments', 'POST'] as const
}

export function usePostApiV1Environments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.Environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.Environments.$post> }) =>
        parseResponse(client.api.v1.Environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsEnvironmentIdKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId', args] as const
}

export function useGetApiV1EnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1EnvironmentsEnvironmentIdKey() {
  return ['api', '/api/v1/Environments/:environmentId', 'DELETE'] as const
}

export function useDeleteApiV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>
        },
      ) => parseResponse(client.api.v1.Environments[':environmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1EnvironmentsEnvironmentIdKey() {
  return ['api', '/api/v1/Environments/:environmentId', 'PATCH'] as const
}

export function usePatchApiV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>
        },
      ) => parseResponse(client.api.v1.Environments[':environmentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdCallbackKey() {
  return ['api', '/api/v1/Environments/:environmentId/_callback', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdCallbackKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId']._callback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsEnvironmentIdArchiveKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/archive', args] as const
}

export function useGetApiV1EnvironmentsEnvironmentIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].archive.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EnvironmentsEnvironmentIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].archive.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdArchiveKey() {
  return ['api', '/api/v1/Environments/:environmentId/archive', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdArchiveKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdExportKey() {
  return ['api', '/api/v1/Environments/:environmentId/export', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdExportKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].export.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1EnvironmentsEnvironmentIdFolderKey() {
  return ['api', '/api/v1/Environments/:environmentId/folder', 'PATCH'] as const
}

export function usePatchApiV1EnvironmentsEnvironmentIdFolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1EnvironmentsEnvironmentIdFolderKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].folder.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsEnvironmentIdHeartbeattokenKey(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
) {
  return ['api', '/api/v1/Environments/:environmentId/heartbeattoken', args] as const
}

export function useGetApiV1EnvironmentsEnvironmentIdHeartbeattoken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
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
        ? getGetApiV1EnvironmentsEnvironmentIdHeartbeattokenKey(args)
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
                (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
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
          client.api.v1.Environments[':environmentId'].heartbeattoken.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EnvironmentsEnvironmentIdHeartbeattoken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
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
        ? getGetApiV1EnvironmentsEnvironmentIdHeartbeattokenKey(args)
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
                (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
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
          client.api.v1.Environments[':environmentId'].heartbeattoken.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdNotifyKey() {
  return ['api', '/api/v1/Environments/:environmentId/notify', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdNotifyKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['notify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].notify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1EnvironmentsEnvironmentIdPortsPortKey() {
  return ['api', '/api/v1/Environments/:environmentId/ports/:port', 'PUT'] as const
}

export function usePutApiV1EnvironmentsEnvironmentIdPortsPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EnvironmentsEnvironmentIdPortsPortKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].ports[':port'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1EnvironmentsEnvironmentIdPortsPortKey() {
  return ['api', '/api/v1/Environments/:environmentId/ports/:port', 'DELETE'] as const
}

export function useDeleteApiV1EnvironmentsEnvironmentIdPortsPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1EnvironmentsEnvironmentIdPortsPortKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].ports[':port'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1EnvironmentsEnvironmentIdRestoreKey() {
  return ['api', '/api/v1/Environments/:environmentId/restore', 'PATCH'] as const
}

export function usePatchApiV1EnvironmentsEnvironmentIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1EnvironmentsEnvironmentIdRestoreKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].restore.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1EnvironmentsEnvironmentIdSecretsKey() {
  return ['api', '/api/v1/Environments/:environmentId/secrets', 'PUT'] as const
}

export function usePutApiV1EnvironmentsEnvironmentIdSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1EnvironmentsEnvironmentIdSecretsKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].secrets.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdShutdownKey() {
  return ['api', '/api/v1/Environments/:environmentId/shutdown', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdShutdownKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].shutdown.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1EnvironmentsEnvironmentIdStartKey() {
  return ['api', '/api/v1/Environments/:environmentId/start', 'POST'] as const
}

export function usePostApiV1EnvironmentsEnvironmentIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EnvironmentsEnvironmentIdStartKey()
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
            (typeof client.api.v1.Environments)[':environmentId']['start']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.Environments[':environmentId'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsEnvironmentIdStateKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/state', args] as const
}

export function useGetApiV1EnvironmentsEnvironmentIdState<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Environments[':environmentId'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EnvironmentsEnvironmentIdState<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Environments[':environmentId'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EnvironmentsEnvironmentIdUpdatesKey(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
) {
  return ['api', '/api/v1/Environments/:environmentId/updates', args] as const
}

export function useGetApiV1EnvironmentsEnvironmentIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].updates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EnvironmentsEnvironmentIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
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
        ? getGetApiV1EnvironmentsEnvironmentIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.Environments[':environmentId'].updates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsBillingResendKey() {
  return ['api', '/api/v1/GenevaActions/Billing/resend', 'POST'] as const
}

export function usePostApiV1GenevaActionsBillingResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.Billing.resend.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsBillingResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post> },
      ) => parseResponse(client.api.v1.GenevaActions.Billing.resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GenevaActionsBillingEnvironmentIdKey(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId', args] as const
}

export function useGetApiV1GenevaActionsBillingEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
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
        ? getGetApiV1GenevaActionsBillingEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.GenevaActions.Billing[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GenevaActionsBillingEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
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
        ? getGetApiV1GenevaActionsBillingEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.GenevaActions.Billing[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GenevaActionsBillingEnvironmentIdStateChangesKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId/state-changes', args] as const
}

export function useGetApiV1GenevaActionsBillingEnvironmentIdStateChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
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
        ? getGetApiV1GenevaActionsBillingEnvironmentIdStateChangesKey(args)
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
                (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
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
          client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GenevaActionsBillingEnvironmentIdStateChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
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
        ? getGetApiV1GenevaActionsBillingEnvironmentIdStateChangesKey(args)
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
                (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
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
          client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesKey() {
  return ['api', '/api/v1/GenevaActions/Billing/:environmentId/state-changes', 'POST'] as const
}

export function usePostApiV1GenevaActionsBillingEnvironmentIdStateChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsBillingEnvironmentIdStateChangesKey()
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
            (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsConfigurationTargetKey() {
  return ['api', '/api/v1/GenevaActions/Configuration/:target', 'POST'] as const
}

export function usePostApiV1GenevaActionsConfigurationTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsConfigurationTargetKey()
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
            (typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Configuration[':target'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GenevaActionsConfigurationTargetKeyKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Configuration/:target/:key', args] as const
}

export function useGetApiV1GenevaActionsConfigurationTargetKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
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
        ? getGetApiV1GenevaActionsConfigurationTargetKeyKey(args)
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
                (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
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
          client.api.v1.GenevaActions.Configuration[':target'][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GenevaActionsConfigurationTargetKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
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
        ? getGetApiV1GenevaActionsConfigurationTargetKeyKey(args)
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
                (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
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
          client.api.v1.GenevaActions.Configuration[':target'][':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1GenevaActionsConfigurationTargetKeyKey() {
  return ['api', '/api/v1/GenevaActions/Configuration/:target/:key', 'DELETE'] as const
}

export function useDeleteApiV1GenevaActionsConfigurationTargetKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GenevaActionsConfigurationTargetKeyKey()
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
            (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Configuration[':target'][':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GenevaActionsEnvironmentsEnvironmentIdKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
) {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId', args] as const
}

export function useGetApiV1GenevaActionsEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
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
        ? getGetApiV1GenevaActionsEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
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
          client.api.v1.GenevaActions.Environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GenevaActionsEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
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
        ? getGetApiV1GenevaActionsEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
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
          client.api.v1.GenevaActions.Environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId', 'DELETE'] as const
}

export function useDeleteApiV1GenevaActionsEnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GenevaActionsEnvironmentsEnvironmentIdKey()
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
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Environments[':environmentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId/archive', 'PUT'] as const
}

export function usePutApiV1GenevaActionsEnvironmentsEnvironmentIdArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveKey()
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
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Environments[':environmentId'].archive.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/GenevaActions/Environments/:environmentId/archived_storage_sas/:targetBlob',
    args,
  ] as const
}

export function useGetApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlob<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
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
        ? getGetApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobKey(args)
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
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
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
          client.api.v1.GenevaActions.Environments[':environmentId'].archived_storage_sas[
            ':targetBlob'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlob<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
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
        ? getGetApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobKey(args)
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
                (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
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
          client.api.v1.GenevaActions.Environments[':environmentId'].archived_storage_sas[
            ':targetBlob'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownKey() {
  return ['api', '/api/v1/GenevaActions/Environments/:environmentId/shutdown', 'PUT'] as const
}

export function usePutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdown<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownKey()
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
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Environments[':environmentId'].shutdown.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsKey() {
  return [
    'api',
    '/api/v1/GenevaActions/Environments/:environmentId/upload/running/vm/logs',
    'POST',
  ] as const
}

export function usePostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsKey()
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
            (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Environments[':environmentId'].upload.running.vm.logs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingKey() {
  return ['api', '/api/v1/GenevaActions/Pools/change-resource-deletion-setting', 'POST'] as const
}

export function usePostApiV1GenevaActionsPoolsChangeResourceDeletionSetting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPoolsChangeResourceDeletionSettingKey()
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
            (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Pools['change-resource-deletion-setting'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolKey() {
  return ['api', '/api/v1/GenevaActions/Pools/:poolCode/rotate-pool', 'POST'] as const
}

export function usePostApiV1GenevaActionsPoolsPoolCodeRotatePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPoolsPoolCodeRotatePoolKey()
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
            (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Pools[':poolCode']['rotate-pool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPoolsTargetKey() {
  return ['api', '/api/v1/GenevaActions/Pools/:target', 'POST'] as const
}

export function usePostApiV1GenevaActionsPoolsTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPoolsTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>
        },
      ) => parseResponse(client.api.v1.GenevaActions.Pools[':target'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsKey() {
  return ['api', '/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings', 'POST'] as const
}

export function usePostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsKey()
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
            typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPrebuildsPoolsDeleteKey() {
  return ['api', '/api/v1/GenevaActions/Prebuilds/pools/delete', 'POST'] as const
}

export function usePostApiV1GenevaActionsPrebuildsPoolsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPrebuildsPoolsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>
        },
      ) =>
        parseResponse(client.api.v1.GenevaActions.Prebuilds.pools.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesKey() {
  return [
    'api',
    '/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties',
    'POST',
  ] as const
}

export function usePostApiV1GenevaActionsPrivacyRefreshProfileTelemetryProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesKey()
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
            (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Privacy['refresh-profile-telemetry-properties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationKey() {
  return ['api', '/api/v1/GenevaActions/Resources/:resourceId/under-investigation', 'POST'] as const
}

export function usePostApiV1GenevaActionsResourcesResourceIdUnderInvestigation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsResourcesResourceIdUnderInvestigationKey()
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
            (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.GenevaActions.Resources[':resourceId']['under-investigation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1GenevaActionsVnetPoolDefinitionsKey() {
  return ['api', '/api/v1/GenevaActions/VnetPoolDefinitions', 'POST'] as const
}

export function usePostApiV1GenevaActionsVnetPoolDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1GenevaActionsVnetPoolDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post> },
      ) => parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1GenevaActionsVnetPoolDefinitionsKey() {
  return ['api', '/api/v1/GenevaActions/VnetPoolDefinitions', 'DELETE'] as const
}

export function useDeleteApiV1GenevaActionsVnetPoolDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GenevaActionsVnetPoolDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>
        },
      ) =>
        parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1HeartBeatKey() {
  return ['api', '/api/v1/HeartBeat', 'POST'] as const
}

export function usePostApiV1HeartBeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.HeartBeat.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.HeartBeat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1HeartBeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.HeartBeat.$post> }) =>
        parseResponse(client.api.v1.HeartBeat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LocationsKey() {
  return ['api', '/api/v1/Locations'] as const
}

export function useGetApiV1Locations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Locations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LocationsLocationKey(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
) {
  return ['api', '/api/v1/Locations/:location', args] as const
}

export function useGetApiV1LocationsLocation<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Locations[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LocationsLocation<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LocationsLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Locations)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Locations[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PrebuildsPoolsPoolIdInstancesKey() {
  return ['api', '/api/v1/Prebuilds/pools/:poolId/instances', 'PUT'] as const
}

export function usePutApiV1PrebuildsPoolsPoolIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PrebuildsPoolsPoolIdInstancesKey()
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
            (typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v1.Prebuilds.pools[':poolId'].instances.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PrebuildsPoolsPoolIdInstancesKey() {
  return ['api', '/api/v1/Prebuilds/pools/:poolId/instances', 'POST'] as const
}

export function usePostApiV1PrebuildsPoolsPoolIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PrebuildsPoolsPoolIdInstancesKey()
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
            (typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.Prebuilds.pools[':poolId'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PrebuildsTemplateEnvironmentIdKey(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
) {
  return ['api', '/api/v1/Prebuilds/template/:environmentId', args] as const
}

export function useGetApiV1PrebuildsTemplateEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PrebuildsTemplateEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Prebuilds.template[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PrebuildsTemplateEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PrebuildsTemplateEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Prebuilds.template[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusKey(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/Prebuilds/templates/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/skus',
    args,
  ] as const
}

export function useGetApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
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
        ? getGetApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusKey(
            args,
          )
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
                (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
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
          client.api.v1.Prebuilds.templates.repo[':repoId'].branch[':branchName'].hash[
            ':prebuildHash'
          ].location[':location'].skus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
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
        ? getGetApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusKey(
            args,
          )
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
                (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
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
          client.api.v1.Prebuilds.templates.repo[':repoId'].branch[':branchName'].hash[
            ':prebuildHash'
          ].location[':location'].skus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SasKey() {
  return ['api', '/api/v1/Sas'] as const
}

export function useGetApiV1Sas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SasKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Sas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Sas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SasKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Sas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SecretsKey(args: InferRequestType<typeof client.api.v1.Secrets.$get>) {
  return ['api', '/api/v1/Secrets', args] as const
}

export function useGetApiV1Secrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.Secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Secrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.Secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SecretsKey() {
  return ['api', '/api/v1/Secrets', 'POST'] as const
}

export function usePostApiV1Secrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Secrets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.Secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.Secrets.$post> }) =>
        parseResponse(client.api.v1.Secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SecretsSecretIdKey() {
  return ['api', '/api/v1/Secrets/:secretId', 'PUT'] as const
}

export function usePutApiV1SecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1SecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']> },
      ) => parseResponse(client.api.v1.Secrets[':secretId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1SecretsSecretIdKey() {
  return ['api', '/api/v1/Secrets/:secretId', 'DELETE'] as const
}

export function useDeleteApiV1SecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']> },
      ) => parseResponse(client.api.v1.Secrets[':secretId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TenantTenantIdKey(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
) {
  return ['api', '/api/v1/Tenant/:tenantId', args] as const
}

export function useGetApiV1TenantTenantId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TenantTenantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Tenant[':tenantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TenantTenantId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TenantTenantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.Tenant[':tenantId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TenantTenantIdKey() {
  return ['api', '/api/v1/Tenant/:tenantId', 'PUT'] as const
}

export function usePutApiV1TenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']> },
      ) => parseResponse(client.api.v1.Tenant[':tenantId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TenantTenantIdKey() {
  return ['api', '/api/v1/Tenant/:tenantId', 'DELETE'] as const
}

export function useDeleteApiV1TenantTenantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TenantTenantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']> },
      ) => parseResponse(client.api.v1.Tenant[':tenantId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensPlansPlanNameDeleteAllCodespacesKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/deleteAllCodespaces', 'POST'] as const
}

export function usePostApiV1TokensPlansPlanNameDeleteAllCodespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensPlansPlanNameDeleteAllCodespacesKey()
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
            (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.plans[':planName'].deleteAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensPlansPlanNameReadAllCodespacesKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/readAllCodespaces', 'POST'] as const
}

export function usePostApiV1TokensPlansPlanNameReadAllCodespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensPlansPlanNameReadAllCodespacesKey()
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
            (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.plans[':planName'].readAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensPlansPlanNameWriteCodespacesKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/writeCodespaces', 'POST'] as const
}

export function usePostApiV1TokensPlansPlanNameWriteCodespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensPlansPlanNameWriteCodespacesKey()
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
            (typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.plans[':planName'].writeCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensPlansPlanNameWriteDelegatesKey() {
  return ['api', '/api/v1/Tokens/plans/:planName/writeDelegates', 'POST'] as const
}

export function usePostApiV1TokensPlansPlanNameWriteDelegates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TokensPlansPlanNameWriteDelegatesKey()
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
            (typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.plans[':planName'].writeDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName',
    'PUT',
  ] as const
}

export function usePutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].deleteAllCodespaces.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].deleteAllEnvironments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].readAllCodespaces.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].readAllEnvironments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].writeCodespaces.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].writeDelegates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsKey() {
  return [
    'api',
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsKey()
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
            (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
            ':resourceGroup'
          ].providers[':providerNamespace'].plans[':resourceName'].writeEnvironments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TunnelEnvironmentIdPortInfoKey(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
) {
  return ['api', '/api/v1/Tunnel/:environmentId/portInfo', args] as const
}

export function useGetApiV1TunnelEnvironmentIdPortInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TunnelEnvironmentIdPortInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Tunnel[':environmentId'].portInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TunnelEnvironmentIdPortInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1TunnelEnvironmentIdPortInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.Tunnel[':environmentId'].portInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1UserSubscriptionsKey() {
  return ['api', '/api/v1/UserSubscriptions', 'POST'] as const
}

export function usePostApiV1UserSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.UserSubscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UserSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.UserSubscriptions.$post> },
      ) => parseResponse(client.api.v1.UserSubscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1UserSubscriptionsKey() {
  return ['api', '/api/v1/UserSubscriptions', 'DELETE'] as const
}

export function useDeleteApiV1UserSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.UserSubscriptions.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.UserSubscriptions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1UserSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.UserSubscriptions.$delete> },
      ) => parseResponse(client.api.v1.UserSubscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PoolsDefaultKey(
  args: InferRequestType<typeof client.api.v1.pools.default.$get>,
) {
  return ['api', '/api/v1/pools/default', args] as const
}

export function useGetApiV1PoolsDefault<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.pools.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PoolsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.pools.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PoolsDefault<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.pools.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PoolsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pools.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.pools.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
            ':resourceType'
          ].SubscriptionLifeCycleNotification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
            ':resourceType'
          ].resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers[
            'Microsoft.Codespaces'
          ].plans.SubscriptionLifeCycleNotification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers[
            'Microsoft.Codespaces'
          ].plans.resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers[
            'Microsoft.VSOnline'
          ].plans.SubscriptionLifeCycleNotification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].providers[
            'Microsoft.VSOnline'
          ].plans.resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'].resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'DELETE',
  ] as const
}

export function useDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName',
    'PATCH',
  ] as const
}

export function usePatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourceCreationCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourceCreationValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourceDeletionCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourceDeletionValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourcePatchCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourcePatchValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'GitHub.Network'
          ][':resourceType'][':resourceName'].resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans.resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].deleteAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].deleteAllEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].readAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].readAllEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].readDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourceCreationCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourceCreationValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourceDeletionValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourcePatchCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourcePatchValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].writeCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].writeDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].writeEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans.resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName',
    'PUT',
  ] as const
}

export function usePutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].deleteAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].deleteAllEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].readAllCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].readAllEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].readDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourceCreationCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourceCreationValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceDeletionValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourceDeletionValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchCompleted',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourcePatchCompleted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchValidate',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourcePatchValidate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceReadBegin',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBegin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].resourceReadBegin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeCodespaces',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].writeCodespaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].writeDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeEnvironments',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].writeEnvironments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
            'Microsoft.Codespaces'
          ].plans[':resourceName'].deleteDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteDelegates',
    'POST',
  ] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
            'Microsoft.VSOnline'
          ].plans[':resourceName'].deleteDelegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TenantTenantIdPoolPoolNameKey(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
) {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', args] as const
}

export function useGetApiV1TenantTenantIdPoolPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
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
        ? getGetApiV1TenantTenantIdPoolPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].Pool[':poolName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TenantTenantIdPoolPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
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
        ? getGetApiV1TenantTenantIdPoolPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].Pool[':poolName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TenantTenantIdPoolPoolNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'PUT'] as const
}

export function usePutApiV1TenantTenantIdPoolPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TenantTenantIdPoolPoolNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v1.tenant[':tenantId'].Pool[':poolName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TenantTenantIdPoolPoolNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'DELETE'] as const
}

export function useDeleteApiV1TenantTenantIdPoolPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TenantTenantIdPoolPoolNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].Pool[':poolName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1TenantTenantIdPoolPoolNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/Pool/:poolName', 'PATCH'] as const
}

export function usePatchApiV1TenantTenantIdPoolPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1TenantTenantIdPoolPoolNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].Pool[':poolName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TenantTenantIdPoolGroupPoolGroupNameKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', args] as const
}

export function useGetApiV1TenantTenantIdPoolGroupPoolGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
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
        ? getGetApiV1TenantTenantIdPoolGroupPoolGroupNameKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
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
          client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TenantTenantIdPoolGroupPoolGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
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
        ? getGetApiV1TenantTenantIdPoolGroupPoolGroupNameKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
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
          client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TenantTenantIdPoolGroupPoolGroupNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'PUT'] as const
}

export function usePutApiV1TenantTenantIdPoolGroupPoolGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TenantTenantIdPoolGroupPoolGroupNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'DELETE'] as const
}

export function useDeleteApiV1TenantTenantIdPoolGroupPoolGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TenantTenantIdPoolGroupPoolGroupNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName', 'PATCH'] as const
}

export function usePatchApiV1TenantTenantIdPoolGroupPoolGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1TenantTenantIdPoolGroupPoolGroupNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TenantTenantIdPoolPoolNameVmKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm', args] as const
}

export function useGetApiV1TenantTenantIdPoolPoolNameVm<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
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
        ? getGetApiV1TenantTenantIdPoolPoolNameVmKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
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
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TenantTenantIdPoolPoolNameVm<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
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
        ? getGetApiV1TenantTenantIdPoolPoolNameVmKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
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
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TenantTenantIdPoolPoolNameVmVmNameKey(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
) {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', args] as const
}

export function useGetApiV1TenantTenantIdPoolPoolNameVmVmName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
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
        ? getGetApiV1TenantTenantIdPoolPoolNameVmVmNameKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
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
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TenantTenantIdPoolPoolNameVmVmName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
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
        ? getGetApiV1TenantTenantIdPoolPoolNameVmVmNameKey(args)
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
                (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
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
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1TenantTenantIdPoolPoolNameVmVmNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', 'PUT'] as const
}

export function usePutApiV1TenantTenantIdPoolPoolNameVmVmName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1TenantTenantIdPoolPoolNameVmVmNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName', 'DELETE'] as const
}

export function useDeleteApiV1TenantTenantIdPoolPoolNameVmVmName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TenantTenantIdPoolPoolNameVmVmNameKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/start', 'POST'] as const
}

export function usePostApiV1TenantTenantIdPoolPoolNameVmVmNameStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStartKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].start.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopKey() {
  return ['api', '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/stop', 'POST'] as const
}

export function usePostApiV1TenantTenantIdPoolPoolNameVmVmNameStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TenantTenantIdPoolPoolNameVmVmNameStopKey()
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
            (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2PrebuildsDeleteKey() {
  return ['api', '/api/v2/prebuilds/delete', 'POST'] as const
}

export function usePostApiV2PrebuildsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.prebuilds.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.prebuilds.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PrebuildsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.prebuilds.delete.$post> },
      ) => parseResponse(client.api.v2.prebuilds.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameKey() {
  return ['api', '/api/v2/prebuilds/repository/:repoId/branch/:branchName', 'DELETE'] as const
}

export function useDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameKey()
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
            (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.prebuilds.repository[':repoId'].branch[':branchName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2PrebuildsTemplatesKey() {
  return ['api', '/api/v2/prebuilds/templates', 'POST'] as const
}

export function usePostApiV2PrebuildsTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.prebuilds.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PrebuildsTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.prebuilds.templates.$post> },
      ) => parseResponse(client.api.v2.prebuilds.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathKey(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/prebuilds/templates/skus/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/devcontainerpath/:devContainerPath',
    args,
  ] as const
}

export function useGetApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPath<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
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
        ? getGetApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathKey(
            args,
          )
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
                (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
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
          client.api.v2.prebuilds.templates.skus.repo[':repoId'].branch[':branchName'].hash[
            ':prebuildHash'
          ].location[':location'].devcontainerpath[':devContainerPath'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPath<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
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
        ? getGetApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathKey(
            args,
          )
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
                (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
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
          client.api.v2.prebuilds.templates.skus.repo[':repoId'].branch[':branchName'].hash[
            ':prebuildHash'
          ].location[':location'].devcontainerpath[':devContainerPath'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2PrebuildsTemplatesUpdatemaxversionsKey() {
  return ['api', '/api/v2/prebuilds/templates/updatemaxversions', 'POST'] as const
}

export function usePostApiV2PrebuildsTemplatesUpdatemaxversions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PrebuildsTemplatesUpdatemaxversionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>
        },
      ) =>
        parseResponse(
          client.api.v2.prebuilds.templates.updatemaxversions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusKey() {
  return ['api', '/api/v2/prebuilds/templates/:templateId/updatestatus', 'POST'] as const
}

export function usePostApiV2PrebuildsTemplatesTemplateIdUpdatestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2PrebuildsTemplatesTemplateIdUpdatestatusKey()
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
            (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.prebuilds.templates[':templateId'].updatestatus.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
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

export function getGetInternalNetmonCorrelationKey(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
) {
  return ['internal', '/internal/Netmon/correlation', args] as const
}

export function useGetInternalNetmonCorrelation<TError = unknown>(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalNetmonCorrelationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.Netmon.correlation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternalNetmonCorrelation<TError = unknown>(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInternalNetmonCorrelationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.internal.Netmon.correlation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.internal.Netmon.correlation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTunnelauthKey(args: InferRequestType<typeof client.tunnelauth.$get>) {
  return ['tunnelauth', '/tunnelauth', args] as const
}

export function useGetTunnelauth<TError = unknown>(
  args: InferRequestType<typeof client.tunnelauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTunnelauthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tunnelauth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTunnelauth<TError = unknown>(
  args: InferRequestType<typeof client.tunnelauth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTunnelauthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tunnelauth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTunnelauthKey() {
  return ['tunnelauth', '/tunnelauth', 'POST'] as const
}

export function usePostTunnelauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tunnelauth.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tunnelauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTunnelauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tunnelauth.$post> }) =>
        parseResponse(client.tunnelauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWarmupKey() {
  return ['warmup', '/warmup'] as const
}

export function useGetWarmup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWarmupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.warmup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWarmup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWarmupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warmup.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.warmup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
