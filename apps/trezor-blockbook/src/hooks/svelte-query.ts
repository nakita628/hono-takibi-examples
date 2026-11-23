import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getApiStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >({
    queryKey: getApiStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiIndexQueryKey() {
  return ['api', '/api/'] as const
}

export function getApiIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiIndexQueryKey>
  >({
    queryKey: getApiIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BlockIndexHeightQueryKey(
  args: InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>,
) {
  return ['api', '/api/v2/block-index/:height', args] as const
}

export function getApiV2BlockIndexHeightQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2BlockIndexHeightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['block-index'][':height'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BlockIndexHeight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['block-index'][':height']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2BlockIndexHeightQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BlockBlockIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>,
) {
  return ['api', '/api/v2/block/:blockId', args] as const
}

export function getApiV2BlockBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BlockBlockIdQueryKey>
  >({
    queryKey: getApiV2BlockBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.block[':blockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BlockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.block)[':blockId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.block)[':blockId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BlockBlockIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BlockBlockIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2RawblockBlockIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>,
) {
  return ['api', '/api/v2/rawblock/:blockId', args] as const
}

export function getApiV2RawblockBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2RawblockBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.rawblock[':blockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2RawblockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.rawblock)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.rawblock)[':blockId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2RawblockBlockIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BlockFiltersIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>,
) {
  return ['api', '/api/v2/block-filters/', args] as const
}

export function getApiV2BlockFiltersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2BlockFiltersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['block-filters'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BlockFiltersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['block-filters']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['block-filters']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2BlockFiltersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TxTxidQueryKey(
  args: InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>,
) {
  return ['api', '/api/v2/tx/:txid', args] as const
}

export function getApiV2TxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TxTxidQueryKey>
  >({
    queryKey: getApiV2TxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.tx[':txid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2TxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.tx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.tx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2TxSpecificTxidQueryKey(
  args: InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>,
) {
  return ['api', '/api/v2/tx-specific/:txid', args] as const
}

export function getApiV2TxSpecificTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2TxSpecificTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['tx-specific'][':txid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TxSpecificTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['tx-specific'][':txid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TxSpecificTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRawtxTxidQueryKey(
  args: InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>,
) {
  return ['api', '/api/rawtx/:txid', args] as const
}

export function getApiRawtxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRawtxTxidQueryKey>
  >({
    queryKey: getApiRawtxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rawtx[':txid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rawtx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.rawtx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRawtxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRawtxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2SendtxHexQueryKey(
  args: InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>,
) {
  return ['api', '/api/v2/sendtx/:hex', args] as const
}

export function getApiV2SendtxHexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SendtxHexQueryKey>
  >({
    queryKey: getApiV2SendtxHexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.sendtx[':hex'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2SendtxHex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.sendtx)[':hex']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.sendtx)[':hex']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2SendtxHexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2SendtxHexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV2SendtxIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.sendtx.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.sendtx.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2SendtxIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2AddressAddressQueryKey(
  args: InferRequestType<(typeof client.api.v2.address)[':address']['$get']>,
) {
  return ['api', '/api/v2/address/:address', args] as const
}

export function getApiV2AddressAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.address)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2AddressAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.address[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AddressAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.address)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AddressAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2XpubXpubQueryKey(
  args: InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>,
) {
  return ['api', '/api/v2/xpub/:xpub', args] as const
}

export function getApiV2XpubXpubQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2XpubXpubQueryKey>
  >({
    queryKey: getApiV2XpubXpubQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.xpub[':xpub'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2XpubXpub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.xpub)[':xpub']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.xpub)[':xpub']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2XpubXpubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2XpubXpubQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2UtxoDescriptorQueryKey(
  args: InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>,
) {
  return ['api', '/api/v2/utxo/:descriptor', args] as const
}

export function getApiV2UtxoDescriptorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2UtxoDescriptorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.utxo[':descriptor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2UtxoDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.utxo)[':descriptor']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.utxo)[':descriptor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UtxoDescriptorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BalancehistoryDescriptorQueryKey(
  args: InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>,
) {
  return ['api', '/api/v2/balancehistory/:descriptor', args] as const
}

export function getApiV2BalancehistoryDescriptorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2BalancehistoryDescriptorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.balancehistory[':descriptor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BalancehistoryDescriptor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.balancehistory)[':descriptor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2BalancehistoryDescriptorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ContractContractQueryKey(
  args: InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>,
) {
  return ['api', '/api/v2/contract/:contract', args] as const
}

export function getApiV2ContractContractQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2ContractContractQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.contract[':contract'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ContractContract<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.contract)[':contract']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.contract)[':contract']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2ContractContractQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EstimatefeeBlocksQueryKey(
  args: InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>,
) {
  return ['api', '/api/v2/estimatefee/:blocks', args] as const
}

export function getApiV2EstimatefeeBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2EstimatefeeBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.estimatefee[':blocks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EstimatefeeBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.estimatefee)[':blocks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2EstimatefeeBlocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2FeestatsBlockIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>,
) {
  return ['api', '/api/v2/feestats/:blockId', args] as const
}

export function getApiV2FeestatsBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2FeestatsBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.feestats[':blockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2FeestatsBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.feestats)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.feestats)[':blockId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2FeestatsBlockIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TickersIndexQueryKey(
  args: InferRequestType<typeof client.api.v2.tickers.index.$get>,
) {
  return ['api', '/api/v2/tickers/', args] as const
}

export function getApiV2TickersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.tickers.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2TickersIndexQueryKey>
  >({
    queryKey: getApiV2TickersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.tickers.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2TickersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.tickers.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tickers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TickersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TickersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2MultiTickersIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>,
) {
  return ['api', '/api/v2/multi-tickers/', args] as const
}

export function getApiV2MultiTickersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2MultiTickersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['multi-tickers'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2MultiTickersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['multi-tickers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['multi-tickers']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2MultiTickersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2TickersListIndexQueryKey(
  args: InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>,
) {
  return ['api', '/api/v2/tickers-list/', args] as const
}

export function getApiV2TickersListIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2TickersListIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['tickers-list'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2TickersListIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2)['tickers-list']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['tickers-list']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2TickersListIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1BlockIndexHeightQueryKey(
  args: InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>,
) {
  return ['api', '/api/v1/block-index/:height', args] as const
}

export function getApiV1BlockIndexHeightQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BlockIndexHeightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['block-index'][':height'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BlockIndexHeight<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['block-index'][':height']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['block-index'][':height']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BlockIndexHeightQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1TxTxidQueryKey(
  args: InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>,
) {
  return ['api', '/api/v1/tx/:txid', args] as const
}

export function getApiV1TxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TxTxidQueryKey>
  >({
    queryKey: getApiV1TxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tx[':txid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1TxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.tx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AddressAddressQueryKey(
  args: InferRequestType<(typeof client.api.v1.address)[':address']['$get']>,
) {
  return ['api', '/api/v1/address/:address', args] as const
}

export function getApiV1AddressAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.address)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1AddressAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.address[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AddressAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.address)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.address)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AddressAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1UtxoAddressQueryKey(
  args: InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>,
) {
  return ['api', '/api/v1/utxo/:address', args] as const
}

export function getApiV1UtxoAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UtxoAddressQueryKey>
  >({
    queryKey: getApiV1UtxoAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.utxo[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UtxoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.utxo)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.utxo)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UtxoAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UtxoAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1BlockBlockIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>,
) {
  return ['api', '/api/v1/block/:blockId', args] as const
}

export function getApiV1BlockBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlockBlockIdQueryKey>
  >({
    queryKey: getApiV1BlockBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.block[':blockId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BlockBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.block)[':blockId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.block)[':blockId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BlockBlockIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BlockBlockIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1EstimatefeeBlocksQueryKey(
  args: InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>,
) {
  return ['api', '/api/v1/estimatefee/:blocks', args] as const
}

export function getApiV1EstimatefeeBlocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1EstimatefeeBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.estimatefee[':blocks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EstimatefeeBlocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.estimatefee)[':blocks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1EstimatefeeBlocksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1SendtxHexQueryKey(
  args: InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>,
) {
  return ['api', '/api/v1/sendtx/:hex', args] as const
}

export function getApiV1SendtxHexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SendtxHexQueryKey>
  >({
    queryKey: getApiV1SendtxHexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sendtx[':hex'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1SendtxHex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.sendtx)[':hex']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.sendtx)[':hex']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SendtxHexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SendtxHexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV1SendtxIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sendtx.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sendtx.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SendtxIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebsocketQueryKey() {
  return ['websocket', '/websocket'] as const
}

export function getWebsocketQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebsocketQueryKey>
  >({
    queryKey: getWebsocketQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.websocket.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebsocket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebsocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebsocketQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
