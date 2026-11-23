import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
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
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHealthQueryKey>
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
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthClockQueryKey() {
  return ['health', '/health/clock'] as const
}

export function getHealthClockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthClockQueryKey>
  >({
    queryKey: getHealthClockQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthClock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthClockQueryKey>
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
    return { ...getHealthClockQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBlocksLatestQueryKey() {
  return ['blocks', '/blocks/latest'] as const
}

export function getBlocksLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestQueryKey>
  >({
    queryKey: getBlocksLatestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocksLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksLatestQueryKey>
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
    return { ...getBlocksLatestQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBlocksLatestTxsQueryKey(
  args: InferRequestType<typeof client.blocks.latest.txs.$get>,
) {
  return ['blocks', '/blocks/latest/txs', args] as const
}

export function getBlocksLatestTxsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocks.latest.txs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestTxsQueryKey>
  >({
    queryKey: getBlocksLatestTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks.latest.txs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocksLatestTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocks.latest.txs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksLatestTxsQueryKey>
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
    return { ...getBlocksLatestTxsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlocksLatestTxsCborQueryKey(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
) {
  return ['blocks', '/blocks/latest/txs/cbor', args] as const
}

export function getBlocksLatestTxsCborQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestTxsCborQueryKey>
  >({
    queryKey: getBlocksLatestTxsCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks.latest.txs.cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksLatestTxsCbor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocks.latest.txs.cbor.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksLatestTxsCborQueryKey>
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
    return { ...getBlocksLatestTxsCborQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlocksHashOrNumberQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number', args] as const
}

export function getBlocksHashOrNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberQueryKey>
  >({
    queryKey: getBlocksHashOrNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberQueryKey>
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
    return { ...getBlocksHashOrNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlocksHashOrNumberNextQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/next', args] as const
}

export function getBlocksHashOrNumberNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberNextQueryKey>
  >({
    queryKey: getBlocksHashOrNumberNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumberNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberNextQueryKey>
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
      ...getBlocksHashOrNumberNextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksHashOrNumberPreviousQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/previous', args] as const
}

export function getBlocksHashOrNumberPreviousQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberPreviousQueryKey>
  >({
    queryKey: getBlocksHashOrNumberPreviousQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].previous.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumberPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberPreviousQueryKey>
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
      ...getBlocksHashOrNumberPreviousQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksSlotSlotNumberQueryKey(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
) {
  return ['blocks', '/blocks/slot/:slot_number', args] as const
}

export function getBlocksSlotSlotNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksSlotSlotNumberQueryKey>
  >({
    queryKey: getBlocksSlotSlotNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks.slot[':slot_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksSlotSlotNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksSlotSlotNumberQueryKey>
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
      ...getBlocksSlotSlotNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksEpochEpochNumberSlotSlotNumberQueryKey(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
) {
  return ['blocks', '/blocks/epoch/:epoch_number/slot/:slot_number', args] as const
}

export function getBlocksEpochEpochNumberSlotSlotNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBlocksEpochEpochNumberSlotSlotNumberQueryKey>
  >({
    queryKey: getBlocksEpochEpochNumberSlotSlotNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksEpochEpochNumberSlotSlotNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getBlocksEpochEpochNumberSlotSlotNumberQueryKey>
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
      ...getBlocksEpochEpochNumberSlotSlotNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksHashOrNumberTxsQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/txs', args] as const
}

export function getBlocksHashOrNumberTxsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberTxsQueryKey>
  >({
    queryKey: getBlocksHashOrNumberTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].txs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumberTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberTxsQueryKey>
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
      ...getBlocksHashOrNumberTxsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksHashOrNumberTxsCborQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/txs/cbor', args] as const
}

export function getBlocksHashOrNumberTxsCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberTxsCborQueryKey>
  >({
    queryKey: getBlocksHashOrNumberTxsCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].txs.cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumberTxsCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberTxsCborQueryKey>
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
      ...getBlocksHashOrNumberTxsCborQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBlocksHashOrNumberAddressesQueryKey(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
) {
  return ['blocks', '/blocks/:hash_or_number/addresses', args] as const
}

export function getBlocksHashOrNumberAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberAddressesQueryKey>
  >({
    queryKey: getBlocksHashOrNumberAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocks[':hash_or_number'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocksHashOrNumberAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocksHashOrNumberAddressesQueryKey>
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
      ...getBlocksHashOrNumberAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGenesisQueryKey() {
  return ['genesis', '/genesis'] as const
}

export function getGenesisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenesisQueryKey>
  >({
    queryKey: getGenesisQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.genesis.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGenesis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGenesisQueryKey>
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
    return { ...getGenesisQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGovernanceCommitteeQueryKey() {
  return ['governance', '/governance/committee'] as const
}

export function getGovernanceCommitteeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceCommitteeQueryKey>
  >({
    queryKey: getGovernanceCommitteeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.committee.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceCommitteeQueryKey>
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
    return { ...getGovernanceCommitteeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGovernanceCommitteeVotesQueryKey(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
) {
  return ['governance', '/governance/committee/votes', args] as const
}

export function getGovernanceCommitteeVotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.governance.committee.votes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceCommitteeVotesQueryKey>
  >({
    queryKey: getGovernanceCommitteeVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.committee.votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceCommitteeVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.governance.committee.votes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.governance.committee.votes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceCommitteeVotesQueryKey>
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
      ...getGovernanceCommitteeVotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceCommitteeCcIdVotesQueryKey(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
) {
  return ['governance', '/governance/committee/:cc_id/votes', args] as const
}

export function getGovernanceCommitteeCcIdVotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceCommitteeCcIdVotesQueryKey>
  >({
    queryKey: getGovernanceCommitteeCcIdVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.committee[':cc_id'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceCommitteeCcIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceCommitteeCcIdVotesQueryKey>
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
      ...getGovernanceCommitteeCcIdVotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceDrepsQueryKey(
  args: InferRequestType<typeof client.governance.dreps.$get>,
) {
  return ['governance', '/governance/dreps', args] as const
}

export function getGovernanceDrepsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.governance.dreps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsQueryKey>
  >({
    queryKey: getGovernanceDrepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGovernanceDreps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.governance.dreps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsQueryKey>
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
    return { ...getGovernanceDrepsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGovernanceDrepsDrepIdQueryKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id', args] as const
}

export function getGovernanceDrepsDrepIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsDrepIdQueryKey>
  >({
    queryKey: getGovernanceDrepsDrepIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps[':drep_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceDrepsDrepId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsDrepIdQueryKey>
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
      ...getGovernanceDrepsDrepIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceDrepsDrepIdDelegatorsQueryKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/delegators', args] as const
}

export function getGovernanceDrepsDrepIdDelegatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsDrepIdDelegatorsQueryKey>
  >({
    queryKey: getGovernanceDrepsDrepIdDelegatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps[':drep_id'].delegators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceDrepsDrepIdDelegators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsDrepIdDelegatorsQueryKey>
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
      ...getGovernanceDrepsDrepIdDelegatorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceDrepsDrepIdMetadataQueryKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/metadata', args] as const
}

export function getGovernanceDrepsDrepIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsDrepIdMetadataQueryKey>
  >({
    queryKey: getGovernanceDrepsDrepIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps[':drep_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceDrepsDrepIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsDrepIdMetadataQueryKey>
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
      ...getGovernanceDrepsDrepIdMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceDrepsDrepIdUpdatesQueryKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/updates', args] as const
}

export function getGovernanceDrepsDrepIdUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsDrepIdUpdatesQueryKey>
  >({
    queryKey: getGovernanceDrepsDrepIdUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps[':drep_id'].updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceDrepsDrepIdUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsDrepIdUpdatesQueryKey>
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
      ...getGovernanceDrepsDrepIdUpdatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceDrepsDrepIdVotesQueryKey(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
) {
  return ['governance', '/governance/dreps/:drep_id/votes', args] as const
}

export function getGovernanceDrepsDrepIdVotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsDrepIdVotesQueryKey>
  >({
    queryKey: getGovernanceDrepsDrepIdVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.dreps[':drep_id'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceDrepsDrepIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceDrepsDrepIdVotesQueryKey>
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
      ...getGovernanceDrepsDrepIdVotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsQueryKey(
  args: InferRequestType<typeof client.governance.proposals.$get>,
) {
  return ['governance', '/governance/proposals', args] as const
}

export function getGovernanceProposalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.governance.proposals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsQueryKey>
  >({
    queryKey: getGovernanceProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGovernanceProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.governance.proposals.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsQueryKey>
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
    return { ...getGovernanceProposalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGovernanceProposalsTxHashCertIndexQueryKey(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index', args] as const
}

export function getGovernanceProposalsTxHashCertIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsTxHashCertIndexQueryKey>
  >({
    queryKey: getGovernanceProposalsTxHashCertIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsTxHashCertIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexQueryKey>
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
      ...getGovernanceProposalsTxHashCertIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsTxHashCertIndexParametersQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/parameters', args] as const
}

export function getGovernanceProposalsTxHashCertIndexParametersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsTxHashCertIndexParametersQueryKey>
  >({
    queryKey: getGovernanceProposalsTxHashCertIndexParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsTxHashCertIndexParameters<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexParametersQueryKey>
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
      ...getGovernanceProposalsTxHashCertIndexParametersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/withdrawals', args] as const
}

export function getGovernanceProposalsTxHashCertIndexWithdrawalsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey>
  >({
    queryKey: getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsTxHashCertIndexWithdrawals<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey>
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
      ...getGovernanceProposalsTxHashCertIndexWithdrawalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsTxHashCertIndexVotesQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/votes', args] as const
}

export function getGovernanceProposalsTxHashCertIndexVotesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsTxHashCertIndexVotesQueryKey>
  >({
    queryKey: getGovernanceProposalsTxHashCertIndexVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsTxHashCertIndexVotes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexVotesQueryKey>
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
      ...getGovernanceProposalsTxHashCertIndexVotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsTxHashCertIndexMetadataQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/metadata', args] as const
}

export function getGovernanceProposalsTxHashCertIndexMetadataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsTxHashCertIndexMetadataQueryKey>
  >({
    queryKey: getGovernanceProposalsTxHashCertIndexMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsTxHashCertIndexMetadata<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexMetadataQueryKey>
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
      ...getGovernanceProposalsTxHashCertIndexMetadataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsGovActionIdQueryKey(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
) {
  return ['governance', '/governance/proposals/:gov_action_id', args] as const
}

export function getGovernanceProposalsGovActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsGovActionIdQueryKey>
  >({
    queryKey: getGovernanceProposalsGovActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsGovActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsGovActionIdQueryKey>
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
      ...getGovernanceProposalsGovActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsGovActionIdParametersQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/parameters', args] as const
}

export function getGovernanceProposalsGovActionIdParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsGovActionIdParametersQueryKey>
  >({
    queryKey: getGovernanceProposalsGovActionIdParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].parameters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsGovActionIdParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsGovActionIdParametersQueryKey>
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
      ...getGovernanceProposalsGovActionIdParametersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsGovActionIdWithdrawalsQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/withdrawals', args] as const
}

export function getGovernanceProposalsGovActionIdWithdrawalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsGovActionIdWithdrawalsQueryKey>
  >({
    queryKey: getGovernanceProposalsGovActionIdWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsGovActionIdWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsGovActionIdWithdrawalsQueryKey>
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
      ...getGovernanceProposalsGovActionIdWithdrawalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsGovActionIdVotesQueryKey(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
) {
  return ['governance', '/governance/proposals/:gov_action_id/votes', args] as const
}

export function getGovernanceProposalsGovActionIdVotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsGovActionIdVotesQueryKey>
  >({
    queryKey: getGovernanceProposalsGovActionIdVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsGovActionIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['votes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.governance.proposals)[':gov_action_id']['votes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsGovActionIdVotesQueryKey>
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
      ...getGovernanceProposalsGovActionIdVotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGovernanceProposalsGovActionIdMetadataQueryKey(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/metadata', args] as const
}

export function getGovernanceProposalsGovActionIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsGovActionIdMetadataQueryKey>
  >({
    queryKey: getGovernanceProposalsGovActionIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGovernanceProposalsGovActionIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGovernanceProposalsGovActionIdMetadataQueryKey>
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
      ...getGovernanceProposalsGovActionIdMetadataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEpochsLatestQueryKey() {
  return ['epochs', '/epochs/latest'] as const
}

export function getEpochsLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsLatestQueryKey>
  >({
    queryKey: getEpochsLatestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpochsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsLatestQueryKey>
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
    return { ...getEpochsLatestQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEpochsLatestParametersQueryKey() {
  return ['epochs', '/epochs/latest/parameters'] as const
}

export function getEpochsLatestParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsLatestParametersQueryKey>
  >({
    queryKey: getEpochsLatestParametersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs.latest.parameters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsLatestParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsLatestParametersQueryKey>
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
    return { ...getEpochsLatestParametersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEpochsNumberQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
) {
  return ['epochs', '/epochs/:number', args] as const
}

export function getEpochsNumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberQueryKey>
  >({
    queryKey: getEpochsNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpochsNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberQueryKey>
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
    return { ...getEpochsNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpochsNumberNextQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
) {
  return ['epochs', '/epochs/:number/next', args] as const
}

export function getEpochsNumberNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberNextQueryKey>
  >({
    queryKey: getEpochsNumberNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['next']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberNextQueryKey>
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
    return { ...getEpochsNumberNextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpochsNumberPreviousQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
) {
  return ['epochs', '/epochs/:number/previous', args] as const
}

export function getEpochsNumberPreviousQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberPreviousQueryKey>
  >({
    queryKey: getEpochsNumberPreviousQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].previous.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberPreviousQueryKey>
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
      ...getEpochsNumberPreviousQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEpochsNumberStakesQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
) {
  return ['epochs', '/epochs/:number/stakes', args] as const
}

export function getEpochsNumberStakesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberStakesQueryKey>
  >({
    queryKey: getEpochsNumberStakesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].stakes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberStakes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberStakesQueryKey>
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
    return { ...getEpochsNumberStakesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpochsNumberStakesPoolIdQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
) {
  return ['epochs', '/epochs/:number/stakes/:pool_id', args] as const
}

export function getEpochsNumberStakesPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberStakesPoolIdQueryKey>
  >({
    queryKey: getEpochsNumberStakesPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].stakes[':pool_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberStakesPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberStakesPoolIdQueryKey>
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
      ...getEpochsNumberStakesPoolIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEpochsNumberBlocksQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
) {
  return ['epochs', '/epochs/:number/blocks', args] as const
}

export function getEpochsNumberBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberBlocksQueryKey>
  >({
    queryKey: getEpochsNumberBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberBlocksQueryKey>
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
    return { ...getEpochsNumberBlocksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpochsNumberBlocksPoolIdQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
) {
  return ['epochs', '/epochs/:number/blocks/:pool_id', args] as const
}

export function getEpochsNumberBlocksPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberBlocksPoolIdQueryKey>
  >({
    queryKey: getEpochsNumberBlocksPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].blocks[':pool_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberBlocksPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberBlocksPoolIdQueryKey>
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
      ...getEpochsNumberBlocksPoolIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEpochsNumberParametersQueryKey(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
) {
  return ['epochs', '/epochs/:number/parameters', args] as const
}

export function getEpochsNumberParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberParametersQueryKey>
  >({
    queryKey: getEpochsNumberParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.epochs[':number'].parameters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEpochsNumberParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEpochsNumberParametersQueryKey>
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
      ...getEpochsNumberParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTxsHashQueryKey(args: InferRequestType<(typeof client.txs)[':hash']['$get']>) {
  return ['txs', '/txs/:hash', args] as const
}

export function getTxsHashQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.txs)[':hash']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashQueryKey>
  >({
    queryKey: getTxsHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHash<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashQueryKey>
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
    return { ...getTxsHashQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashUtxosQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
) {
  return ['txs', '/txs/:hash/utxos', args] as const
}

export function getTxsHashUtxosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashUtxosQueryKey>
  >({
    queryKey: getTxsHashUtxosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].utxos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHashUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashUtxosQueryKey>
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
    return { ...getTxsHashUtxosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashStakesQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
) {
  return ['txs', '/txs/:hash/stakes', args] as const
}

export function getTxsHashStakesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashStakesQueryKey>
  >({
    queryKey: getTxsHashStakesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].stakes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHashStakes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashStakesQueryKey>
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
    return { ...getTxsHashStakesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashDelegationsQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
) {
  return ['txs', '/txs/:hash/delegations', args] as const
}

export function getTxsHashDelegationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashDelegationsQueryKey>
  >({
    queryKey: getTxsHashDelegationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].delegations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashDelegations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashDelegationsQueryKey>
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
    return { ...getTxsHashDelegationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashWithdrawalsQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
) {
  return ['txs', '/txs/:hash/withdrawals', args] as const
}

export function getTxsHashWithdrawalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashWithdrawalsQueryKey>
  >({
    queryKey: getTxsHashWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashWithdrawalsQueryKey>
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
    return { ...getTxsHashWithdrawalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashMirsQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
) {
  return ['txs', '/txs/:hash/mirs', args] as const
}

export function getTxsHashMirsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashMirsQueryKey>
  >({
    queryKey: getTxsHashMirsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].mirs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHashMirs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashMirsQueryKey>
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
    return { ...getTxsHashMirsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashPoolUpdatesQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
) {
  return ['txs', '/txs/:hash/pool_updates', args] as const
}

export function getTxsHashPoolUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashPoolUpdatesQueryKey>
  >({
    queryKey: getTxsHashPoolUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].pool_updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashPoolUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashPoolUpdatesQueryKey>
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
    return { ...getTxsHashPoolUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashPoolRetiresQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
) {
  return ['txs', '/txs/:hash/pool_retires', args] as const
}

export function getTxsHashPoolRetiresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashPoolRetiresQueryKey>
  >({
    queryKey: getTxsHashPoolRetiresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].pool_retires.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashPoolRetires<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashPoolRetiresQueryKey>
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
    return { ...getTxsHashPoolRetiresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashMetadataQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
) {
  return ['txs', '/txs/:hash/metadata', args] as const
}

export function getTxsHashMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashMetadataQueryKey>
  >({
    queryKey: getTxsHashMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHashMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashMetadataQueryKey>
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
    return { ...getTxsHashMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashMetadataCborQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
) {
  return ['txs', '/txs/:hash/metadata/cbor', args] as const
}

export function getTxsHashMetadataCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashMetadataCborQueryKey>
  >({
    queryKey: getTxsHashMetadataCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].metadata.cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashMetadataCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashMetadataCborQueryKey>
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
    return { ...getTxsHashMetadataCborQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashRedeemersQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
) {
  return ['txs', '/txs/:hash/redeemers', args] as const
}

export function getTxsHashRedeemersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashRedeemersQueryKey>
  >({
    queryKey: getTxsHashRedeemersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].redeemers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashRedeemers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashRedeemersQueryKey>
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
    return { ...getTxsHashRedeemersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTxsHashRequiredSignersQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
) {
  return ['txs', '/txs/:hash/required_signers', args] as const
}

export function getTxsHashRequiredSignersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashRequiredSignersQueryKey>
  >({
    queryKey: getTxsHashRequiredSignersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].required_signers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTxsHashRequiredSigners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashRequiredSignersQueryKey>
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
      ...getTxsHashRequiredSignersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTxsHashCborQueryKey(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
) {
  return ['txs', '/txs/:hash/cbor', args] as const
}

export function getTxsHashCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashCborQueryKey>
  >({
    queryKey: getTxsHashCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.txs[':hash'].cbor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTxsHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTxsHashCborQueryKey>
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
    return { ...getTxsHashCborQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTxSubmitMutationKey() {
  return ['tx', '/tx/submit', 'POST'] as const
}

export function getPostTxSubmitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.submit.$post>>>>>,
    TError,
    InferRequestType<typeof client.tx.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTxSubmitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tx.submit.$post>) {
      return parseResponse(client.tx.submit.$post(args, options))
    },
  })
}

export function createPostTxSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.submit.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tx.submit.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTxSubmitMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsStakeAddressQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address', args] as const
}

export function getAccountsStakeAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressQueryKey>
  >({
    queryKey: getAccountsStakeAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressQueryKey>
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
      ...getAccountsStakeAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressRewardsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/rewards', args] as const
}

export function getAccountsStakeAddressRewardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressRewardsQueryKey>
  >({
    queryKey: getAccountsStakeAddressRewardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].rewards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressRewards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressRewardsQueryKey>
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
      ...getAccountsStakeAddressRewardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressHistoryQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/history', args] as const
}

export function getAccountsStakeAddressHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressHistoryQueryKey>
  >({
    queryKey: getAccountsStakeAddressHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressHistoryQueryKey>
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
      ...getAccountsStakeAddressHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressDelegationsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/delegations', args] as const
}

export function getAccountsStakeAddressDelegationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressDelegationsQueryKey>
  >({
    queryKey: getAccountsStakeAddressDelegationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].delegations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressDelegations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressDelegationsQueryKey>
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
      ...getAccountsStakeAddressDelegationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressRegistrationsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/registrations', args] as const
}

export function getAccountsStakeAddressRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressRegistrationsQueryKey>
  >({
    queryKey: getAccountsStakeAddressRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].registrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressRegistrationsQueryKey>
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
      ...getAccountsStakeAddressRegistrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressWithdrawalsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/withdrawals', args] as const
}

export function getAccountsStakeAddressWithdrawalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressWithdrawalsQueryKey>
  >({
    queryKey: getAccountsStakeAddressWithdrawalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].withdrawals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressWithdrawalsQueryKey>
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
      ...getAccountsStakeAddressWithdrawalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressMirsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/mirs', args] as const
}

export function getAccountsStakeAddressMirsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressMirsQueryKey>
  >({
    queryKey: getAccountsStakeAddressMirsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].mirs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressMirs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressMirsQueryKey>
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
      ...getAccountsStakeAddressMirsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressAddressesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses', args] as const
}

export function getAccountsStakeAddressAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressAddressesQueryKey>
  >({
    queryKey: getAccountsStakeAddressAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressAddressesQueryKey>
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
      ...getAccountsStakeAddressAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressAddressesAssetsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses/assets', args] as const
}

export function getAccountsStakeAddressAddressesAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressAddressesAssetsQueryKey>
  >({
    queryKey: getAccountsStakeAddressAddressesAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressAddressesAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':stake_address']['addresses']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.accounts)[':stake_address']['addresses']['assets']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressAddressesAssetsQueryKey>
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
      ...getAccountsStakeAddressAddressesAssetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressAddressesTotalQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/addresses/total', args] as const
}

export function getAccountsStakeAddressAddressesTotalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressAddressesTotalQueryKey>
  >({
    queryKey: getAccountsStakeAddressAddressesTotalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.total.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressAddressesTotal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':stake_address']['addresses']['total']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.accounts)[':stake_address']['addresses']['total']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressAddressesTotalQueryKey>
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
      ...getAccountsStakeAddressAddressesTotalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressUtxosQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/utxos', args] as const
}

export function getAccountsStakeAddressUtxosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressUtxosQueryKey>
  >({
    queryKey: getAccountsStakeAddressUtxosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].utxos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressUtxosQueryKey>
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
      ...getAccountsStakeAddressUtxosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsStakeAddressTransactionsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
) {
  return ['accounts', '/accounts/:stake_address/transactions', args] as const
}

export function getAccountsStakeAddressTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsStakeAddressTransactionsQueryKey>
  >({
    queryKey: getAccountsStakeAddressTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':stake_address'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsStakeAddressTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsStakeAddressTransactionsQueryKey>
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
      ...getAccountsStakeAddressTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMempoolQueryKey(args: InferRequestType<typeof client.mempool.$get>) {
  return ['mempool', '/mempool', args] as const
}

export function getMempoolQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mempool.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMempoolQueryKey>
  >({
    queryKey: getMempoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mempool.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMempool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mempool.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMempoolQueryKey>
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
    return { ...getMempoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMempoolHashQueryKey(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
) {
  return ['mempool', '/mempool/:hash', args] as const
}

export function getMempoolHashQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mempool)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMempoolHashQueryKey>
  >({
    queryKey: getMempoolHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mempool[':hash'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMempoolHash<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mempool)[':hash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMempoolHashQueryKey>
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
    return { ...getMempoolHashQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMempoolAddressesAddressQueryKey(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
) {
  return ['mempool', '/mempool/addresses/:address', args] as const
}

export function getMempoolAddressesAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMempoolAddressesAddressQueryKey>
  >({
    queryKey: getMempoolAddressesAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mempool.addresses[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMempoolAddressesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMempoolAddressesAddressQueryKey>
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
      ...getMempoolAddressesAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetadataTxsLabelsQueryKey(
  args: InferRequestType<typeof client.metadata.txs.labels.$get>,
) {
  return ['metadata', '/metadata/txs/labels', args] as const
}

export function getMetadataTxsLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metadata.txs.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTxsLabelsQueryKey>
  >({
    queryKey: getMetadataTxsLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.txs.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetadataTxsLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metadata.txs.labels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataTxsLabelsQueryKey>
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
    return { ...getMetadataTxsLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetadataTxsLabelsLabelQueryKey(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
) {
  return ['metadata', '/metadata/txs/labels/:label', args] as const
}

export function getMetadataTxsLabelsLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTxsLabelsLabelQueryKey>
  >({
    queryKey: getMetadataTxsLabelsLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.txs.labels[':label'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataTxsLabelsLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataTxsLabelsLabelQueryKey>
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
      ...getMetadataTxsLabelsLabelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMetadataTxsLabelsLabelCborQueryKey(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
) {
  return ['metadata', '/metadata/txs/labels/:label/cbor', args] as const
}

export function getMetadataTxsLabelsLabelCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTxsLabelsLabelCborQueryKey>
  >({
    queryKey: getMetadataTxsLabelsLabelCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.txs.labels[':label'].cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataTxsLabelsLabelCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataTxsLabelsLabelCborQueryKey>
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
      ...getMetadataTxsLabelsLabelCborQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddressesAddressQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
) {
  return ['addresses', '/addresses/:address', args] as const
}

export function getAddressesAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressQueryKey>
  >({
    queryKey: getAddressesAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAddressesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressQueryKey>
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
    return { ...getAddressesAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAddressesAddressExtendedQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
) {
  return ['addresses', '/addresses/:address/extended', args] as const
}

export function getAddressesAddressExtendedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressExtendedQueryKey>
  >({
    queryKey: getAddressesAddressExtendedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].extended.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressExtended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressExtendedQueryKey>
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
      ...getAddressesAddressExtendedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddressesAddressTotalQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
) {
  return ['addresses', '/addresses/:address/total', args] as const
}

export function getAddressesAddressTotalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressTotalQueryKey>
  >({
    queryKey: getAddressesAddressTotalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].total.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressTotal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['total']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressTotalQueryKey>
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
      ...getAddressesAddressTotalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddressesAddressUtxosQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
) {
  return ['addresses', '/addresses/:address/utxos', args] as const
}

export function getAddressesAddressUtxosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressUtxosQueryKey>
  >({
    queryKey: getAddressesAddressUtxosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].utxos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressUtxosQueryKey>
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
      ...getAddressesAddressUtxosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddressesAddressUtxosAssetQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
) {
  return ['addresses', '/addresses/:address/utxos/:asset', args] as const
}

export function getAddressesAddressUtxosAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressUtxosAssetQueryKey>
  >({
    queryKey: getAddressesAddressUtxosAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].utxos[':asset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressUtxosAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressUtxosAssetQueryKey>
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
      ...getAddressesAddressUtxosAssetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAddressesAddressTxsQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
) {
  return ['addresses', '/addresses/:address/txs', args] as const
}

export function getAddressesAddressTxsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressTxsQueryKey>
  >({
    queryKey: getAddressesAddressTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].txs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressTxsQueryKey>
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
    return { ...getAddressesAddressTxsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAddressesAddressTransactionsQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
) {
  return ['addresses', '/addresses/:address/transactions', args] as const
}

export function getAddressesAddressTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressTransactionsQueryKey>
  >({
    queryKey: getAddressesAddressTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddressesAddressTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddressesAddressTransactionsQueryKey>
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
      ...getAddressesAddressTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPoolsQueryKey(args: InferRequestType<typeof client.pools.$get>) {
  return ['pools', '/pools', args] as const
}

export function getPoolsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoolsQueryKey>
  >({
    queryKey: getPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pools.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPoolsQueryKey>
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
    return { ...getPoolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsExtendedQueryKey(
  args: InferRequestType<typeof client.pools.extended.$get>,
) {
  return ['pools', '/pools/extended', args] as const
}

export function getPoolsExtendedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pools.extended.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsExtendedQueryKey>
  >({
    queryKey: getPoolsExtendedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools.extended.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoolsExtended<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pools.extended.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsExtendedQueryKey>
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
    return { ...getPoolsExtendedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsRetiredQueryKey(args: InferRequestType<typeof client.pools.retired.$get>) {
  return ['pools', '/pools/retired', args] as const
}

export function getPoolsRetiredQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pools.retired.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsRetiredQueryKey>
  >({
    queryKey: getPoolsRetiredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools.retired.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoolsRetired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pools.retired.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsRetiredQueryKey>
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
    return { ...getPoolsRetiredQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsRetiringQueryKey(
  args: InferRequestType<typeof client.pools.retiring.$get>,
) {
  return ['pools', '/pools/retiring', args] as const
}

export function getPoolsRetiringQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pools.retiring.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsRetiringQueryKey>
  >({
    queryKey: getPoolsRetiringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools.retiring.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoolsRetiring<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pools.retiring.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsRetiringQueryKey>
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
    return { ...getPoolsRetiringQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
) {
  return ['pools', '/pools/:pool_id', args] as const
}

export function getPoolsPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdQueryKey>
  >({
    queryKey: getPoolsPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoolsPoolId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdQueryKey>
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
    return { ...getPoolsPoolIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdHistoryQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
) {
  return ['pools', '/pools/:pool_id/history', args] as const
}

export function getPoolsPoolIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdHistoryQueryKey>
  >({
    queryKey: getPoolsPoolIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdHistoryQueryKey>
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
    return { ...getPoolsPoolIdHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdMetadataQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
) {
  return ['pools', '/pools/:pool_id/metadata', args] as const
}

export function getPoolsPoolIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdMetadataQueryKey>
  >({
    queryKey: getPoolsPoolIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdMetadataQueryKey>
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
    return { ...getPoolsPoolIdMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdRelaysQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
) {
  return ['pools', '/pools/:pool_id/relays', args] as const
}

export function getPoolsPoolIdRelaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdRelaysQueryKey>
  >({
    queryKey: getPoolsPoolIdRelaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].relays.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdRelays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdRelaysQueryKey>
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
    return { ...getPoolsPoolIdRelaysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdDelegatorsQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
) {
  return ['pools', '/pools/:pool_id/delegators', args] as const
}

export function getPoolsPoolIdDelegatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdDelegatorsQueryKey>
  >({
    queryKey: getPoolsPoolIdDelegatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].delegators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdDelegators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdDelegatorsQueryKey>
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
      ...getPoolsPoolIdDelegatorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPoolsPoolIdBlocksQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
) {
  return ['pools', '/pools/:pool_id/blocks', args] as const
}

export function getPoolsPoolIdBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdBlocksQueryKey>
  >({
    queryKey: getPoolsPoolIdBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].blocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdBlocksQueryKey>
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
    return { ...getPoolsPoolIdBlocksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdUpdatesQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
) {
  return ['pools', '/pools/:pool_id/updates', args] as const
}

export function getPoolsPoolIdUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdUpdatesQueryKey>
  >({
    queryKey: getPoolsPoolIdUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdUpdatesQueryKey>
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
    return { ...getPoolsPoolIdUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPoolsPoolIdVotesQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
) {
  return ['pools', '/pools/:pool_id/votes', args] as const
}

export function getPoolsPoolIdVotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdVotesQueryKey>
  >({
    queryKey: getPoolsPoolIdVotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_id'].votes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoolsPoolIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoolsPoolIdVotesQueryKey>
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
    return { ...getPoolsPoolIdVotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsQueryKey(args: InferRequestType<typeof client.assets.$get>) {
  return ['assets', '/assets', args] as const
}

export function getAssetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >({
    queryKey: getAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAssetsQueryKey>
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
    return { ...getAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsAssetQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
) {
  return ['assets', '/assets/:asset', args] as const
}

export function getAssetsAssetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetQueryKey>
  >({
    queryKey: getAssetsAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetsAsset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetQueryKey>
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
    return { ...getAssetsAssetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsAssetHistoryQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
) {
  return ['assets', '/assets/:asset/history', args] as const
}

export function getAssetsAssetHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetHistoryQueryKey>
  >({
    queryKey: getAssetsAssetHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsAssetHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['history']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetHistoryQueryKey>
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
    return { ...getAssetsAssetHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsAssetTxsQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
) {
  return ['assets', '/assets/:asset/txs', args] as const
}

export function getAssetsAssetTxsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetTxsQueryKey>
  >({
    queryKey: getAssetsAssetTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].txs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetsAssetTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetTxsQueryKey>
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
    return { ...getAssetsAssetTxsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsAssetTransactionsQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
) {
  return ['assets', '/assets/:asset/transactions', args] as const
}

export function getAssetsAssetTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetTransactionsQueryKey>
  >({
    queryKey: getAssetsAssetTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsAssetTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetTransactionsQueryKey>
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
      ...getAssetsAssetTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssetsAssetAddressesQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
) {
  return ['assets', '/assets/:asset/addresses', args] as const
}

export function getAssetsAssetAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetAddressesQueryKey>
  >({
    queryKey: getAssetsAssetAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsAssetAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetAddressesQueryKey>
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
      ...getAssetsAssetAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssetsAssetUtxosQueryKey(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
) {
  return ['assets', '/assets/:asset/utxos', args] as const
}

export function getAssetsAssetUtxosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetUtxosQueryKey>
  >({
    queryKey: getAssetsAssetUtxosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':asset'].utxos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsAssetUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetUtxosQueryKey>
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
    return { ...getAssetsAssetUtxosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsPolicyPolicyIdQueryKey(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
) {
  return ['assets', '/assets/policy/:policy_id', args] as const
}

export function getAssetsPolicyPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsPolicyPolicyIdQueryKey>
  >({
    queryKey: getAssetsPolicyPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets.policy[':policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsPolicyPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsPolicyPolicyIdQueryKey>
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
      ...getAssetsPolicyPolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsQueryKey(args: InferRequestType<typeof client.scripts.$get>) {
  return ['scripts', '/scripts', args] as const
}

export function getScriptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scripts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScriptsQueryKey>
  >({
    queryKey: getScriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scripts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsQueryKey>
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
    return { ...getScriptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScriptsScriptHashQueryKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash', args] as const
}

export function getScriptsScriptHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashQueryKey>
  >({
    queryKey: getScriptsScriptHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':script_hash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsScriptHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':script_hash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsScriptHashQueryKey>
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
    return { ...getScriptsScriptHashQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScriptsScriptHashJsonQueryKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/json', args] as const
}

export function getScriptsScriptHashJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashJsonQueryKey>
  >({
    queryKey: getScriptsScriptHashJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':script_hash'].json.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsScriptHashJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsScriptHashJsonQueryKey>
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
      ...getScriptsScriptHashJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsScriptHashCborQueryKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/cbor', args] as const
}

export function getScriptsScriptHashCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashCborQueryKey>
  >({
    queryKey: getScriptsScriptHashCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':script_hash'].cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsScriptHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsScriptHashCborQueryKey>
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
      ...getScriptsScriptHashCborQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsScriptHashRedeemersQueryKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/redeemers', args] as const
}

export function getScriptsScriptHashRedeemersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashRedeemersQueryKey>
  >({
    queryKey: getScriptsScriptHashRedeemersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':script_hash'].redeemers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsScriptHashRedeemers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsScriptHashRedeemersQueryKey>
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
      ...getScriptsScriptHashRedeemersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsScriptHashUtxosQueryKey(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
) {
  return ['scripts', '/scripts/:script_hash/utxos', args] as const
}

export function getScriptsScriptHashUtxosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashUtxosQueryKey>
  >({
    queryKey: getScriptsScriptHashUtxosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts[':script_hash'].utxos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsScriptHashUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsScriptHashUtxosQueryKey>
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
      ...getScriptsScriptHashUtxosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsDatumDatumHashQueryKey(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
) {
  return ['scripts', '/scripts/datum/:datum_hash', args] as const
}

export function getScriptsDatumDatumHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsDatumDatumHashQueryKey>
  >({
    queryKey: getScriptsDatumDatumHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.datum[':datum_hash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsDatumDatumHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsDatumDatumHashQueryKey>
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
      ...getScriptsDatumDatumHashQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsDatumDatumHashCborQueryKey(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
) {
  return ['scripts', '/scripts/datum/:datum_hash/cbor', args] as const
}

export function getScriptsDatumDatumHashCborQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsDatumDatumHashCborQueryKey>
  >({
    queryKey: getScriptsDatumDatumHashCborQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.datum[':datum_hash'].cbor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsDatumDatumHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScriptsDatumDatumHashCborQueryKey>
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
      ...getScriptsDatumDatumHashCborQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUtilsAddressesXpubXpubRoleIndexQueryKey(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
) {
  return ['utils', '/utils/addresses/xpub/:xpub/:role/:index', args] as const
}

export function getUtilsAddressesXpubXpubRoleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUtilsAddressesXpubXpubRoleIndexQueryKey>
  >({
    queryKey: getUtilsAddressesXpubXpubRoleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUtilsAddressesXpubXpubRoleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUtilsAddressesXpubXpubRoleIndexQueryKey>
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
      ...getUtilsAddressesXpubXpubRoleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUtilsTxsEvaluateMutationKey() {
  return ['utils', '/utils/txs/evaluate', 'POST'] as const
}

export function getPostUtilsTxsEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.utils.txs.evaluate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsTxsEvaluateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.utils.txs.evaluate.$post>) {
      return parseResponse(client.utils.txs.evaluate.$post(args, options))
    },
  })
}

export function createPostUtilsTxsEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.utils.txs.evaluate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUtilsTxsEvaluateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUtilsTxsEvaluateUtxosMutationKey() {
  return ['utils', '/utils/txs/evaluate/utxos', 'POST'] as const
}

export function getPostUtilsTxsEvaluateUtxosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.utxos.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.utils.txs.evaluate.utxos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsTxsEvaluateUtxosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.utils.txs.evaluate.utxos.$post>) {
      return parseResponse(client.utils.txs.evaluate.utxos.$post(args, options))
    },
  })
}

export function createPostUtilsTxsEvaluateUtxos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.utils.txs.evaluate.utxos.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.utils.txs.evaluate.utxos.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUtilsTxsEvaluateUtxosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpfsAddMutationKey() {
  return ['ipfs', '/ipfs/add', 'POST'] as const
}

export function getPostIpfsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.ipfs.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpfsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ipfs.add.$post>) {
      return parseResponse(client.ipfs.add.$post(args, options))
    },
  })
}

export function createPostIpfsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ipfs.add.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpfsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpfsGatewayIPFSPathQueryKey(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
) {
  return ['ipfs', '/ipfs/gateway/:IPFS_path', args] as const
}

export function getIpfsGatewayIPFSPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpfsGatewayIPFSPathQueryKey>
  >({
    queryKey: getIpfsGatewayIPFSPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipfs.gateway[':IPFS_path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpfsGatewayIPFSPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpfsGatewayIPFSPathQueryKey>
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
    return { ...getIpfsGatewayIPFSPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIpfsPinAddIPFSPathMutationKey() {
  return ['ipfs', '/ipfs/pin/add/:IPFS_path', 'POST'] as const
}

export function getPostIpfsPinAddIPFSPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpfsPinAddIPFSPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>) {
      return parseResponse(client.ipfs.pin.add[':IPFS_path'].$post(args, options))
    },
  })
}

export function createPostIpfsPinAddIPFSPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipfs.pin.add)[':IPFS_path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpfsPinAddIPFSPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpfsPinListQueryKey(args: InferRequestType<typeof client.ipfs.pin.list.$get>) {
  return ['ipfs', '/ipfs/pin/list', args] as const
}

export function getIpfsPinListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipfs.pin.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpfsPinListQueryKey>
  >({
    queryKey: getIpfsPinListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipfs.pin.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpfsPinList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipfs.pin.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getIpfsPinListQueryKey>
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
    return { ...getIpfsPinListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpfsPinListIPFSPathQueryKey(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
) {
  return ['ipfs', '/ipfs/pin/list/:IPFS_path', args] as const
}

export function getIpfsPinListIPFSPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpfsPinListIPFSPathQueryKey>
  >({
    queryKey: getIpfsPinListIPFSPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipfs.pin.list[':IPFS_path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpfsPinListIPFSPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpfsPinListIPFSPathQueryKey>
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
    return { ...getIpfsPinListIPFSPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIpfsPinRemoveIPFSPathMutationKey() {
  return ['ipfs', '/ipfs/pin/remove/:IPFS_path', 'POST'] as const
}

export function getPostIpfsPinRemoveIPFSPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpfsPinRemoveIPFSPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>,
    ) {
      return parseResponse(client.ipfs.pin.remove[':IPFS_path'].$post(args, options))
    },
  })
}

export function createPostIpfsPinRemoveIPFSPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ipfs.pin.remove)[':IPFS_path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIpfsPinRemoveIPFSPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsQueryKey>
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
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMetricsEndpointsQueryKey() {
  return ['metrics', '/metrics/endpoints'] as const
}

export function getMetricsEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsEndpointsQueryKey>
  >({
    queryKey: getMetricsEndpointsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.endpoints.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricsEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsEndpointsQueryKey>
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
    return { ...getMetricsEndpointsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNetworkQueryKey() {
  return ['network', '/network'] as const
}

export function getNetworkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkQueryKey>
  >({
    queryKey: getNetworkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.network.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNetworkQueryKey>
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
    return { ...getNetworkQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNetworkErasQueryKey() {
  return ['network', '/network/eras'] as const
}

export function getNetworkErasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkErasQueryKey>
  >({
    queryKey: getNetworkErasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.network.eras.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNetworkEras<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNetworkErasQueryKey>
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
    return { ...getNetworkErasQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
