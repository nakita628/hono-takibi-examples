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

export function getApiKey() {
  return ['api'] as const
}

export function getWebsocketKey() {
  return ['websocket'] as const
}

export function getApiStatusQueryKey() {
  return ['api', '/api/status'] as const
}

export function getApiStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
          >,
          ReturnType<typeof getApiStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiIndexQueryKey() {
  return ['api', '/api/'] as const
}

export function getApiIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
          >,
          ReturnType<typeof getApiIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BlockIndexHeightQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>
  >,
) {
  return ['api', '/api/v2/block-index/:height', toValue(args)] as const
}

export function getApiV2BlockIndexHeightQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BlockIndexHeightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['block-index'][':height'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BlockIndexHeight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BlockIndexHeightQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BlockIndexHeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BlockIndexHeightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['block-index'][':height'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BlockBlockIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>>,
) {
  return ['api', '/api/v2/block/:blockId', toValue(args)] as const
}

export function getApiV2BlockBlockIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BlockBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.block[':blockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BlockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BlockBlockIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BlockBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BlockBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.block[':blockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2RawblockBlockIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>,
) {
  return ['api', '/api/v2/rawblock/:blockId', toValue(args)] as const
}

export function getApiV2RawblockBlockIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2RawblockBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.rawblock[':blockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2RawblockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2RawblockBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2RawblockBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2RawblockBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.rawblock[':blockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BlockFiltersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/block-filters/', toValue(args)] as const
}

export function getApiV2BlockFiltersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BlockFiltersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['block-filters'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BlockFiltersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BlockFiltersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BlockFiltersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BlockFiltersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['block-filters'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>>,
) {
  return ['api', '/api/v2/tx/:txid', toValue(args)] as const
}

export function getApiV2TxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.tx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV2TxTxidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.tx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TxSpecificTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>,
) {
  return ['api', '/api/v2/tx-specific/:txid', toValue(args)] as const
}

export function getApiV2TxSpecificTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TxSpecificTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['tx-specific'][':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TxSpecificTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TxSpecificTxidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TxSpecificTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TxSpecificTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['tx-specific'][':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRawtxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>>,
) {
  return ['api', '/api/rawtx/:txid', toValue(args)] as const
}

export function getApiRawtxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRawtxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rawtx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRawtxTxidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRawtxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRawtxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rawtx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SendtxHexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>>,
) {
  return ['api', '/api/v2/sendtx/:hex', toValue(args)] as const
}

export function getApiV2SendtxHexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SendtxHexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.sendtx[':hex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SendtxHex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2SendtxHexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SendtxHexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SendtxHexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.sendtx[':hex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2SendtxIndexMutationKey() {
  return ['api', '/api/v2/sendtx/', 'POST'] as const
}

export function getPostApiV2SendtxIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.sendtx.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.sendtx.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2SendtxIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.sendtx.index.$post>) {
      return parseResponse(client.api.v2.sendtx.index.$post(args, options))
    },
  })
}

export function usePostApiV2SendtxIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.sendtx.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.sendtx.index.$post>,
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
  const mutationDefaults = getPostApiV2SendtxIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2AddressAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.address)[':address']['$get']>>,
) {
  return ['api', '/api/v2/address/:address', toValue(args)] as const
}

export function getApiV2AddressAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.address)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AddressAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.address[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AddressAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.address)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AddressAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AddressAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AddressAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.address[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2XpubXpubQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>>,
) {
  return ['api', '/api/v2/xpub/:xpub', toValue(args)] as const
}

export function getApiV2XpubXpubQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2XpubXpubQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.xpub[':xpub'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2XpubXpub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2XpubXpubQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2XpubXpubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2XpubXpubQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.xpub[':xpub'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UtxoDescriptorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>,
) {
  return ['api', '/api/v2/utxo/:descriptor', toValue(args)] as const
}

export function getApiV2UtxoDescriptorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UtxoDescriptorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.utxo[':descriptor'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UtxoDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UtxoDescriptorQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UtxoDescriptorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UtxoDescriptorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.utxo[':descriptor'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BalancehistoryDescriptorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>
  >,
) {
  return ['api', '/api/v2/balancehistory/:descriptor', toValue(args)] as const
}

export function getApiV2BalancehistoryDescriptorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BalancehistoryDescriptorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.balancehistory[':descriptor'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BalancehistoryDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2BalancehistoryDescriptorQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BalancehistoryDescriptorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BalancehistoryDescriptorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.balancehistory[':descriptor'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContractContractQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>>,
) {
  return ['api', '/api/v2/contract/:contract', toValue(args)] as const
}

export function getApiV2ContractContractQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContractContractQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.contract[':contract'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ContractContract<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ContractContractQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContractContractQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContractContractQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.contract[':contract'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EstimatefeeBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>,
) {
  return ['api', '/api/v2/estimatefee/:blocks', toValue(args)] as const
}

export function getApiV2EstimatefeeBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EstimatefeeBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.estimatefee[':blocks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EstimatefeeBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EstimatefeeBlocksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EstimatefeeBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EstimatefeeBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.estimatefee[':blocks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2FeestatsBlockIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>>,
) {
  return ['api', '/api/v2/feestats/:blockId', toValue(args)] as const
}

export function getApiV2FeestatsBlockIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2FeestatsBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.feestats[':blockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2FeestatsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2FeestatsBlockIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FeestatsBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2FeestatsBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.feestats[':blockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TickersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tickers.index.$get>>,
) {
  return ['api', '/api/v2/tickers/', toValue(args)] as const
}

export function getApiV2TickersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tickers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TickersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.tickers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TickersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tickers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV2TickersIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TickersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TickersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.tickers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2MultiTickersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>
  >,
) {
  return ['api', '/api/v2/multi-tickers/', toValue(args)] as const
}

export function getApiV2MultiTickersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2MultiTickersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['multi-tickers'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2MultiTickersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2MultiTickersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2MultiTickersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2MultiTickersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['multi-tickers'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TickersListIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>>,
) {
  return ['api', '/api/v2/tickers-list/', toValue(args)] as const
}

export function getApiV2TickersListIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TickersListIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['tickers-list'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2TickersListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2TickersListIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TickersListIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TickersListIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['tickers-list'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BlockIndexHeightQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>
  >,
) {
  return ['api', '/api/v1/block-index/:height', toValue(args)] as const
}

export function getApiV1BlockIndexHeightQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BlockIndexHeightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['block-index'][':height'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BlockIndexHeight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BlockIndexHeightQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlockIndexHeightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BlockIndexHeightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['block-index'][':height'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>>,
) {
  return ['api', '/api/v1/tx/:txid', toValue(args)] as const
}

export function getApiV1TxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TxTxidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AddressAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.address)[':address']['$get']>>,
) {
  return ['api', '/api/v1/address/:address', toValue(args)] as const
}

export function getApiV1AddressAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.address)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AddressAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.address[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AddressAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.address)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AddressAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AddressAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AddressAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.address[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UtxoAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>>,
) {
  return ['api', '/api/v1/utxo/:address', toValue(args)] as const
}

export function getApiV1UtxoAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UtxoAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.utxo[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UtxoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UtxoAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UtxoAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UtxoAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.utxo[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BlockBlockIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>>,
) {
  return ['api', '/api/v1/block/:blockId', toValue(args)] as const
}

export function getApiV1BlockBlockIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BlockBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.block[':blockId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BlockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BlockBlockIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlockBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BlockBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.block[':blockId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EstimatefeeBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>,
) {
  return ['api', '/api/v1/estimatefee/:blocks', toValue(args)] as const
}

export function getApiV1EstimatefeeBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EstimatefeeBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.estimatefee[':blocks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EstimatefeeBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EstimatefeeBlocksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EstimatefeeBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EstimatefeeBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.estimatefee[':blocks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SendtxHexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>>,
) {
  return ['api', '/api/v1/sendtx/:hex', toValue(args)] as const
}

export function getApiV1SendtxHexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SendtxHexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sendtx[':hex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SendtxHex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SendtxHexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SendtxHexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SendtxHexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sendtx[':hex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SendtxIndexMutationKey() {
  return ['api', '/api/v1/sendtx/', 'POST'] as const
}

export function getPostApiV1SendtxIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sendtx.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.sendtx.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SendtxIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sendtx.index.$post>) {
      return parseResponse(client.api.v1.sendtx.index.$post(args, options))
    },
  })
}

export function usePostApiV1SendtxIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sendtx.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.sendtx.index.$post>,
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
  const mutationDefaults = getPostApiV1SendtxIndexMutationOptions<TError, TOnMutateResult>(
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

export function getWebsocketQueryKey() {
  return ['websocket', '/websocket'] as const
}

export function getWebsocketQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebsocketQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.websocket.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebsocket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
          >,
          ReturnType<typeof getWebsocketQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebsocketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebsocketQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.websocket.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
