import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV3DeploymentsKey() {
  return ['v3', '/v3/deployments'] as const
}

export function useGetV3Deployments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DeploymentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Deployments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DeploymentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3DeploymentsKey() {
  return ['v3', '/v3/deployments', 'POST'] as const
}

export function usePostV3Deployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.deployments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3DeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.deployments.$post> }) =>
        parseResponse(client.v3.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3DeploymentsIdKey(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
) {
  return ['v3', '/v3/deployments/:id', args] as const
}

export function useGetV3DeploymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
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
        ? getGetV3DeploymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DeploymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
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
        ? getGetV3DeploymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3DeploymentsIdKey() {
  return ['v3', '/v3/deployments/:id', 'DELETE'] as const
}

export function useDeleteV3DeploymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.deployments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3DeploymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.deployments)[':id']['$delete']> },
      ) => parseResponse(client.v3.deployments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3HeartbeatsLogIdIdKey() {
  return ['v3', '/v3/heartbeats/:logId/:id', 'POST'] as const
}

export function usePostV3HeartbeatsLogIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3HeartbeatsLogIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']> },
      ) => parseResponse(client.v3.heartbeats[':logId'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3LogsKey() {
  return ['v3', '/v3/logs'] as const
}

export function useGetV3Logs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3LogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Logs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3LogsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3LogsKey() {
  return ['v3', '/v3/logs', 'POST'] as const
}

export function usePostV3Logs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.logs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v3.logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.logs.$post> }) =>
        parseResponse(client.v3.logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3LogsIdKey(args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>) {
  return ['v3', '/v3/logs/:id', args] as const
}

export function useGetV3LogsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3LogsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3LogsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3LogsIdDiagnoseKey(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
) {
  return ['v3', '/v3/logs/:id/_diagnose', args] as const
}

export function useGetV3LogsIdDiagnose<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
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
        ? getGetV3LogsIdDiagnoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':id']._diagnose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsIdDiagnose<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
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
        ? getGetV3LogsIdDiagnoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':id']._diagnose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3LogsIdDisableKey() {
  return ['v3', '/v3/logs/:id/_disable', 'POST'] as const
}

export function usePostV3LogsIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':id']['_disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogsIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']> },
      ) => parseResponse(client.v3.logs[':id']._disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3LogsIdEnableKey() {
  return ['v3', '/v3/logs/:id/_enable', 'POST'] as const
}

export function usePostV3LogsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':id']['_enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']> },
      ) => parseResponse(client.v3.logs[':id']._enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3MessagesLogIdKey(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
) {
  return ['v3', '/v3/messages/:logId', args] as const
}

export function useGetV3MessagesLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
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
        ? getGetV3MessagesLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.messages[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3MessagesLogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
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
        ? getGetV3MessagesLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.messages[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3MessagesLogIdKey() {
  return ['v3', '/v3/messages/:logId', 'POST'] as const
}

export function usePostV3MessagesLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3MessagesLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.messages)[':logId']['$post']> },
      ) => parseResponse(client.v3.messages[':logId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3MessagesLogIdKey() {
  return ['v3', '/v3/messages/:logId', 'DELETE'] as const
}

export function useDeleteV3MessagesLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.messages)[':logId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3MessagesLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.messages)[':logId']['$delete']> },
      ) => parseResponse(client.v3.messages[':logId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3MessagesLogIdBulkKey() {
  return ['v3', '/v3/messages/:logId/_bulk', 'POST'] as const
}

export function usePostV3MessagesLogIdBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3MessagesLogIdBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']> },
      ) => parseResponse(client.v3.messages[':logId']._bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3MessagesLogIdFixKey() {
  return ['v3', '/v3/messages/:logId/_fix', 'POST'] as const
}

export function usePostV3MessagesLogIdFix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId']['_fix']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3MessagesLogIdFixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']> },
      ) => parseResponse(client.v3.messages[':logId']._fix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3MessagesLogIdIdKey(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
) {
  return ['v3', '/v3/messages/:logId/:id', args] as const
}

export function useGetV3MessagesLogIdId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
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
        ? getGetV3MessagesLogIdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.messages[':logId'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3MessagesLogIdId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
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
        ? getGetV3MessagesLogIdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.messages[':logId'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3MessagesLogIdIdKey() {
  return ['v3', '/v3/messages/:logId/:id', 'DELETE'] as const
}

export function useDeleteV3MessagesLogIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3MessagesLogIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']> },
      ) => parseResponse(client.v3.messages[':logId'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3MessagesLogIdIdFixKey() {
  return ['v3', '/v3/messages/:logId/:id/_fix', 'POST'] as const
}

export function usePostV3MessagesLogIdIdFix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3MessagesLogIdIdFixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']> },
      ) => parseResponse(client.v3.messages[':logId'][':id']._fix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3MessagesLogIdIdHideKey() {
  return ['v3', '/v3/messages/:logId/:id/_hide', 'POST'] as const
}

export function usePostV3MessagesLogIdIdHide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3MessagesLogIdIdHideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>
        },
      ) => parseResponse(client.v3.messages[':logId'][':id']._hide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3SourcemapsLogIdKey() {
  return ['v3', '/v3/sourcemaps/:logId', 'POST'] as const
}

export function usePostV3SourcemapsLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.sourcemaps)[':logId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SourcemapsLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']> },
      ) => parseResponse(client.v3.sourcemaps[':logId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3UptimechecksKey() {
  return ['v3', '/v3/uptimechecks'] as const
}

export function useGetV3Uptimechecks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3UptimechecksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.uptimechecks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Uptimechecks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3UptimechecksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.uptimechecks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.uptimechecks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
