import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getBlocksKey() {
  return ['blocks'] as const
}

export function getEpochsKey() {
  return ['epochs'] as const
}

export function getGenesisKey() {
  return ['genesis'] as const
}

export function getGovernanceKey() {
  return ['governance'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getIpfsKey() {
  return ['ipfs'] as const
}

export function getMempoolKey() {
  return ['mempool'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getPoolsKey() {
  return ['pools'] as const
}

export function getScriptsKey() {
  return ['scripts'] as const
}

export function getTxKey() {
  return ['tx'] as const
}

export function getTxsKey() {
  return ['txs'] as const
}

export function getUtilsKey() {
  return ['utils'] as const
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

export function getGetHealthClockKey() {
  return ['health', '/health/clock'] as const
}

export function useGetHealthClock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthClock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthClockKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.clock.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksLatestKey() {
  return ['blocks', '/blocks/latest'] as const
}

export function useGetBlocksLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocksLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocksLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksLatestTxsKey(
  args: InferRequestType<typeof client.blocks.latest.txs.$get>,
) {
  return ['blocks', '/blocks/latest/txs', args] as const
}

export function useGetBlocksLatestTxs<TError = unknown>(
  args: InferRequestType<typeof client.blocks.latest.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
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
        ? getGetBlocksLatestTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksLatestTxs<TError = unknown>(
  args: InferRequestType<typeof client.blocks.latest.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
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
        ? getGetBlocksLatestTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksLatestTxsCborKey(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
) {
  return ['blocks', '/blocks/latest/txs/cbor', args] as const
}

export function useGetBlocksLatestTxsCbor<TError = unknown>(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
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
        ? getGetBlocksLatestTxsCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.txs.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksLatestTxsCbor<TError = unknown>(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
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
        ? getGetBlocksLatestTxsCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.latest.txs.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number', args] as const
}

export function useGetBlocksHashOrNumber<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
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
        ? getGetBlocksHashOrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumber<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
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
        ? getGetBlocksHashOrNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberNextKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/next', args] as const
}

export function useGetBlocksHashOrNumberNext<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
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
        ? getGetBlocksHashOrNumberNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumberNext<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
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
        ? getGetBlocksHashOrNumberNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberPreviousKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/previous', args] as const
}

export function useGetBlocksHashOrNumberPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
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
        ? getGetBlocksHashOrNumberPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumberPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
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
        ? getGetBlocksHashOrNumberPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksSlotSlotNumberKey(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
) {
  return ['blocks', '/blocks/slot/:slot_number', args] as const
}

export function useGetBlocksSlotSlotNumber<TError = unknown>(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
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
        ? getGetBlocksSlotSlotNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.slot[':slot_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksSlotSlotNumber<TError = unknown>(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
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
        ? getGetBlocksSlotSlotNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks.slot[':slot_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksEpochEpochNumberSlotSlotNumberKey(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
) {
  return ['blocks', '/blocks/epoch/:epoch_number/slot/:slot_number', args] as const
}

export function useGetBlocksEpochEpochNumberSlotSlotNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
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
        ? getGetBlocksEpochEpochNumberSlotSlotNumberKey(args)
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
                (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
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
          client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksEpochEpochNumberSlotSlotNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
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
        ? getGetBlocksEpochEpochNumberSlotSlotNumberKey(args)
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
                (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
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
          client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberTxsKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/txs', args] as const
}

export function useGetBlocksHashOrNumberTxs<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
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
        ? getGetBlocksHashOrNumberTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumberTxs<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
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
        ? getGetBlocksHashOrNumberTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocks[':hash_or_number'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberTxsCborKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/txs/cbor', args] as const
}

export function useGetBlocksHashOrNumberTxsCbor<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
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
        ? getGetBlocksHashOrNumberTxsCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].txs.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumberTxsCbor<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
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
        ? getGetBlocksHashOrNumberTxsCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].txs.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocksHashOrNumberAddressesKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/addresses', args] as const
}

export function useGetBlocksHashOrNumberAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
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
        ? getGetBlocksHashOrNumberAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocksHashOrNumberAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
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
        ? getGetBlocksHashOrNumberAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blocks[':hash_or_number'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesisKey() {
  return ['genesis', '/genesis'] as const
}

export function useGetGenesis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesisKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genesis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesis<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesisKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genesis.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceCommitteeKey() {
  return ['governance', '/governance/committee'] as const
}

export function useGetGovernanceCommittee<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
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
        ? getGetGovernanceCommitteeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.committee.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceCommittee<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
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
        ? getGetGovernanceCommitteeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.committee.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceCommitteeVotesKey(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
) {
  return ['governance', '/governance/committee/votes', args] as const
}

export function useGetGovernanceCommitteeVotes<TError = unknown>(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
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
        ? getGetGovernanceCommitteeVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.committee.votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceCommitteeVotes<TError = unknown>(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
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
        ? getGetGovernanceCommitteeVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.committee.votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceCommitteeCcIdVotesKey(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
) {
  return ['governance', '/governance/committee/:cc_id/votes', args] as const
}

export function useGetGovernanceCommitteeCcIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
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
        ? getGetGovernanceCommitteeCcIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.committee[':cc_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceCommitteeCcIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
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
        ? getGetGovernanceCommitteeCcIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.committee[':cc_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsKey(
  args: InferRequestType<typeof client.governance.dreps.$get>,
) {
  return ['governance', '/governance/dreps', args] as const
}

export function useGetGovernanceDreps<TError = unknown>(
  args: InferRequestType<typeof client.governance.dreps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
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
        ? getGetGovernanceDrepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.dreps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDreps<TError = unknown>(
  args: InferRequestType<typeof client.governance.dreps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
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
        ? getGetGovernanceDrepsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.dreps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsDrepIdKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id', args] as const
}

export function useGetGovernanceDrepsDrepId<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.dreps[':drep_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDrepsDrepId<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.dreps[':drep_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsDrepIdDelegatorsKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/delegators', args] as const
}

export function useGetGovernanceDrepsDrepIdDelegators<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdDelegatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].delegators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDrepsDrepIdDelegators<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdDelegatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].delegators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsDrepIdMetadataKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/metadata', args] as const
}

export function useGetGovernanceDrepsDrepIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDrepsDrepIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsDrepIdUpdatesKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/updates', args] as const
}

export function useGetGovernanceDrepsDrepIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDrepsDrepIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceDrepsDrepIdVotesKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/votes', args] as const
}

export function useGetGovernanceDrepsDrepIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceDrepsDrepIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
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
        ? getGetGovernanceDrepsDrepIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.dreps[':drep_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsKey(
  args: InferRequestType<typeof client.governance.proposals.$get>,
) {
  return ['governance', '/governance/proposals', args] as const
}

export function useGetGovernanceProposals<TError = unknown>(
  args: InferRequestType<typeof client.governance.proposals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
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
        ? getGetGovernanceProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposals<TError = unknown>(
  args: InferRequestType<typeof client.governance.proposals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
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
        ? getGetGovernanceProposalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.governance.proposals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsTxHashCertIndexKey(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index', args] as const
}

export function useGetGovernanceProposalsTxHashCertIndex<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
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
        ? getGetGovernanceProposalsTxHashCertIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsTxHashCertIndex<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
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
        ? getGetGovernanceProposalsTxHashCertIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsTxHashCertIndexParametersKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/parameters', args] as const
}

export function useGetGovernanceProposalsTxHashCertIndexParameters<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexParametersKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsTxHashCertIndexParameters<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexParametersKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsTxHashCertIndexWithdrawalsKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/withdrawals', args] as const
}

export function useGetGovernanceProposalsTxHashCertIndexWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexWithdrawalsKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsTxHashCertIndexWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexWithdrawalsKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsTxHashCertIndexVotesKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/votes', args] as const
}

export function useGetGovernanceProposalsTxHashCertIndexVotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexVotesKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsTxHashCertIndexVotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexVotesKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsTxHashCertIndexMetadataKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/metadata', args] as const
}

export function useGetGovernanceProposalsTxHashCertIndexMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexMetadataKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsTxHashCertIndexMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
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
        ? getGetGovernanceProposalsTxHashCertIndexMetadataKey(args)
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
                (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
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
          client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsGovActionIdKey(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
) {
  return ['governance', '/governance/proposals/:gov_action_id', args] as const
}

export function useGetGovernanceProposalsGovActionId<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
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
        ? getGetGovernanceProposalsGovActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.proposals[':gov_action_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsGovActionId<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
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
        ? getGetGovernanceProposalsGovActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.governance.proposals[':gov_action_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsGovActionIdParametersKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/parameters', args] as const
}

export function useGetGovernanceProposalsGovActionIdParameters<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
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
        ? getGetGovernanceProposalsGovActionIdParametersKey(args)
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
                (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
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
          client.governance.proposals[':gov_action_id'].parameters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsGovActionIdParameters<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
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
        ? getGetGovernanceProposalsGovActionIdParametersKey(args)
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
                (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
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
          client.governance.proposals[':gov_action_id'].parameters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsGovActionIdWithdrawalsKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/withdrawals', args] as const
}

export function useGetGovernanceProposalsGovActionIdWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
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
        ? getGetGovernanceProposalsGovActionIdWithdrawalsKey(args)
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
                (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
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
          client.governance.proposals[':gov_action_id'].withdrawals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsGovActionIdWithdrawals<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
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
        ? getGetGovernanceProposalsGovActionIdWithdrawalsKey(args)
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
                (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
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
          client.governance.proposals[':gov_action_id'].withdrawals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsGovActionIdVotesKey(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
) {
  return ['governance', '/governance/proposals/:gov_action_id/votes', args] as const
}

export function useGetGovernanceProposalsGovActionIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
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
        ? getGetGovernanceProposalsGovActionIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':gov_action_id'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsGovActionIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
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
        ? getGetGovernanceProposalsGovActionIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':gov_action_id'].votes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGovernanceProposalsGovActionIdMetadataKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/metadata', args] as const
}

export function useGetGovernanceProposalsGovActionIdMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
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
        ? getGetGovernanceProposalsGovActionIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':gov_action_id'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGovernanceProposalsGovActionIdMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
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
        ? getGetGovernanceProposalsGovActionIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.governance.proposals[':gov_action_id'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsLatestKey() {
  return ['epochs', '/epochs/latest'] as const
}

export function useGetEpochsLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpochsLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsLatest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpochsLatestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs.latest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsLatestParametersKey() {
  return ['epochs', '/epochs/latest/parameters'] as const
}

export function useGetEpochsLatestParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
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
        ? getGetEpochsLatestParametersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs.latest.parameters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsLatestParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
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
        ? getGetEpochsLatestParametersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs.latest.parameters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberKey(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
) {
  return ['epochs', '/epochs/:number', args] as const
}

export function useGetEpochsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEpochsNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumber<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEpochsNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberNextKey(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
) {
  return ['epochs', '/epochs/:number/next', args] as const
}

export function useGetEpochsNumberNext<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
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
        ? getGetEpochsNumberNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberNext<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
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
        ? getGetEpochsNumberNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberPreviousKey(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
) {
  return ['epochs', '/epochs/:number/previous', args] as const
}

export function useGetEpochsNumberPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
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
        ? getGetEpochsNumberPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
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
        ? getGetEpochsNumberPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberStakesKey(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
) {
  return ['epochs', '/epochs/:number/stakes', args] as const
}

export function useGetEpochsNumberStakes<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
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
        ? getGetEpochsNumberStakesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].stakes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberStakes<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
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
        ? getGetEpochsNumberStakesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].stakes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberStakesPoolIdKey(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
) {
  return ['epochs', '/epochs/:number/stakes/:pool_id', args] as const
}

export function useGetEpochsNumberStakesPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
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
        ? getGetEpochsNumberStakesPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.epochs[':number'].stakes[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberStakesPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
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
        ? getGetEpochsNumberStakesPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.epochs[':number'].stakes[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberBlocksKey(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
) {
  return ['epochs', '/epochs/:number/blocks', args] as const
}

export function useGetEpochsNumberBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
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
        ? getGetEpochsNumberBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
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
        ? getGetEpochsNumberBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberBlocksPoolIdKey(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
) {
  return ['epochs', '/epochs/:number/blocks/:pool_id', args] as const
}

export function useGetEpochsNumberBlocksPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
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
        ? getGetEpochsNumberBlocksPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.epochs[':number'].blocks[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberBlocksPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
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
        ? getGetEpochsNumberBlocksPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.epochs[':number'].blocks[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpochsNumberParametersKey(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
) {
  return ['epochs', '/epochs/:number/parameters', args] as const
}

export function useGetEpochsNumberParameters<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
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
        ? getGetEpochsNumberParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].parameters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpochsNumberParameters<TError = unknown>(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
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
        ? getGetEpochsNumberParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.epochs[':number'].parameters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashKey(args: InferRequestType<(typeof client.txs)[':hash']['$get']>) {
  return ['txs', '/txs/:hash', args] as const
}

export function useGetTxsHash<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTxsHashKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHash<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTxsHashKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashUtxosKey(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
) {
  return ['txs', '/txs/:hash/utxos', args] as const
}

export function useGetTxsHashUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashUtxosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashUtxosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashStakesKey(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
) {
  return ['txs', '/txs/:hash/stakes', args] as const
}

export function useGetTxsHashStakes<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashStakesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].stakes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashStakes<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashStakesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].stakes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashDelegationsKey(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
) {
  return ['txs', '/txs/:hash/delegations', args] as const
}

export function useGetTxsHashDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
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
        ? getGetTxsHashDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
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
        ? getGetTxsHashDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashWithdrawalsKey(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
) {
  return ['txs', '/txs/:hash/withdrawals', args] as const
}

export function useGetTxsHashWithdrawals<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
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
        ? getGetTxsHashWithdrawalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].withdrawals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashWithdrawals<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
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
        ? getGetTxsHashWithdrawalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].withdrawals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashMirsKey(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
) {
  return ['txs', '/txs/:hash/mirs', args] as const
}

export function useGetTxsHashMirs<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashMirsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].mirs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashMirs<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashMirsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].mirs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashPoolUpdatesKey(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
) {
  return ['txs', '/txs/:hash/pool_updates', args] as const
}

export function useGetTxsHashPoolUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
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
        ? getGetTxsHashPoolUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].pool_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashPoolUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
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
        ? getGetTxsHashPoolUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].pool_updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashPoolRetiresKey(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
) {
  return ['txs', '/txs/:hash/pool_retires', args] as const
}

export function useGetTxsHashPoolRetires<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
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
        ? getGetTxsHashPoolRetiresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].pool_retires.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashPoolRetires<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
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
        ? getGetTxsHashPoolRetiresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].pool_retires.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashMetadataKey(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
) {
  return ['txs', '/txs/:hash/metadata', args] as const
}

export function useGetTxsHashMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
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
        ? getGetTxsHashMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
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
        ? getGetTxsHashMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashMetadataCborKey(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
) {
  return ['txs', '/txs/:hash/metadata/cbor', args] as const
}

export function useGetTxsHashMetadataCbor<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
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
        ? getGetTxsHashMetadataCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].metadata.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashMetadataCbor<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
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
        ? getGetTxsHashMetadataCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].metadata.cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashRedeemersKey(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
) {
  return ['txs', '/txs/:hash/redeemers', args] as const
}

export function useGetTxsHashRedeemers<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
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
        ? getGetTxsHashRedeemersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].redeemers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashRedeemers<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
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
        ? getGetTxsHashRedeemersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].redeemers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashRequiredSignersKey(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
) {
  return ['txs', '/txs/:hash/required_signers', args] as const
}

export function useGetTxsHashRequiredSigners<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
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
        ? getGetTxsHashRequiredSignersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].required_signers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashRequiredSigners<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
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
        ? getGetTxsHashRequiredSignersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].required_signers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTxsHashCborKey(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
) {
  return ['txs', '/txs/:hash/cbor', args] as const
}

export function useGetTxsHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashCborKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTxsHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTxsHashCborKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.txs[':hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTxSubmitKey() {
  return ['tx', '/tx/submit', 'POST'] as const
}

export function usePostTxSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.submit.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tx.submit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTxSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tx.submit.$post> }) =>
        parseResponse(client.tx.submit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsStakeAddressKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address', args] as const
}

export function useGetAccountsStakeAddress<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
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
        ? getGetAccountsStakeAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddress<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
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
        ? getGetAccountsStakeAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressRewardsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/rewards', args] as const
}

export function useGetAccountsStakeAddressRewards<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
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
        ? getGetAccountsStakeAddressRewardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].rewards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressRewards<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
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
        ? getGetAccountsStakeAddressRewardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].rewards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressHistoryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/history', args] as const
}

export function useGetAccountsStakeAddressHistory<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
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
        ? getGetAccountsStakeAddressHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressHistory<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
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
        ? getGetAccountsStakeAddressHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressDelegationsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/delegations', args] as const
}

export function useGetAccountsStakeAddressDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
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
        ? getGetAccountsStakeAddressDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressDelegations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
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
        ? getGetAccountsStakeAddressDelegationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressRegistrationsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/registrations', args] as const
}

export function useGetAccountsStakeAddressRegistrations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
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
        ? getGetAccountsStakeAddressRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressRegistrations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
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
        ? getGetAccountsStakeAddressRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressWithdrawalsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/withdrawals', args] as const
}

export function useGetAccountsStakeAddressWithdrawals<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
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
        ? getGetAccountsStakeAddressWithdrawalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].withdrawals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressWithdrawals<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
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
        ? getGetAccountsStakeAddressWithdrawalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].withdrawals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressMirsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/mirs', args] as const
}

export function useGetAccountsStakeAddressMirs<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
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
        ? getGetAccountsStakeAddressMirsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].mirs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressMirs<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
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
        ? getGetAccountsStakeAddressMirsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].mirs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressAddressesKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses', args] as const
}

export function useGetAccountsStakeAddressAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
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
        ? getGetAccountsStakeAddressAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
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
        ? getGetAccountsStakeAddressAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressAddressesAssetsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses/assets', args] as const
}

export function useGetAccountsStakeAddressAddressesAssets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
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
        ? getGetAccountsStakeAddressAddressesAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressAddressesAssets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
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
        ? getGetAccountsStakeAddressAddressesAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressAddressesTotalKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses/total', args] as const
}

export function useGetAccountsStakeAddressAddressesTotal<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
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
        ? getGetAccountsStakeAddressAddressesTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressAddressesTotal<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
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
        ? getGetAccountsStakeAddressAddressesTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].addresses.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressUtxosKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/utxos', args] as const
}

export function useGetAccountsStakeAddressUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
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
        ? getGetAccountsStakeAddressUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
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
        ? getGetAccountsStakeAddressUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':stake_address'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsStakeAddressTransactionsKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/transactions', args] as const
}

export function useGetAccountsStakeAddressTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
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
        ? getGetAccountsStakeAddressTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsStakeAddressTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
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
        ? getGetAccountsStakeAddressTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':stake_address'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMempoolKey(args: InferRequestType<typeof client.mempool.$get>) {
  return ['mempool', '/mempool', args] as const
}

export function useGetMempool<TError = unknown>(
  args: InferRequestType<typeof client.mempool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMempoolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mempool.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMempool<TError = unknown>(
  args: InferRequestType<typeof client.mempool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMempoolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mempool.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMempoolHashKey(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
) {
  return ['mempool', '/mempool/:hash', args] as const
}

export function useGetMempoolHash<TError = unknown>(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMempoolHashKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mempool[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMempoolHash<TError = unknown>(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMempoolHashKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mempool[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMempoolAddressesAddressKey(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
) {
  return ['mempool', '/mempool/addresses/:address', args] as const
}

export function useGetMempoolAddressesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
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
        ? getGetMempoolAddressesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mempool.addresses[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMempoolAddressesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
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
        ? getGetMempoolAddressesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mempool.addresses[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTxsLabelsKey(
  args: InferRequestType<typeof client.metadata.txs.labels.$get>,
) {
  return ['metadata', '/metadata/txs/labels', args] as const
}

export function useGetMetadataTxsLabels<TError = unknown>(
  args: InferRequestType<typeof client.metadata.txs.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
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
        ? getGetMetadataTxsLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.txs.labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTxsLabels<TError = unknown>(
  args: InferRequestType<typeof client.metadata.txs.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
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
        ? getGetMetadataTxsLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.txs.labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTxsLabelsLabelKey(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
) {
  return ['metadata', '/metadata/txs/labels/:label', args] as const
}

export function useGetMetadataTxsLabelsLabel<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
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
        ? getGetMetadataTxsLabelsLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.txs.labels[':label'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTxsLabelsLabel<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
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
        ? getGetMetadataTxsLabelsLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.txs.labels[':label'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataTxsLabelsLabelCborKey(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
) {
  return ['metadata', '/metadata/txs/labels/:label/cbor', args] as const
}

export function useGetMetadataTxsLabelsLabelCbor<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
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
        ? getGetMetadataTxsLabelsLabelCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.txs.labels[':label'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataTxsLabelsLabelCbor<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
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
        ? getGetMetadataTxsLabelsLabelCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.txs.labels[':label'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressKey(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
) {
  return ['addresses', '/addresses/:address', args] as const
}

export function useGetAddressesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
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
        ? getGetAddressesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
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
        ? getGetAddressesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressExtendedKey(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
) {
  return ['addresses', '/addresses/:address/extended', args] as const
}

export function useGetAddressesAddressExtended<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
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
        ? getGetAddressesAddressExtendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].extended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressExtended<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
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
        ? getGetAddressesAddressExtendedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].extended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressTotalKey(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
) {
  return ['addresses', '/addresses/:address/total', args] as const
}

export function useGetAddressesAddressTotal<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
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
        ? getGetAddressesAddressTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressTotal<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
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
        ? getGetAddressesAddressTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressUtxosKey(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
) {
  return ['addresses', '/addresses/:address/utxos', args] as const
}

export function useGetAddressesAddressUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
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
        ? getGetAddressesAddressUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
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
        ? getGetAddressesAddressUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressUtxosAssetKey(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
) {
  return ['addresses', '/addresses/:address/utxos/:asset', args] as const
}

export function useGetAddressesAddressUtxosAsset<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
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
        ? getGetAddressesAddressUtxosAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addresses[':address'].utxos[':asset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressUtxosAsset<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
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
        ? getGetAddressesAddressUtxosAssetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addresses[':address'].utxos[':asset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressTxsKey(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
) {
  return ['addresses', '/addresses/:address/txs', args] as const
}

export function useGetAddressesAddressTxs<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
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
        ? getGetAddressesAddressTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressTxs<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
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
        ? getGetAddressesAddressTxsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses[':address'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAddressesAddressTransactionsKey(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
) {
  return ['addresses', '/addresses/:address/transactions', args] as const
}

export function useGetAddressesAddressTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
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
        ? getGetAddressesAddressTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addresses[':address'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddressesAddressTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
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
        ? getGetAddressesAddressTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.addresses[':address'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsKey(args: InferRequestType<typeof client.pools.$get>) {
  return ['pools', '/pools', args] as const
}

export function useGetPools<TError = unknown>(
  args: InferRequestType<typeof client.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pools.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPools<TError = unknown>(
  args: InferRequestType<typeof client.pools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pools.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPoolsExtendedKey(args: InferRequestType<typeof client.pools.extended.$get>) {
  return ['pools', '/pools/extended', args] as const
}

export function useGetPoolsExtended<TError = unknown>(
  args: InferRequestType<typeof client.pools.extended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsExtendedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.extended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsExtended<TError = unknown>(
  args: InferRequestType<typeof client.pools.extended.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsExtendedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.extended.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsRetiredKey(args: InferRequestType<typeof client.pools.retired.$get>) {
  return ['pools', '/pools/retired', args] as const
}

export function useGetPoolsRetired<TError = unknown>(
  args: InferRequestType<typeof client.pools.retired.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsRetiredKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.retired.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsRetired<TError = unknown>(
  args: InferRequestType<typeof client.pools.retired.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsRetiredKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.retired.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsRetiringKey(args: InferRequestType<typeof client.pools.retiring.$get>) {
  return ['pools', '/pools/retiring', args] as const
}

export function useGetPoolsRetiring<TError = unknown>(
  args: InferRequestType<typeof client.pools.retiring.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsRetiringKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.retiring.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsRetiring<TError = unknown>(
  args: InferRequestType<typeof client.pools.retiring.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoolsRetiringKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools.retiring.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
) {
  return ['pools', '/pools/:pool_id', args] as const
}

export function useGetPoolsPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPoolsPoolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPoolsPoolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdHistoryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
) {
  return ['pools', '/pools/:pool_id/history', args] as const
}

export function useGetPoolsPoolIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
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
        ? getGetPoolsPoolIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
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
        ? getGetPoolsPoolIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdMetadataKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
) {
  return ['pools', '/pools/:pool_id/metadata', args] as const
}

export function useGetPoolsPoolIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
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
        ? getGetPoolsPoolIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
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
        ? getGetPoolsPoolIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdRelaysKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
) {
  return ['pools', '/pools/:pool_id/relays', args] as const
}

export function useGetPoolsPoolIdRelays<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
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
        ? getGetPoolsPoolIdRelaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].relays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdRelays<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
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
        ? getGetPoolsPoolIdRelaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].relays.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdDelegatorsKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
) {
  return ['pools', '/pools/:pool_id/delegators', args] as const
}

export function useGetPoolsPoolIdDelegators<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
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
        ? getGetPoolsPoolIdDelegatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].delegators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdDelegators<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
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
        ? getGetPoolsPoolIdDelegatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].delegators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdBlocksKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
) {
  return ['pools', '/pools/:pool_id/blocks', args] as const
}

export function useGetPoolsPoolIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
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
        ? getGetPoolsPoolIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
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
        ? getGetPoolsPoolIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdUpdatesKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
) {
  return ['pools', '/pools/:pool_id/updates', args] as const
}

export function useGetPoolsPoolIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
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
        ? getGetPoolsPoolIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
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
        ? getGetPoolsPoolIdUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoolsPoolIdVotesKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
) {
  return ['pools', '/pools/:pool_id/votes', args] as const
}

export function useGetPoolsPoolIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
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
        ? getGetPoolsPoolIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoolsPoolIdVotes<TError = unknown>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
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
        ? getGetPoolsPoolIdVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pools[':pool_id'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsKey(args: InferRequestType<typeof client.assets.$get>) {
  return ['assets', '/assets', args] as const
}

export function useGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAssetsAssetKey(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
) {
  return ['assets', '/assets/:asset', args] as const
}

export function useGetAssetsAsset<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAsset<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetHistoryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
) {
  return ['assets', '/assets/:asset/history', args] as const
}

export function useGetAssetsAssetHistory<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
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
        ? getGetAssetsAssetHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetHistory<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
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
        ? getGetAssetsAssetHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetTxsKey(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
) {
  return ['assets', '/assets/:asset/txs', args] as const
}

export function useGetAssetsAssetTxs<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetTxs<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetTransactionsKey(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
) {
  return ['assets', '/assets/:asset/transactions', args] as const
}

export function useGetAssetsAssetTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
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
        ? getGetAssetsAssetTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
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
        ? getGetAssetsAssetTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetAddressesKey(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
) {
  return ['assets', '/assets/:asset/addresses', args] as const
}

export function useGetAssetsAssetAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
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
        ? getGetAssetsAssetAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
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
        ? getGetAssetsAssetAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetUtxosKey(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
) {
  return ['assets', '/assets/:asset/utxos', args] as const
}

export function useGetAssetsAssetUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
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
        ? getGetAssetsAssetUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
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
        ? getGetAssetsAssetUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':asset'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsPolicyPolicyIdKey(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
) {
  return ['assets', '/assets/policy/:policy_id', args] as const
}

export function useGetAssetsPolicyPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
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
        ? getGetAssetsPolicyPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets.policy[':policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsPolicyPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
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
        ? getGetAssetsPolicyPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets.policy[':policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsKey(args: InferRequestType<typeof client.scripts.$get>) {
  return ['scripts', '/scripts', args] as const
}

export function useGetScripts<TError = unknown>(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScriptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scripts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetScripts<TError = unknown>(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScriptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.scripts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetScriptsScriptHashKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash', args] as const
}

export function useGetScriptsScriptHash<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
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
        ? getGetScriptsScriptHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsScriptHash<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
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
        ? getGetScriptsScriptHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsScriptHashJsonKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/json', args] as const
}

export function useGetScriptsScriptHashJson<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
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
        ? getGetScriptsScriptHashJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].json.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsScriptHashJson<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
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
        ? getGetScriptsScriptHashJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].json.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsScriptHashCborKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/cbor', args] as const
}

export function useGetScriptsScriptHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
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
        ? getGetScriptsScriptHashCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsScriptHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
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
        ? getGetScriptsScriptHashCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsScriptHashRedeemersKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/redeemers', args] as const
}

export function useGetScriptsScriptHashRedeemers<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
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
        ? getGetScriptsScriptHashRedeemersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].redeemers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsScriptHashRedeemers<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
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
        ? getGetScriptsScriptHashRedeemersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].redeemers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsScriptHashUtxosKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/utxos', args] as const
}

export function useGetScriptsScriptHashUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
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
        ? getGetScriptsScriptHashUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsScriptHashUtxos<TError = unknown>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
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
        ? getGetScriptsScriptHashUtxosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts[':script_hash'].utxos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsDatumDatumHashKey(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
) {
  return ['scripts', '/scripts/datum/:datum_hash', args] as const
}

export function useGetScriptsDatumDatumHash<TError = unknown>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
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
        ? getGetScriptsDatumDatumHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.datum[':datum_hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsDatumDatumHash<TError = unknown>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
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
        ? getGetScriptsDatumDatumHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.datum[':datum_hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetScriptsDatumDatumHashCborKey(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
) {
  return ['scripts', '/scripts/datum/:datum_hash/cbor', args] as const
}

export function useGetScriptsDatumDatumHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
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
        ? getGetScriptsDatumDatumHashCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.datum[':datum_hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsDatumDatumHashCbor<TError = unknown>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
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
        ? getGetScriptsDatumDatumHashCborKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.datum[':datum_hash'].cbor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUtilsAddressesXpubXpubRoleIndexKey(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
) {
  return ['utils', '/utils/addresses/xpub/:xpub/:role/:index', args] as const
}

export function useGetUtilsAddressesXpubXpubRoleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
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
        ? getGetUtilsAddressesXpubXpubRoleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUtilsAddressesXpubXpubRoleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
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
        ? getGetUtilsAddressesXpubXpubRoleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUtilsTxsEvaluateKey() {
  return ['utils', '/utils/txs/evaluate', 'POST'] as const
}

export function usePostUtilsTxsEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.utils.txs.evaluate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUtilsTxsEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.utils.txs.evaluate.$post> }) =>
        parseResponse(client.utils.txs.evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUtilsTxsEvaluateUtxosKey() {
  return ['utils', '/utils/txs/evaluate/utxos', 'POST'] as const
}

export function usePostUtilsTxsEvaluateUtxos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.utxos.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.utils.txs.evaluate.utxos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUtilsTxsEvaluateUtxosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.utils.txs.evaluate.utxos.$post> },
      ) => parseResponse(client.utils.txs.evaluate.utxos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpfsAddKey() {
  return ['ipfs', '/ipfs/add', 'POST'] as const
}

export function usePostIpfsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ipfs.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpfsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ipfs.add.$post> }) =>
        parseResponse(client.ipfs.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpfsGatewayIPFSPathKey(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
) {
  return ['ipfs', '/ipfs/gateway/:IPFS_path', args] as const
}

export function useGetIpfsGatewayIPFSPath<TError = unknown>(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
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
        ? getGetIpfsGatewayIPFSPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.gateway[':IPFS_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpfsGatewayIPFSPath<TError = unknown>(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
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
        ? getGetIpfsGatewayIPFSPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.gateway[':IPFS_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpfsPinAddIPFSPathKey() {
  return ['ipfs', '/ipfs/pin/add/:IPFS_path', 'POST'] as const
}

export function usePostIpfsPinAddIPFSPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpfsPinAddIPFSPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']> },
      ) => parseResponse(client.ipfs.pin.add[':IPFS_path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpfsPinListKey(args: InferRequestType<typeof client.ipfs.pin.list.$get>) {
  return ['ipfs', '/ipfs/pin/list', args] as const
}

export function useGetIpfsPinList<TError = unknown>(
  args: InferRequestType<typeof client.ipfs.pin.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpfsPinListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.pin.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpfsPinList<TError = unknown>(
  args: InferRequestType<typeof client.ipfs.pin.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpfsPinListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.pin.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpfsPinListIPFSPathKey(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
) {
  return ['ipfs', '/ipfs/pin/list/:IPFS_path', args] as const
}

export function useGetIpfsPinListIPFSPath<TError = unknown>(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
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
        ? getGetIpfsPinListIPFSPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.pin.list[':IPFS_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpfsPinListIPFSPath<TError = unknown>(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
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
        ? getGetIpfsPinListIPFSPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipfs.pin.list[':IPFS_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIpfsPinRemoveIPFSPathKey() {
  return ['ipfs', '/ipfs/pin/remove/:IPFS_path', 'POST'] as const
}

export function usePostIpfsPinRemoveIPFSPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpfsPinRemoveIPFSPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']> },
      ) => parseResponse(client.ipfs.pin.remove[':IPFS_path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsEndpointsKey() {
  return ['metrics', '/metrics/endpoints'] as const
}

export function useGetMetricsEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricsEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkKey() {
  return ['network', '/network'] as const
}

export function useGetNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkErasKey() {
  return ['network', '/network/eras'] as const
}

export function useGetNetworkEras<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkErasKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.eras.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkEras<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkErasKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.eras.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
