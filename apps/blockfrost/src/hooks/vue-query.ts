import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthClockQueryKey() {
  return ['health', '/health/clock'] as const
}

export function getHealthClockQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthClockQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthClock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>
          >,
          ReturnType<typeof getHealthClockQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthClockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthClockQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.clock.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksLatestQueryKey() {
  return ['blocks', '/blocks/latest'] as const
}

export function getBlocksLatestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBlocksLatestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlocksLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
          >,
          ReturnType<typeof getBlocksLatestQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBlocksLatestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks.latest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksLatestTxsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.$get>>,
) {
  return ['blocks', '/blocks/latest/txs', toValue(args)] as const
}

export function getBlocksLatestTxsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksLatestTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks.latest.txs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksLatestTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>
            >
          >,
          ReturnType<typeof getBlocksLatestTxsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestTxsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksLatestTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks.latest.txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksLatestTxsCborQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.cbor.$get>>,
) {
  return ['blocks', '/blocks/latest/txs/cbor', toValue(args)] as const
}

export function getBlocksLatestTxsCborQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.cbor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksLatestTxsCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks.latest.txs.cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksLatestTxsCbor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocks.latest.txs.cbor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
            >
          >,
          ReturnType<typeof getBlocksLatestTxsCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.blocks.latest.txs.cbor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksLatestTxsCborQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksLatestTxsCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks.latest.txs.cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>>,
) {
  return ['blocks', '/blocks/:hash_or_number', toValue(args)] as const
}

export function getBlocksHashOrNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks)[':hash_or_number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocksHashOrNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>
  >,
) {
  return ['blocks', '/blocks/:hash_or_number/next', toValue(args)] as const
}

export function getBlocksHashOrNumberNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumberNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['next']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['next']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberNextQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberPreviousQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>
  >,
) {
  return ['blocks', '/blocks/:hash_or_number/previous', toValue(args)] as const
}

export function getBlocksHashOrNumberPreviousQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberPreviousQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].previous.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumberPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['previous']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberPreviousQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberPreviousQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].previous.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksSlotSlotNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>>,
) {
  return ['blocks', '/blocks/slot/:slot_number', toValue(args)] as const
}

export function getBlocksSlotSlotNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksSlotSlotNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks.slot[':slot_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksSlotSlotNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocks.slot)[':slot_number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks.slot)[':slot_number']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksSlotSlotNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksSlotSlotNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks.slot[':slot_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksEpochEpochNumberSlotSlotNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']>
  >,
) {
  return ['blocks', '/blocks/epoch/:epoch_number/slot/:slot_number', toValue(args)] as const
}

export function getBlocksEpochEpochNumberSlotSlotNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksEpochEpochNumberSlotSlotNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksEpochEpochNumberSlotSlotNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks.epoch)[':epoch_number']['slot'][':slot_number']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getBlocksEpochEpochNumberSlotSlotNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksEpochEpochNumberSlotSlotNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks.epoch[':epoch_number'].slot[':slot_number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberTxsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>
  >,
) {
  return ['blocks', '/blocks/:hash_or_number/txs', toValue(args)] as const
}

export function getBlocksHashOrNumberTxsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].txs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumberTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberTxsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberTxsCborQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>
  >,
) {
  return ['blocks', '/blocks/:hash_or_number/txs/cbor', toValue(args)] as const
}

export function getBlocksHashOrNumberTxsCborQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberTxsCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].txs.cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumberTxsCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.blocks)[':hash_or_number']['txs']['cbor']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberTxsCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberTxsCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].txs.cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlocksHashOrNumberAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>
  >,
) {
  return ['blocks', '/blocks/:hash_or_number/addresses', toValue(args)] as const
}

export function getBlocksHashOrNumberAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocksHashOrNumberAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocks[':hash_or_number'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocksHashOrNumberAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocks)[':hash_or_number']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlocksHashOrNumberAddressesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocksHashOrNumberAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocks[':hash_or_number'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesisQueryKey() {
  return ['genesis', '/genesis'] as const
}

export function getGenesisQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGenesisQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genesis.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenesis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>
          >,
          ReturnType<typeof getGenesisQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genesis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenesisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGenesisQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.genesis.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceCommitteeQueryKey() {
  return ['governance', '/governance/committee'] as const
}

export function getGovernanceCommitteeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGovernanceCommitteeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.committee.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>
            >
          >,
          ReturnType<typeof getGovernanceCommitteeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceCommitteeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGovernanceCommitteeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.committee.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceCommitteeVotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.committee.votes.$get>>,
) {
  return ['governance', '/governance/committee/votes', toValue(args)] as const
}

export function getGovernanceCommitteeVotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.committee.votes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceCommitteeVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.committee.votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceCommitteeVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.committee.votes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.governance.committee.votes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.governance.committee.votes.$get>>
              >
            >
          >,
          ReturnType<typeof getGovernanceCommitteeVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.governance.committee.votes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceCommitteeVotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceCommitteeVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.committee.votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceCommitteeCcIdVotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>
  >,
) {
  return ['governance', '/governance/committee/:cc_id/votes', toValue(args)] as const
}

export function getGovernanceCommitteeCcIdVotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceCommitteeCcIdVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.committee[':cc_id'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceCommitteeCcIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.committee)[':cc_id']['votes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovernanceCommitteeCcIdVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceCommitteeCcIdVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.committee[':cc_id'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.dreps.$get>>,
) {
  return ['governance', '/governance/dreps', toValue(args)] as const
}

export function getGovernanceDrepsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.dreps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDreps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.dreps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>
            >
          >,
          ReturnType<typeof getGovernanceDrepsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.dreps.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceDrepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsDrepIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>>,
) {
  return ['governance', '/governance/dreps/:drep_id', toValue(args)] as const
}

export function getGovernanceDrepsDrepIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsDrepIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps[':drep_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDrepsDrepId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.governance.dreps)[':drep_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovernanceDrepsDrepIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsDrepIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps[':drep_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsDrepIdDelegatorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>
  >,
) {
  return ['governance', '/governance/dreps/:drep_id/delegators', toValue(args)] as const
}

export function getGovernanceDrepsDrepIdDelegatorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsDrepIdDelegatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps[':drep_id'].delegators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDrepsDrepIdDelegators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.governance.dreps)[':drep_id']['delegators']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGovernanceDrepsDrepIdDelegatorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsDrepIdDelegatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps[':drep_id'].delegators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsDrepIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>
  >,
) {
  return ['governance', '/governance/dreps/:drep_id/metadata', toValue(args)] as const
}

export function getGovernanceDrepsDrepIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsDrepIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps[':drep_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDrepsDrepIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.governance.dreps)[':drep_id']['metadata']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGovernanceDrepsDrepIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsDrepIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps[':drep_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsDrepIdUpdatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>
  >,
) {
  return ['governance', '/governance/dreps/:drep_id/updates', toValue(args)] as const
}

export function getGovernanceDrepsDrepIdUpdatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsDrepIdUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps[':drep_id'].updates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDrepsDrepIdUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['updates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovernanceDrepsDrepIdUpdatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsDrepIdUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps[':drep_id'].updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceDrepsDrepIdVotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>
  >,
) {
  return ['governance', '/governance/dreps/:drep_id/votes', toValue(args)] as const
}

export function getGovernanceDrepsDrepIdVotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceDrepsDrepIdVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.dreps[':drep_id'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceDrepsDrepIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.dreps)[':drep_id']['votes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovernanceDrepsDrepIdVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceDrepsDrepIdVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.dreps[':drep_id'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.proposals.$get>>,
) {
  return ['governance', '/governance/proposals', toValue(args)] as const
}

export function getGovernanceProposalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.proposals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.governance.proposals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>
            >
          >,
          ReturnType<typeof getGovernanceProposalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.governance.proposals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGovernanceProposalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsTxHashCertIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index', toValue(args)] as const
}

export function getGovernanceProposalsTxHashCertIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsTxHashCertIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsTxHashCertIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':tx_hash'][':cert_index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsTxHashCertIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsTxHashCertIndexParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
    >
  >,
) {
  return [
    'governance',
    '/governance/proposals/:tx_hash/:cert_index/parameters',
    toValue(args),
  ] as const
}

export function getGovernanceProposalsTxHashCertIndexParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsTxHashCertIndexParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsTxHashCertIndexParameters<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['parameters']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsTxHashCertIndexParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
    >
  >,
) {
  return [
    'governance',
    '/governance/proposals/:tx_hash/:cert_index/withdrawals',
    toValue(args),
  ] as const
}

export function getGovernanceProposalsTxHashCertIndexWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsTxHashCertIndexWithdrawals<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['withdrawals']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsTxHashCertIndexWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsTxHashCertIndexVotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
    >
  >,
) {
  return ['governance', '/governance/proposals/:tx_hash/:cert_index/votes', toValue(args)] as const
}

export function getGovernanceProposalsTxHashCertIndexVotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsTxHashCertIndexVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsTxHashCertIndexVotes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['votes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsTxHashCertIndexVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsTxHashCertIndexMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
    >
  >,
) {
  return [
    'governance',
    '/governance/proposals/:tx_hash/:cert_index/metadata',
    toValue(args),
  ] as const
}

export function getGovernanceProposalsTxHashCertIndexMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsTxHashCertIndexMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsTxHashCertIndexMetadata<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.governance.proposals)[':tx_hash'][':cert_index']['metadata']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsTxHashCertIndexMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsTxHashCertIndexMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':tx_hash'][':cert_index'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsGovActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id', toValue(args)] as const
}

export function getGovernanceProposalsGovActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsGovActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsGovActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGovernanceProposalsGovActionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsGovActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':gov_action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsGovActionIdParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/parameters', toValue(args)] as const
}

export function getGovernanceProposalsGovActionIdParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsGovActionIdParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsGovActionIdParameters<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['parameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsGovActionIdParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsGovActionIdParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':gov_action_id'].parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsGovActionIdWithdrawalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/withdrawals', toValue(args)] as const
}

export function getGovernanceProposalsGovActionIdWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsGovActionIdWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsGovActionIdWithdrawals<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['withdrawals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsGovActionIdWithdrawalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsGovActionIdWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':gov_action_id'].withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsGovActionIdVotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/votes', toValue(args)] as const
}

export function getGovernanceProposalsGovActionIdVotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsGovActionIdVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsGovActionIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['votes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsGovActionIdVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsGovActionIdVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':gov_action_id'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGovernanceProposalsGovActionIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
  >,
) {
  return ['governance', '/governance/proposals/:gov_action_id/metadata', toValue(args)] as const
}

export function getGovernanceProposalsGovActionIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGovernanceProposalsGovActionIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.governance.proposals[':gov_action_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGovernanceProposalsGovActionIdMetadata<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.governance.proposals)[':gov_action_id']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getGovernanceProposalsGovActionIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGovernanceProposalsGovActionIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.governance.proposals[':gov_action_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsLatestQueryKey() {
  return ['epochs', '/epochs/latest'] as const
}

export function getEpochsLatestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEpochsLatestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs.latest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEpochsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
          >,
          ReturnType<typeof getEpochsLatestQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEpochsLatestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs.latest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsLatestParametersQueryKey() {
  return ['epochs', '/epochs/latest/parameters'] as const
}

export function getEpochsLatestParametersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEpochsLatestParametersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs.latest.parameters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsLatestParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
            >
          >,
          ReturnType<typeof getEpochsLatestParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.epochs.latest.parameters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsLatestParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEpochsLatestParametersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs.latest.parameters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['$get']>>,
) {
  return ['epochs', '/epochs/:number', toValue(args)] as const
}

export function getEpochsNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
            >
          >,
          ReturnType<typeof getEpochsNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberNextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['next']['$get']>>,
) {
  return ['epochs', '/epochs/:number/next', toValue(args)] as const
}

export function getEpochsNumberNextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['next']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['next']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberNextQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEpochsNumberNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberPreviousQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>>,
) {
  return ['epochs', '/epochs/:number/previous', toValue(args)] as const
}

export function getEpochsNumberPreviousQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberPreviousQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].previous.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['previous']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['previous']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberPreviousQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberPreviousQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].previous.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberStakesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>>,
) {
  return ['epochs', '/epochs/:number/stakes', toValue(args)] as const
}

export function getEpochsNumberStakesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberStakesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].stakes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberStakes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['stakes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberStakesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberStakesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].stakes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberStakesPoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>
  >,
) {
  return ['epochs', '/epochs/:number/stakes/:pool_id', toValue(args)] as const
}

export function getEpochsNumberStakesPoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberStakesPoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].stakes[':pool_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberStakesPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['stakes'][':pool_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberStakesPoolIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberStakesPoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].stakes[':pool_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>>,
) {
  return ['epochs', '/epochs/:number/blocks', toValue(args)] as const
}

export function getEpochsNumberBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['blocks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberBlocksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberBlocksPoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>
  >,
) {
  return ['epochs', '/epochs/:number/blocks/:pool_id', toValue(args)] as const
}

export function getEpochsNumberBlocksPoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberBlocksPoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].blocks[':pool_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberBlocksPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['blocks'][':pool_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberBlocksPoolIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberBlocksPoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].blocks[':pool_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpochsNumberParametersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>>,
) {
  return ['epochs', '/epochs/:number/parameters', toValue(args)] as const
}

export function getEpochsNumberParametersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpochsNumberParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.epochs[':number'].parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpochsNumberParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.epochs)[':number']['parameters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.epochs)[':number']['parameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEpochsNumberParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpochsNumberParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.epochs[':number'].parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['$get']>>,
) {
  return ['txs', '/txs/:hash', toValue(args)] as const
}

export function getTxsHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTxsHash<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>
            >
          >,
          ReturnType<typeof getTxsHashQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashUtxosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>>,
) {
  return ['txs', '/txs/:hash/utxos', toValue(args)] as const
}

export function getTxsHashUtxosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashUtxosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].utxos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['utxos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashUtxosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['utxos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashUtxosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashUtxosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].utxos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashStakesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>>,
) {
  return ['txs', '/txs/:hash/stakes', toValue(args)] as const
}

export function getTxsHashStakesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashStakesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].stakes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashStakes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['stakes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashStakesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['stakes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashStakesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashStakesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].stakes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashDelegationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>>,
) {
  return ['txs', '/txs/:hash/delegations', toValue(args)] as const
}

export function getTxsHashDelegationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashDelegationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].delegations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashDelegations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['delegations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['delegations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashDelegationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashDelegationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].delegations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashWithdrawalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>>,
) {
  return ['txs', '/txs/:hash/withdrawals', toValue(args)] as const
}

export function getTxsHashWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['withdrawals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['withdrawals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashWithdrawalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashMirsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>>,
) {
  return ['txs', '/txs/:hash/mirs', toValue(args)] as const
}

export function getTxsHashMirsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashMirsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].mirs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashMirs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['mirs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashMirsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['mirs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashMirsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashMirsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].mirs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashPoolUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>>,
) {
  return ['txs', '/txs/:hash/pool_updates', toValue(args)] as const
}

export function getTxsHashPoolUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashPoolUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].pool_updates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashPoolUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_updates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_updates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashPoolUpdatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashPoolUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].pool_updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashPoolRetiresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>>,
) {
  return ['txs', '/txs/:hash/pool_retires', toValue(args)] as const
}

export function getTxsHashPoolRetiresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashPoolRetiresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].pool_retires.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashPoolRetires<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['pool_retires']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['pool_retires']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashPoolRetiresQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashPoolRetiresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].pool_retires.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>>,
) {
  return ['txs', '/txs/:hash/metadata', toValue(args)] as const
}

export function getTxsHashMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashMetadataCborQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>
  >,
) {
  return ['txs', '/txs/:hash/metadata/cbor', toValue(args)] as const
}

export function getTxsHashMetadataCborQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashMetadataCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].metadata.cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashMetadataCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['metadata']['cbor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashMetadataCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashMetadataCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].metadata.cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashRedeemersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>>,
) {
  return ['txs', '/txs/:hash/redeemers', toValue(args)] as const
}

export function getTxsHashRedeemersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashRedeemersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].redeemers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashRedeemers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['redeemers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashRedeemersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['redeemers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashRedeemersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashRedeemersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].redeemers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashRequiredSignersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>
  >,
) {
  return ['txs', '/txs/:hash/required_signers', toValue(args)] as const
}

export function getTxsHashRequiredSignersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashRequiredSignersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].required_signers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashRequiredSigners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.txs)[':hash']['required_signers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['required_signers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashRequiredSignersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashRequiredSignersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].required_signers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTxsHashCborQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>>,
) {
  return ['txs', '/txs/:hash/cbor', toValue(args)] as const
}

export function getTxsHashCborQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTxsHashCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.txs[':hash'].cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTxsHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.txs)[':hash']['cbor']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTxsHashCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.txs)[':hash']['cbor']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTxsHashCborQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTxsHashCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.txs[':hash'].cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTxSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.submit.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tx.submit.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTxSubmitMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsStakeAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':stake_address']['$get']>>,
) {
  return ['accounts', '/accounts/:stake_address', toValue(args)] as const
}

export function getAccountsStakeAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':stake_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':stake_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressRewardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/rewards', toValue(args)] as const
}

export function getAccountsStakeAddressRewardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressRewardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].rewards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressRewards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['rewards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['rewards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressRewardsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressRewardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].rewards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/history', toValue(args)] as const
}

export function getAccountsStakeAddressHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressDelegationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/delegations', toValue(args)] as const
}

export function getAccountsStakeAddressDelegationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressDelegationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].delegations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressDelegations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['delegations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['delegations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressDelegationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressDelegationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].delegations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressRegistrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/registrations', toValue(args)] as const
}

export function getAccountsStakeAddressRegistrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressRegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].registrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['registrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['registrations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressRegistrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressRegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].registrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressWithdrawalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/withdrawals', toValue(args)] as const
}

export function getAccountsStakeAddressWithdrawalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressWithdrawalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].withdrawals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressWithdrawals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['withdrawals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressWithdrawalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressWithdrawalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].withdrawals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressMirsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/mirs', toValue(args)] as const
}

export function getAccountsStakeAddressMirsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressMirsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].mirs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressMirs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['mirs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['mirs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressMirsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressMirsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].mirs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/addresses', toValue(args)] as const
}

export function getAccountsStakeAddressAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressAddressesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressAddressesAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/addresses/assets', toValue(args)] as const
}

export function getAccountsStakeAddressAddressesAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressAddressesAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressAddressesAssets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAccountsStakeAddressAddressesAssetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressAddressesAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].addresses.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressAddressesTotalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/addresses/total', toValue(args)] as const
}

export function getAccountsStakeAddressAddressesTotalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressAddressesTotalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].addresses.total.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressAddressesTotal<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['addresses']['total']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAccountsStakeAddressAddressesTotalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressAddressesTotalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].addresses.total.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressUtxosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/utxos', toValue(args)] as const
}

export function getAccountsStakeAddressUtxosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressUtxosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].utxos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['utxos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':stake_address']['utxos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressUtxosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressUtxosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].utxos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsStakeAddressTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>
  >,
) {
  return ['accounts', '/accounts/:stake_address/transactions', toValue(args)] as const
}

export function getAccountsStakeAddressTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsStakeAddressTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':stake_address'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsStakeAddressTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':stake_address']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':stake_address']['transactions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsStakeAddressTransactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsStakeAddressTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':stake_address'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMempoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mempool.$get>>,
) {
  return ['mempool', '/mempool', toValue(args)] as const
}

export function getMempoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mempool.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMempoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mempool.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMempool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mempool.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>
          >,
          ReturnType<typeof getMempoolQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mempool.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMempoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMempoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mempool.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMempoolHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool)[':hash']['$get']>>,
) {
  return ['mempool', '/mempool/:hash', toValue(args)] as const
}

export function getMempoolHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool)[':hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMempoolHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mempool[':hash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMempoolHash<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool)[':hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
            >
          >,
          ReturnType<typeof getMempoolHashQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mempool)[':hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMempoolHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMempoolHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mempool[':hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMempoolAddressesAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>>,
) {
  return ['mempool', '/mempool/addresses/:address', toValue(args)] as const
}

export function getMempoolAddressesAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMempoolAddressesAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mempool.addresses[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMempoolAddressesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mempool.addresses)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mempool.addresses)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMempoolAddressesAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMempoolAddressesAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mempool.addresses[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTxsLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.txs.labels.$get>>,
) {
  return ['metadata', '/metadata/txs/labels', toValue(args)] as const
}

export function getMetadataTxsLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.txs.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTxsLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.txs.labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTxsLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.txs.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>
            >
          >,
          ReturnType<typeof getMetadataTxsLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.txs.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataTxsLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTxsLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.txs.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTxsLabelsLabelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>>,
) {
  return ['metadata', '/metadata/txs/labels/:label', toValue(args)] as const
}

export function getMetadataTxsLabelsLabelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTxsLabelsLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.txs.labels[':label'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTxsLabelsLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.metadata.txs.labels)[':label']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataTxsLabelsLabelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTxsLabelsLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.txs.labels[':label'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataTxsLabelsLabelCborQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>
  >,
) {
  return ['metadata', '/metadata/txs/labels/:label/cbor', toValue(args)] as const
}

export function getMetadataTxsLabelsLabelCborQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataTxsLabelsLabelCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.txs.labels[':label'].cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataTxsLabelsLabelCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.txs.labels)[':label']['cbor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataTxsLabelsLabelCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataTxsLabelsLabelCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.txs.labels[':label'].cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['$get']>>,
) {
  return ['addresses', '/addresses/:address', toValue(args)] as const
}

export function getAddressesAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.addresses)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressExtendedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>
  >,
) {
  return ['addresses', '/addresses/:address/extended', toValue(args)] as const
}

export function getAddressesAddressExtendedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressExtendedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].extended.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressExtended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['extended']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['extended']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressExtendedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressExtendedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].extended.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressTotalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['total']['$get']>>,
) {
  return ['addresses', '/addresses/:address/total', toValue(args)] as const
}

export function getAddressesAddressTotalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['total']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressTotalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].total.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressTotal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['total']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['total']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressTotalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressTotalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].total.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressUtxosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>>,
) {
  return ['addresses', '/addresses/:address/utxos', toValue(args)] as const
}

export function getAddressesAddressUtxosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressUtxosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].utxos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['utxos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['utxos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressUtxosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressUtxosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].utxos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressUtxosAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>
  >,
) {
  return ['addresses', '/addresses/:address/utxos/:asset', toValue(args)] as const
}

export function getAddressesAddressUtxosAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressUtxosAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].utxos[':asset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressUtxosAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.addresses)[':address']['utxos'][':asset']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAddressesAddressUtxosAssetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressUtxosAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].utxos[':asset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressTxsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>>,
) {
  return ['addresses', '/addresses/:address/txs', toValue(args)] as const
}

export function getAddressesAddressTxsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].txs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addresses)[':address']['txs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['txs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressTxsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddressesAddressTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>
  >,
) {
  return ['addresses', '/addresses/:address/transactions', toValue(args)] as const
}

export function getAddressesAddressTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesAddressTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses[':address'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddressesAddressTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addresses)[':address']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddressesAddressTransactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesAddressTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses[':address'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
) {
  return ['pools', '/pools', toValue(args)] as const
}

export function getPoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
          ReturnType<typeof getPoolsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsExtendedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.extended.$get>>,
) {
  return ['pools', '/pools/extended', toValue(args)] as const
}

export function getPoolsExtendedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.extended.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsExtendedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools.extended.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsExtended<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.extended.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
          >,
          ReturnType<typeof getPoolsExtendedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.extended.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsExtendedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsExtendedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools.extended.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsRetiredQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retired.$get>>,
) {
  return ['pools', '/pools/retired', toValue(args)] as const
}

export function getPoolsRetiredQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retired.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsRetiredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools.retired.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsRetired<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retired.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
          >,
          ReturnType<typeof getPoolsRetiredQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retired.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsRetiredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsRetiredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools.retired.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsRetiringQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retiring.$get>>,
) {
  return ['pools', '/pools/retiring', toValue(args)] as const
}

export function getPoolsRetiringQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retiring.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsRetiringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools.retiring.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsRetiring<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.retiring.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
          >,
          ReturnType<typeof getPoolsRetiringQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.retiring.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsRetiringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsRetiringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools.retiring.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['$get']>>,
) {
  return ['pools', '/pools/:pool_id', toValue(args)] as const
}

export function getPoolsPoolIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
            >
          >,
          ReturnType<typeof getPoolsPoolIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/history', toValue(args)] as const
}

export function getPoolsPoolIdHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/metadata', toValue(args)] as const
}

export function getPoolsPoolIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdRelaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/relays', toValue(args)] as const
}

export function getPoolsPoolIdRelaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdRelaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].relays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdRelays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['relays']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['relays']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdRelaysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdRelaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].relays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdDelegatorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/delegators', toValue(args)] as const
}

export function getPoolsPoolIdDelegatorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdDelegatorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].delegators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdDelegators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['delegators']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['delegators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdDelegatorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdDelegatorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].delegators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/blocks', toValue(args)] as const
}

export function getPoolsPoolIdBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['blocks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdBlocksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/updates', toValue(args)] as const
}

export function getPoolsPoolIdUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].updates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['updates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['updates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdUpdatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsPoolIdVotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>>,
) {
  return ['pools', '/pools/:pool_id/votes', toValue(args)] as const
}

export function getPoolsPoolIdVotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolIdVotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_id'].votes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolIdVotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_id']['votes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_id']['votes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoolsPoolIdVotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolIdVotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_id'].votes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
) {
  return ['assets', '/assets', toValue(args)] as const
}

export function getAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          ReturnType<typeof getAssetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['$get']>>,
) {
  return ['assets', '/assets/:asset', toValue(args)] as const
}

export function getAssetsAssetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAsset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetsAssetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['history']['$get']>>,
) {
  return ['assets', '/assets/:asset/history', toValue(args)] as const
}

export function getAssetsAssetHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetTxsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>>,
) {
  return ['assets', '/assets/:asset/txs', toValue(args)] as const
}

export function getAssetsAssetTxsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].txs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetTxs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['txs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetTxsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['txs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetTxsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>
  >,
) {
  return ['assets', '/assets/:asset/transactions', toValue(args)] as const
}

export function getAssetsAssetTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':asset']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetTransactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetAddressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>>,
) {
  return ['assets', '/assets/:asset/addresses', toValue(args)] as const
}

export function getAssetsAssetAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['addresses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetAddressesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetUtxosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>>,
) {
  return ['assets', '/assets/:asset/utxos', toValue(args)] as const
}

export function getAssetsAssetUtxosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetUtxosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':asset'].utxos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':asset']['utxos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetUtxosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':asset']['utxos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetUtxosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetUtxosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':asset'].utxos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsPolicyPolicyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>>,
) {
  return ['assets', '/assets/policy/:policy_id', toValue(args)] as const
}

export function getAssetsPolicyPolicyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsPolicyPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.policy[':policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsPolicyPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets.policy)[':policy_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets.policy)[':policy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsPolicyPolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsPolicyPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.policy[':policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
) {
  return ['scripts', '/scripts', toValue(args)] as const
}

export function getScriptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>
          >,
          ReturnType<typeof getScriptsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsScriptHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['$get']>>,
) {
  return ['scripts', '/scripts/:script_hash', toValue(args)] as const
}

export function getScriptsScriptHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':script_hash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptHashQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scripts)[':script_hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsScriptHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':script_hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsScriptHashJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>>,
) {
  return ['scripts', '/scripts/:script_hash/json', toValue(args)] as const
}

export function getScriptsScriptHashJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptHashJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':script_hash'].json.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptHashJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptHashJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptHashJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':script_hash'].json.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsScriptHashCborQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>,
) {
  return ['scripts', '/scripts/:script_hash/cbor', toValue(args)] as const
}

export function getScriptsScriptHashCborQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptHashCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':script_hash'].cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['cbor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptHashCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptHashCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':script_hash'].cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsScriptHashRedeemersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>
  >,
) {
  return ['scripts', '/scripts/:script_hash/redeemers', toValue(args)] as const
}

export function getScriptsScriptHashRedeemersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptHashRedeemersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':script_hash'].redeemers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptHashRedeemers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['redeemers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptHashRedeemersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptHashRedeemersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':script_hash'].redeemers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsScriptHashUtxosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>
  >,
) {
  return ['scripts', '/scripts/:script_hash/utxos', toValue(args)] as const
}

export function getScriptsScriptHashUtxosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsScriptHashUtxosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts[':script_hash'].utxos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsScriptHashUtxos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts)[':script_hash']['utxos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts)[':script_hash']['utxos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsScriptHashUtxosQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsScriptHashUtxosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts[':script_hash'].utxos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsDatumDatumHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>>,
) {
  return ['scripts', '/scripts/datum/:datum_hash', toValue(args)] as const
}

export function getScriptsDatumDatumHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsDatumDatumHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.datum[':datum_hash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsDatumDatumHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scripts.datum)[':datum_hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsDatumDatumHashQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsDatumDatumHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.datum[':datum_hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsDatumDatumHashCborQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>
  >,
) {
  return ['scripts', '/scripts/datum/:datum_hash/cbor', toValue(args)] as const
}

export function getScriptsDatumDatumHashCborQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsDatumDatumHashCborQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.datum[':datum_hash'].cbor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsDatumDatumHashCbor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.datum)[':datum_hash']['cbor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsDatumDatumHashCborQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsDatumDatumHashCborQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.datum[':datum_hash'].cbor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUtilsAddressesXpubXpubRoleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
  >,
) {
  return ['utils', '/utils/addresses/xpub/:xpub/:role/:index', toValue(args)] as const
}

export function getUtilsAddressesXpubXpubRoleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUtilsAddressesXpubXpubRoleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUtilsAddressesXpubXpubRoleIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.utils.addresses.xpub)[':xpub'][':role'][':index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getUtilsAddressesXpubXpubRoleIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUtilsAddressesXpubXpubRoleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.utils.addresses.xpub[':xpub'][':role'][':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUtilsTxsEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.utils.txs.evaluate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.utils.txs.evaluate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUtilsTxsEvaluateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUtilsTxsEvaluateUtxos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUtilsTxsEvaluateUtxosMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostIpfsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ipfs.add.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpfsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpfsGatewayIPFSPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>,
) {
  return ['ipfs', '/ipfs/gateway/:IPFS_path', toValue(args)] as const
}

export function getIpfsGatewayIPFSPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpfsGatewayIPFSPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipfs.gateway[':IPFS_path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpfsGatewayIPFSPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.gateway)[':IPFS_path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpfsGatewayIPFSPathQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpfsGatewayIPFSPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipfs.gateway[':IPFS_path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIpfsPinAddIPFSPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpfsPinAddIPFSPathMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpfsPinListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipfs.pin.list.$get>>,
) {
  return ['ipfs', '/ipfs/pin/list', toValue(args)] as const
}

export function getIpfsPinListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipfs.pin.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpfsPinListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipfs.pin.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpfsPinList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipfs.pin.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
          >,
          ReturnType<typeof getIpfsPinListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipfs.pin.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpfsPinListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpfsPinListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipfs.pin.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpfsPinListIPFSPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>,
) {
  return ['ipfs', '/ipfs/pin/list/:IPFS_path', toValue(args)] as const
}

export function getIpfsPinListIPFSPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpfsPinListIPFSPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipfs.pin.list[':IPFS_path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpfsPinListIPFSPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ipfs.pin.list)[':IPFS_path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpfsPinListIPFSPathQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpfsPinListIPFSPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipfs.pin.list[':IPFS_path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIpfsPinRemoveIPFSPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpfsPinRemoveIPFSPathMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsEndpointsQueryKey() {
  return ['metrics', '/metrics/endpoints'] as const
}

export function getMetricsEndpointsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsEndpointsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.endpoints.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>
            >
          >,
          ReturnType<typeof getMetricsEndpointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsEndpointsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.endpoints.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkQueryKey() {
  return ['network', '/network'] as const
}

export function getNetworkQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNetworkQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
          >,
          ReturnType<typeof getNetworkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNetworkQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.network.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkErasQueryKey() {
  return ['network', '/network/eras'] as const
}

export function getNetworkErasQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNetworkErasQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.eras.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworkEras<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>
          >,
          ReturnType<typeof getNetworkErasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.eras.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkErasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNetworkErasQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.network.eras.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
