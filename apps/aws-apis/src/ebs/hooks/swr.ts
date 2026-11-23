import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountKey() {
  return [
    'snapshots',
    '/snapshots/completion/:snapshotId#x-amz-ChangedBlocksCount',
    'POST',
  ] as const
}

export function usePostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountKey()
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
            (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
          >
        },
      ) =>
        parseResponse(
          client.snapshots.completion[':snapshotId#x-amz-ChangedBlocksCount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsSnapshotIdBlocksBlockIndexBlockTokenKey(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:snapshotId/blocks/:blockIndex#blockToken', keyArgs] as const
}

export function useGetSnapshotsSnapshotIdBlocksBlockIndexBlockToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
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
        ? getGetSnapshotsSnapshotIdBlocksBlockIndexBlockTokenKey(args)
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
                (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
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
          client.snapshots[':snapshotId'].blocks[':blockIndex#blockToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsSnapshotIdBlocksBlockIndexBlockToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
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
        ? getGetSnapshotsSnapshotIdBlocksBlockIndexBlockTokenKey(args)
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
                (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
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
          client.snapshots[':snapshotId'].blocks[':blockIndex#blockToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotsSecondSnapshotIdChangedblocksKey(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:secondSnapshotId/changedblocks', keyArgs] as const
}

export function useGetSnapshotsSecondSnapshotIdChangedblocks<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
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
        ? getGetSnapshotsSecondSnapshotIdChangedblocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snapshots[':secondSnapshotId'].changedblocks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsSecondSnapshotIdChangedblocks<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
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
        ? getGetSnapshotsSecondSnapshotIdChangedblocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.snapshots[':secondSnapshotId'].changedblocks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotsSnapshotIdBlocksKey(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:snapshotId/blocks', keyArgs] as const
}

export function useGetSnapshotsSnapshotIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
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
        ? getGetSnapshotsSnapshotIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':snapshotId'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsSnapshotIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
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
        ? getGetSnapshotsSnapshotIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':snapshotId'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmKey() {
  return [
    'snapshots',
    '/snapshots/:snapshotId/blocks/:blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm',
    'PUT',
  ] as const
}

export function usePutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithm<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmKey()
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
            (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
          >
        },
      ) =>
        parseResponse(
          client.snapshots[':snapshotId'].blocks[
            ':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSnapshotsKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function usePostSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snapshots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snapshots.$post> }) =>
        parseResponse(client.snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
