import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getArchiveKey() {
  return ['archive'] as const
}

export function getAreaKey() {
  return ['area'] as const
}

export function getClutterKey() {
  return ['clutter'] as const
}

export function getInterferenceKey() {
  return ['interference'] as const
}

export function getMeshKey() {
  return ['mesh'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getPathKey() {
  return ['path'] as const
}

export function getPointsKey() {
  return ['points'] as const
}

export function getGetArchiveDeleteKey(args: InferRequestType<typeof client.archive.delete.$get>) {
  return ['archive', '/archive/delete', args] as const
}

export function useGetArchiveDelete<TError = unknown>(
  args: InferRequestType<typeof client.archive.delete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveDeleteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.delete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchiveDelete<TError = unknown>(
  args: InferRequestType<typeof client.archive.delete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveDeleteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.delete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchiveDeleteNetworkKey(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
) {
  return ['archive', '/archive/delete/network', args] as const
}

export function useGetArchiveDeleteNetwork<TError = unknown>(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
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
        ? getGetArchiveDeleteNetworkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.delete.network.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchiveDeleteNetwork<TError = unknown>(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
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
        ? getGetArchiveDeleteNetworkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.delete.network.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchiveExportKey(args: InferRequestType<typeof client.archive.export.$get>) {
  return ['archive', '/archive/export', args] as const
}

export function useGetArchiveExport<TError = unknown>(
  args: InferRequestType<typeof client.archive.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchiveExport<TError = unknown>(
  args: InferRequestType<typeof client.archive.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchiveListKey(args: InferRequestType<typeof client.archive.list.$get>) {
  return ['archive', '/archive/list', args] as const
}

export function useGetArchiveList<TError = unknown>(
  args: InferRequestType<typeof client.archive.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchiveList<TError = unknown>(
  args: InferRequestType<typeof client.archive.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchiveListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archive.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAreaKey() {
  return ['area', '/area', 'POST'] as const
}

export function usePostArea<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.area.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.area.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAreaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.area.$post> }) =>
        parseResponse(client.area.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClutterAddKey() {
  return ['clutter', '/clutter/add', 'POST'] as const
}

export function usePostClutterAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clutter.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clutter.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClutterAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clutter.add.$post> }) =>
        parseResponse(client.clutter.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInterferenceKey(args: InferRequestType<typeof client.interference.$get>) {
  return ['interference', '/interference', args] as const
}

export function useGetInterference<TError = unknown>(
  args: InferRequestType<typeof client.interference.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInterferenceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.interference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInterference<TError = unknown>(
  args: InferRequestType<typeof client.interference.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInterferenceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.interference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeshKey(args: InferRequestType<typeof client.mesh.$get>) {
  return ['mesh', '/mesh', args] as const
}

export function useGetMesh<TError = unknown>(
  args: InferRequestType<typeof client.mesh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mesh.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMesh<TError = unknown>(
  args: InferRequestType<typeof client.mesh.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeshKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mesh.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNetworkKey(args: InferRequestType<typeof client.network.$get>) {
  return ['network', '/network', args] as const
}

export function useGetNetwork<TError = unknown>(
  args: InferRequestType<typeof client.network.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.network.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNetwork<TError = unknown>(
  args: InferRequestType<typeof client.network.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.network.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPathKey() {
  return ['path', '/path', 'POST'] as const
}

export function usePostPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.path.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.path.$post> }) =>
        parseResponse(client.path.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPointsKey() {
  return ['points', '/points', 'POST'] as const
}

export function usePostPoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.points.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.points.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.points.$post> }) =>
        parseResponse(client.points.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
