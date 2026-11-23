import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCleanKey() {
  return ['clean'] as const
}

export function getGetfindingsKey() {
  return ['getfindings'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getLivenessKey() {
  return ['liveness'] as const
}

export function getReadinessKey() {
  return ['readiness'] as const
}

export function getReloadconfigKey() {
  return ['reloadconfig'] as const
}

export function getStartscanKey() {
  return ['startscan'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getStopKey() {
  return ['stop'] as const
}

export function getStopscansKey() {
  return ['stopscans'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCleanKey() {
  return ['clean', '/clean'] as const
}

export function useGetClean<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCleanKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clean.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClean<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCleanKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clean.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCleanScanIdKey(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
) {
  return ['clean', '/clean/:scanId', args] as const
}

export function useGetCleanScanId<TError = unknown>(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCleanScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clean[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCleanScanId<TError = unknown>(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCleanScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clean[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetfindingsScanIdKey(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
) {
  return ['getfindings', '/getfindings/:scanId', args] as const
}

export function useGetGetfindingsScanId<TError = unknown>(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
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
        ? getGetGetfindingsScanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfindings[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetfindingsScanId<TError = unknown>(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
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
        ? getGetGetfindingsScanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfindings[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoKey() {
  return ['info', '/info'] as const
}

export function useGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLivenessKey() {
  return ['liveness', '/liveness'] as const
}

export function useGetLiveness<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivenessKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liveness.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveness<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLivenessKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liveness.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadinessKey() {
  return ['readiness', '/readiness'] as const
}

export function useGetReadiness<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadinessKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readiness.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReadiness<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadinessKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readiness.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReloadconfigKey() {
  return ['reloadconfig', '/reloadconfig'] as const
}

export function useGetReloadconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReloadconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reloadconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReloadconfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReloadconfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reloadconfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStartscanKey() {
  return ['startscan', '/startscan', 'POST'] as const
}

export function usePostStartscan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startscan.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.startscan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartscanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.startscan.$post> }) =>
        parseResponse(client.startscan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusScanIdKey(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
) {
  return ['status', '/status/:scanId', args] as const
}

export function useGetStatusScanId<TError = unknown>(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStatusScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusScanId<TError = unknown>(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStatusScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopScanIdKey(
  args: InferRequestType<(typeof client.stop)[':scanId']['$get']>,
) {
  return ['stop', '/stop/:scanId', args] as const
}

export function useGetStopScanId<TError = unknown>(
  args: InferRequestType<(typeof client.stop)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStopScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stop[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopScanId<TError = unknown>(
  args: InferRequestType<(typeof client.stop)[':scanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStopScanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stop[':scanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStopscansKey() {
  return ['stopscans', '/stopscans'] as const
}

export function useGetStopscans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopscansKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopscans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStopscans<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStopscansKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stopscans.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestKey() {
  return ['test', '/test'] as const
}

export function useGetTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
