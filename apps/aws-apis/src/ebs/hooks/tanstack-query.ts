import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountMutationKey() {
  return [
    'snapshots',
    '/snapshots/completion/:snapshotId#x-amz-ChangedBlocksCount',
    'POST',
  ] as const
}

export function getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
      >,
    ) {
      return parseResponse(
        client.snapshots.completion[':snapshotId#x-amz-ChangedBlocksCount'].$post(args, options),
      )
    },
  })
}

export function usePostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountMutationOptions<
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

export function getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryKey(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:snapshotId/blocks/:blockIndex#blockToken', keyArgs] as const
}

export function getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryKey>
  >({
    queryKey: getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':snapshotId'].blocks[':blockIndex#blockToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSnapshotsSnapshotIdBlocksBlockIndexBlockToken<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSnapshotsSnapshotIdBlocksBlockIndexBlockToken<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSnapshotsSecondSnapshotIdChangedblocksQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:secondSnapshotId/changedblocks', keyArgs] as const
}

export function getSnapshotsSecondSnapshotIdChangedblocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsSecondSnapshotIdChangedblocksQueryKey>
  >({
    queryKey: getSnapshotsSecondSnapshotIdChangedblocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':secondSnapshotId'].changedblocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSnapshotsSecondSnapshotIdChangedblocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsSecondSnapshotIdChangedblocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSnapshotsSecondSnapshotIdChangedblocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSnapshotsSecondSnapshotIdChangedblocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsSecondSnapshotIdChangedblocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSnapshotsSecondSnapshotIdChangedblocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSnapshotsSnapshotIdBlocksQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:snapshotId/blocks', keyArgs] as const
}

export function getSnapshotsSnapshotIdBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsSnapshotIdBlocksQueryKey>
  >({
    queryKey: getSnapshotsSnapshotIdBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':snapshotId'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSnapshotsSnapshotIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsSnapshotIdBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSnapshotsSnapshotIdBlocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSnapshotsSnapshotIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsSnapshotIdBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSnapshotsSnapshotIdBlocksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmMutationKey() {
  return [
    'snapshots',
    '/snapshots/:snapshotId/blocks/:blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm',
    'PUT',
  ] as const
}

export function getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
      >,
    ) {
      return parseResponse(
        client.snapshots[':snapshotId'].blocks[
          ':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm'
        ].$put(args, options),
      )
    },
  })
}

export function usePutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmMutationOptions<
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

export function getPostSnapshotsMutationKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function getPostSnapshotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    InferRequestType<typeof client.snapshots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snapshots.$post>) {
      return parseResponse(client.snapshots.$post(args, options))
    },
  })
}

export function usePostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.snapshots.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
